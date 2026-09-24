import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Termos de Uso | TSUR Tech",
  description: "Termos aplicáveis ao uso do site institucional da TSUR Tech.",
  alternates: { canonical: "/termos" },
};

export default function Termos() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="TSUR Tech, página inicial"><Image src="/logo-tsur-color.png" alt="TSUR Tech" width={160} height={61} priority /></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="/solucoes">Soluções</a><a href="/realty">Realty</a><a href="/cases">Cases</a><a href="/sobre">Sobre</a><a href="/contato">Contato</a></nav>
        <a className="header-cta" href="/contato">Agendar diagnóstico <ArrowRight size={18} /></a>
        <nav className="mobile-nav" aria-label="Navegação móvel"><a href="/solucoes">Soluções</a><a href="/realty">Realty</a><a href="/cases">Cases</a><a href="/sobre">Sobre</a><a href="/contato">Contato</a></nav>
      </header>

      <article className="legal-content">
        <span className="section-tag">INFORMAÇÕES LEGAIS</span>
        <h1>Termos de Uso</h1>
        <p className="legal-updated">Última atualização: setembro de 2026.</p>

        <h2>1. Finalidade do site</h2>
        <p>Este site apresenta a TSUR Tech, suas competências, soluções e formas de trabalho. O conteúdo tem caráter institucional e informativo.</p>

        <h2>2. Contato e propostas</h2>
        <p>O envio de uma mensagem, o agendamento de uma conversa ou a realização de um diagnóstico não cria obrigação de contratação. Escopo, prazos, responsabilidades e condições comerciais serão definidos em proposta ou contrato específico.</p>

        <h2>3. Uso adequado</h2>
        <p>O usuário se compromete a utilizar o site e seus canais de contato de forma lícita, sem interferir no funcionamento do serviço ou enviar conteúdo malicioso, enganoso ou que viole direitos de terceiros.</p>

        <h2>4. Propriedade intelectual</h2>
        <p>Textos, identidade visual, marcas e demais conteúdos próprios da TSUR são protegidos pela legislação aplicável. Marcas de terceiros pertencem aos seus respectivos titulares e são apresentadas apenas para identificar tecnologias, certificações ou parcerias.</p>

        <h2>5. Disponibilidade e links externos</h2>
        <p>A TSUR pode atualizar o site e seus conteúdos a qualquer momento. Links para serviços externos, como WhatsApp e LinkedIn, estão sujeitos às condições e políticas dessas plataformas.</p>

        <h2>6. Contato</h2>
        <p>Dúvidas sobre estes termos podem ser enviadas para <a href="mailto:contato@tsur.io">contato@tsur.io</a>.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
