# Deploy — Waphix (Ubuntu + PM2 + NPM proxy)

## 1. Pré-requisitos no servidor
- Node.js 20+
- PM2 (`npm i -g pm2`)
- Domínio apontado (`oestelocal.com`)

## 2. Upload e instalação
```bash
ssh user@waphix
mkdir -p /srv/projects/oestelocal && cd /srv/projects/oestelocal
# (envia o zip ou faz git clone)
unzip oestelocal-web.zip && cd oestelocal-web
npm ci
npm run build
```

## 3. Variáveis de ambiente
Copia `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```
Preenche apenas o que tiveres já:
- `INSTAGRAM_ACCESS_TOKEN` — Long-lived token da Graph API (vem depois)
- `INSTAGRAM_USER_ID` — ID da conta @oestelocal
- `CONTACT_WEBHOOK_URL` — Opcional. Webhook para receber submissões (Make/Zapier/n8n)
- `RESEND_API_KEY` + `CONTACT_EMAIL_TO` — Opcional. Envio direto por email

Sem nenhuma destas variáveis, o site funciona: feed Instagram cai para placeholders e o form de contacto valida + responde 200 (mas não envia).

## 4. Arrancar com PM2
```bash
pm2 start npm --name oestelocal -- start
pm2 save
pm2 startup
```
A app fica em `http://localhost:3001`.

## 5. Reverse proxy (NPM — Nginx Proxy Manager)
- Domain Names: `oestelocal.com`, `www.oestelocal.com`
- Forward Hostname/IP: `127.0.0.1`
- Forward Port: `3001`
- Block Common Exploits: ON
- Websockets Support: ON
- SSL: Request Let's Encrypt + Force SSL + HTTP/2

## 6. Atualizações
```bash
cd /srv/projects/oestelocal/oestelocal-web
git pull            # ou substitui ficheiros
npm ci
npm run build
pm2 restart oestelocal
```

## Estrutura
- `app/` — Pages (App Router) — homepage, /experiencias, /destinos, /parceiros, /sobre, /contacto, /diario
- `app/api/instagram/feed` — proxy Graph API (stub funcional)
- `app/api/contact` — handler do form (webhook + Resend opcionais)
- `lib/data.ts` — destinos, parceiros, experiências (PT/EN)
- `lib/i18n.tsx` — dicionários e LangProvider
- `public/img/` — imagens de paisagens locais (Wikimedia Commons)

## SEO
- `app/sitemap.ts` + `app/robots.ts` ativos
- JSON-LD em todas as páginas (TravelAgency, TouristDestination, etc.)
- hreflang PT/EN no `<head>`
