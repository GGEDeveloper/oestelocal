import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Partilha uma dica, uma história ou uma ideia de parceria. Respondemos por Instagram ou email.",
};

export default function ContactPage() {
  return (
    <section className="container pt-12 md:pt-20 pb-24 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="pill">Contacto</p>
        <h1 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
          Conta-nos o que encontraste.
        </h1>
        <p className="mt-6 font-serif-display italic text-ocean-600 text-[20px]">
          Parceiros, sítios, sugestões — respondemos sempre.
        </p>
        <ul className="mt-10 space-y-4 text-[15px]">
          <li>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Instagram</span>
            <br />
            <a className="link-under" href="https://instagram.com/oestelocal" target="_blank" rel="noopener">
              @oestelocal
            </a>
          </li>
          <li>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55">WhatsApp</span>
            <br />
            <a className="link-under" href="https://wa.me/351961325834" target="_blank" rel="noopener">
              +351 961 325 834
            </a>
          </li>
          <li>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Email</span>
            <br />
            <a className="link-under" href="mailto:ola@oestelocal.com">ola@oestelocal.com</a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-7">
        <ContactForm />
      </div>
    </section>
  );
}
