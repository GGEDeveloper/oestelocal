# Deploy Runbook — waphix (Ubuntu 24.04 + PM2 + Cloudflare Tunnel)

Este runbook é a fonte de verdade para deploy do repositório **oestelocal** (Next.js 15) no servidor **waphix**.

## Infra / Config (fixo)

- **Servidor**: waphix (Ubuntu 24.04 LTS)
- **Pasta do projeto**: `/srv/projects/oestelocal`
- **Porta de produção**: `3002` (não usar `3001` — está ocupada)
- **Start command (PM2)**: `PORT=3002 node server.js` (na pasta `.next/standalone`)
- **Exposição pública**: Cloudflare Named Tunnel
  - **Service**: `cloudflared-oestelocal.service`
  - **Config**: `/etc/cloudflared/oestelocal.yml`
  - **Origin**: `http://127.0.0.1:3002`
  - **Domínio temporário**: `https://oestelocal.gge.pt`

## Pré-requisitos no servidor

- Node.js **v24.14.1** via NVM
- npm **11.11.0**
- PM2 **6.0.14**
- Acesso SSH com alias: `ssh waphix`
- Tunnel Cloudflare configurado como serviço: `cloudflared-oestelocal.service`

---

## 1) Primeiro deploy (completo)

```bash
ssh waphix

# 1) Preparar pasta
mkdir -p /srv/projects/oestelocal
cd /srv/projects/oestelocal

# 2) Clonar repo (primeira vez)
git clone https://github.com/GGEDeveloper/oestelocal.git .

# 3) Configurar variáveis de ambiente
cp .env.example .env.local
# editar .env.local e preencher valores reais (ver tabela abaixo)

# 4) Build
npm ci
npm run build

# 5) Copiar .env.local para dentro do standalone (obrigatório)
cp .env.local .next/standalone/.env.local

# 6) Arrancar PM2 com o servidor standalone (PORT via env)
PORT=3002 pm2 start node \
  --name oestelocal \
  --cwd /srv/projects/oestelocal/.next/standalone \
  -- server.js
pm2 save
```

Notas:
- ⚠️ **`output: "standalone"` está activo no `next.config.ts`. Nunca usar `npm run start` nem `next start` em produção — usar sempre `node .next/standalone/server.js` com `PORT=3002`. Sempre copiar `.env.local` para `.next/standalone/.env.local` após cada build, caso contrário as variáveis de ambiente não ficam disponíveis em runtime.**
- O comando **`npm run build`** corre **`next build`** e de seguida **`scripts/copy-standalone-assets.mjs`**, que copia **`.next/static`** e **`public/`** para dentro de **`.next/standalone/`**. Sem isto, o site serve HTML mas **`/_next/static/*` devolve 404** e a página fica “sem CSS” / desconfigurada.
- A app deve responder localmente em `http://127.0.0.1:3002` e externamente via `https://oestelocal.gge.pt` (pelo tunnel).

---

## 2) Update deploy (git pull + rebuild + restart)

```bash
ssh waphix
cd /srv/projects/oestelocal

git pull
npm ci
npm run build
cp .env.local .next/standalone/.env.local
pm2 restart oestelocal
```

---

## 3) Verificação de estado pós-deploy

```bash
# PM2
pm2 show oestelocal
pm2 logs oestelocal --lines 50

# App local
curl -I http://127.0.0.1:3002

# Tunnel (serviço)
sudo systemctl status cloudflared-oestelocal.service
sudo journalctl -u cloudflared-oestelocal.service -n 30 --no-pager
```

Checklist rápido:
- `curl -I http://127.0.0.1:3002` devolve **200/307/308** (depende de redirects do Next).
- Um asset estático existe (ex.: `ls .next/standalone/.next/static/css/` e `curl -I http://127.0.0.1:3002/_next/static/css/<ficheiro>.css` deve dar **200**).
- `pm2 show oestelocal` indica status **online**.
- `systemctl status cloudflared-oestelocal.service` indica **active (running)**.

---

## 4) Troubleshooting rápido

### A) PM2 crash / app não responde em 127.0.0.1:3002

1. Ver logs:

```bash
pm2 logs oestelocal --lines 200
pm2 show oestelocal
```

2. Restart limpo:

```bash
pm2 restart oestelocal
```

3. Se suspeitares de build inválido / dependências:

```bash
cd /srv/projects/oestelocal
npm ci
npm run build
cp .env.local .next/standalone/.env.local
pm2 restart oestelocal
```

4. Confirmar que está mesmo a ouvir na porta certa:

```bash
curl -I http://127.0.0.1:3002
```

### C) Site sem estilo / layout “partido” (CSS ou JS em 404)

1. Confirma se os estáticos existem no standalone:

```bash
ls -la /srv/projects/oestelocal/.next/standalone/.next/static/css/
ls -la /srv/projects/oestelocal/.next/standalone/public/ | head
```

2. Testa um ficheiro CSS real (o nome muda entre builds):

```bash
CSS=$(ls /srv/projects/oestelocal/.next/standalone/.next/static/css/*.css | head -1 | xargs basename)
curl -I "http://127.0.0.1:3002/_next/static/css/$CSS"
```

- Se der **404**, o mais provável é ter corrido só `next build` à mão ou um build antigo: volta a correr **`npm run build`** (completo) e **`cp .env.local .next/standalone/.env.local`**, depois **`pm2 restart oestelocal`**.

### B) Tunnel down / `oestelocal.gge.pt` não responde

1. Confirmar que a app local está OK (antes de mexer no tunnel):

```bash
curl -I http://127.0.0.1:3002
```

2. Ver estado e logs do serviço:

```bash
sudo systemctl status cloudflared-oestelocal.service
sudo journalctl -u cloudflared-oestelocal.service -n 200 --no-pager
```

3. Restart do serviço:

```bash
sudo systemctl restart cloudflared-oestelocal.service
sudo systemctl status cloudflared-oestelocal.service
```

Se o serviço estiver up mas o hostname falhar, validar:
- o `ingress` no `/etc/cloudflared/oestelocal.yml` aponta para `http://127.0.0.1:3002`
- no Cloudflare Zero Trust, o Named Tunnel e o Public Hostname estão ativos para `oestelocal.gge.pt`

---

## 5) Variáveis de ambiente (`.env.local`)

Copiar `.env.example` para `.env.local` e preencher conforme disponibilidade. **Todas são opcionais** para o site funcionar.

| Variável | Descrição | Obrigatória |
|---|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | Token long-lived Instagram Graph API (ativa feed real) | Não (fallback sem feed) |
| `INSTAGRAM_USER_ID` | ID do utilizador IG | Não (não usado no código atual) |
| `CONTACT_WEBHOOK_URL` | Webhook (Make/n8n/Slack) para receber submissões do formulário | Não |
| `RESEND_API_KEY` | API key Resend para envio de email | Não |
| `CONTACT_EMAIL_TO` | Email destino do form (default: `hello@oestelocal.com`) | Não |
| `CONTACT_EMAIL_FROM` | Remetente do form (default: `Oeste Local <noreply@oestelocal.com>`) | Não |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (default: `https://oestelocal.com`) | Não (não usado no código atual) |

---

## Notas importantes

- **Domínio hardcoded**: `https://oestelocal.com` está fixo em `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` e `components/JsonLd.tsx`. No subdomínio temporário `oestelocal.gge.pt` isto é intencional/aceitável (canonical/OG apontam para o domínio final).
- **Imagens externas**: fontes permitidas em `next.config.ts` (Unsplash, Instagram CDN, Cloudinary). Se adicionares novas origens, atualizar `images.remotePatterns`.
