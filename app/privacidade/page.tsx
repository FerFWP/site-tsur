import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de Privacidade | TSUR Tech",
  description: "Saiba como a TSUR Tech trata informações enviadas pelos canais de contato do site.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
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
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: setembro de 2026.</p>

        <h2>1. Quem somos</h2>
        <p>A TSUR Tech e Consultoria LTDA, CNPJ 65.077.783/0001-57, é responsável pelos canais de contato disponíveis neste site.</p>

        <h2>2. Informações enviadas por você</h2>
        <p>O formulário pode solicitar nome, empresa, e-mail profissional, telefone, solução de interesse, momento do projeto e uma descrição do desafio. O site prepara essas informações no aplicativo de e-mail do usuário; a mensagem só é compartilhada com a TSUR quando o próprio usuário confirma o envio.</p>

        <h2>3. Finalidade do tratamento</h2>
        <p>Utilizamos as informações recebidas para responder ao contato, compreender o cenário apresentado, preparar reuniões e dar continuidade a uma possível relação comercial.</p>

        <h2>4. Compartilhamento e conservação</h2>
        <p>Os dados não são comercializados. Eles podem ser tratados por provedores necessários à comunicação e à operação dos canais escolhidos pelo usuário, sempre de acordo com suas próprias políticas e com a legislação aplicável. Mantemos as informações pelo tempo necessário para atender ao contato e cumprir obrigações legais.</p>

        <h2>5. Seus direitos</h2>
        <p>Nos termos da LGPD, você pode solicitar confirmação do tratamento, acesso, correção, eliminação quando aplicável e informações sobre o uso dos seus dados.</p>

        <h2>6. Contato</h2>
        <p>Para dúvidas ou solicitações relacionadas à privacidade, escreva para <a href="mailto:contato@tsur.io">contato@tsur.io</a>.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
