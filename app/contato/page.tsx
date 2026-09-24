import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Mail, MessageSquareText, Search, Send } from "lucide-react";
import ContactForm from "./ContactForm";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Contato | Fale com a TSUR Tech",
  description: "Converse com a TSUR sobre projetos de Salesforce, dados, integrações e inteligência artificial.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <main className="contact-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="TSUR Tech, página inicial"><Image src="/logo-tsur-color.png" alt="TSUR Tech" width={160} height={61} priority /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/solucoes">Soluções</a><a href="/realty">Realty</a><a href="/cases">Cases</a><a href="/sobre">Sobre</a>
          <a className="active-link" aria-current="page" href="/contato">Contato</a>
        </nav>
        <nav className="mobile-nav" aria-label="Navegação móvel"><Link href="/">Início</Link><a href="/solucoes">Soluções</a><a href="/realty">Realty</a><a href="/cases">Cases</a><a href="/sobre">Sobre</a><a aria-current="page" href="/contato">Contato</a></nav>
      </header>

      <section className="contact-shell">
        <div className="contact-intro">
          <span className="section-tag light">CONTATO</span>
          <h1>Vamos entender o seu cenário.</h1>
          <p>Antes de indicar uma tecnologia, queremos compreender o desafio, o momento da empresa e o resultado esperado.</p>
          <div className="commercial-whatsapp">
            <span className="section-tag light">WHATSAPP COMERCIAL</span>
            <p>(31) 97253-7483</p>
            <a
              className="button light-button"
              href={"https://wa.me/5531972537483?text=" + encodeURIComponent("Olá, quero conhecer mais sobre as soluções da TSUR Tech")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquareText size={22} aria-hidden="true" />
              Falar com o comercial
            </a>
          </div>
          <div className="direct-contact">
            <Mail />
            <div><span>E-MAIL DIRETO</span><a href="mailto:contato@tsur.io">contato@tsur.io</a></div>
          </div>
          <div className="contact-points"><span><Check /> Conversa objetiva</span><span><Check /> Visão técnica e de negócio</span><span><Check /> Próximos passos claros</span></div>
        </div>
        <ContactForm />
      </section>

      <section className="contact-next">
        <div><span className="section-tag">DEPOIS DO CONTATO</span><h2>Uma conversa com começo, meio e próximo passo.</h2></div>
        <div className="contact-next-steps">
          <article><span>01</span><MessageSquareText /><h3>Contexto</h3><p>Entendemos o cenário, as pessoas envolvidas e a prioridade.</p></article>
          <article><span>02</span><Search /><h3>Avaliação</h3><p>Analisamos onde tecnologia pode gerar valor com mais clareza.</p></article>
          <article><span>03</span><Send /><h3>Direcionamento</h3><p>Definimos juntos a melhor forma de avançar a conversa.</p></article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
