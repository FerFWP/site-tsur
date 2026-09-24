import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined,
  Cloud, DatabaseZap, Gauge, GitBranch,
  Headphones, Layers3, PlugZap, RefreshCcw,
  ShieldCheck, Sparkles, UsersRound, Workflow,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Soluções | Salesforce, Dados e Inteligência Artificial | TSUR",
  description:
    "Conheça as soluções da TSUR para Salesforce, dados, integrações, automação e inteligência artificial aplicada à operação.",
  alternates: { canonical: "/solucoes" },
};

const solutionsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "@id": "https://tsur.io/solucoes#service-salesforce", name: "Transformação Salesforce", serviceType: "Consultoria, implementação e evolução Salesforce", description: "Estratégia, arquitetura, implementação, evolução e sustentação de operações Salesforce.", url: "https://tsur.io/solucoes#salesforce", provider: { "@id": "https://tsur.io/#organization" }, areaServed: { "@type": "Country", name: "Brasil" } },
    { "@type": "Service", "@id": "https://tsur.io/solucoes#service-dados", name: "Dados e Integrações", serviceType: "Arquitetura de dados e integrações", description: "Arquitetura de dados, Data Cloud, MuleSoft e integração do Salesforce com ERPs, APIs e portais.", url: "https://tsur.io/solucoes#dados", provider: { "@id": "https://tsur.io/#organization" }, areaServed: { "@type": "Country", name: "Brasil" } },
    { "@type": "Service", "@id": "https://tsur.io/solucoes#service-ia", name: "Inteligência Artificial", serviceType: "Inteligência artificial aplicada à operação", description: "Agentes no Salesforce, IA generativa, automação inteligente e bases de conhecimento integradas à operação.", url: "https://tsur.io/solucoes#ia", provider: { "@id": "https://tsur.io/#organization" }, areaServed: { "@type": "Country", name: "Brasil" } },
    { "@type": "Service", "@id": "https://tsur.io/solucoes#service-evolucao", name: "Adoção e Evolução", serviceType: "Sustentação e evolução Salesforce", description: "Sustentação, suporte, evolução contínua, capacitação e gestão da evolução da plataforma.", url: "https://tsur.io/solucoes#evolucao", provider: { "@id": "https://tsur.io/#organization" }, areaServed: { "@type": "Country", name: "Brasil" } },
  ],
};

const salesforceCapabilities = [
  { icon: Cloud, title: "Implementação Salesforce", text: "Estratégia, desenho e configuração da plataforma de acordo com os processos do negócio." },
  { icon: RefreshCcw, title: "Evolução e sustentação", text: "Melhorias contínuas, correções, governança do backlog e suporte à operação." },
  { icon: ShieldCheck, title: "Arquitetura e governança da plataforma", text: "Segurança, permissões e padrões técnicos para o Salesforce evoluir com consistência." },
];

const dataCapabilities = [
  { icon: Layers3, title: "Arquitetura de dados", text: "Modelagem, unificação de fontes e desenho da visão única do cliente." },
  { icon: PlugZap, title: "Integrações", text: "Conexão do Salesforce com ERPs, APIs, portais e outras plataformas da operação." },
  { icon: ShieldCheck, title: "Governança de dados", text: "Regras, qualidade, origem e responsabilidade para dados confiáveis." },
];

const aiCapabilities = [
  { icon: Bot, title: "Agentes no Salesforce", text: "Desenho e implementação de agentes integrados aos processos e dados da operação. No TSUR Realty, o agente atualiza o funil por conversa, sem exigir que o corretor abra o CRM." },
  { icon: BrainCircuit, title: "IA generativa aplicada", text: "Experiências de IA em fluxos reais, com contexto e critérios de segurança." },
  { icon: Workflow, title: "Automação inteligente", text: "Orquestração de atividades repetitivas para reduzir esforço e acelerar respostas." },
  { icon: Layers3, title: "Base de conhecimento", text: "Estruturação do conhecimento da empresa para respostas fundamentadas e auditáveis." },
];

const adoptionCapabilities = [
  { icon: Headphones, title: "Sustentação e suporte", text: "Tratamento contínuo de incidentes, correções e necessidades da operação." },
  { icon: RefreshCcw, title: "Evolução contínua", text: "Backlog priorizado por adoção, risco e impacto para a plataforma continuar avançando." },
  { icon: UsersRound, title: "Adoção e capacitação", text: "Acompanhamento das equipes para transformar funcionalidades em uso consistente." },
  { icon: ShieldCheck, title: "Gestão da evolução", text: "Critérios, documentação e responsabilidades claras para priorizar e conduzir mudanças." },
];

export default function Solucoes() {
  return (
    <main className="solutions-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJsonLd).replace(/</g, "\\u003c") }} />
      <header className="site-header">
        <a className="brand" href="/" aria-label="TSUR Tech, página inicial">
          <Image src="/logo-tsur-color.png" alt="TSUR Tech" width={160} height={61} priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a className="active-link" href="/solucoes">Soluções</a>
          <a href="/realty">Realty</a>
          <a href="/cases">Cases</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
        <a className="header-cta" href="/contato">Agendar diagnóstico <ArrowRight size={18} /></a>
        <nav className="mobile-nav" aria-label="Navegação móvel">
          <Link href="/">Início</Link>
          <a href="/realty">Realty</a>
          <a href="/cases">Cases</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
      </header>

      <section className="solutions-hero">
        <div className="solutions-hero-copy">
          <span className="section-tag">NOSSAS SOLUÇÕES</span>
          <h1>Da plataforma à operação.</h1>
          <p>Conectamos Salesforce, dados e inteligência artificial para resolver desafios concretos, reduzir complexidade e preparar a empresa para evoluir.</p>
          <a className="button primary" href="/contato">Agendar diagnóstico <ArrowRight size={19} /></a>
        </div>
        <div className="solution-map" aria-label="Frentes de soluções da TSUR">
          <div className="map-label"><span>NOSSAS FRENTES</span><small>Da estratégia à evolução contínua</small></div>
          <a href="#salesforce"><span>01</span><div className="map-icon"><Cloud /></div><strong>Transformação Salesforce</strong><ArrowDown /></a>
          <a href="#dados"><span>02</span><div className="map-icon"><DatabaseZap /></div><strong>Dados & Integrações</strong><ArrowDown /></a>
          <a href="#ia"><span>03</span><div className="map-icon"><Bot /></div><strong>Inteligência Artificial</strong><ArrowDown /></a>
          <a href="#evolucao"><span>04</span><div className="map-icon"><RefreshCcw /></div><strong>Adoção & Evolução</strong><ArrowDown /></a>
        </div>
      </section>

      <section className="solution-outcomes">
        <span>O QUE VOCÊ GANHA</span>
        <div><Gauge /><strong>Mais eficiência</strong><p>Menos atividades manuais e processos mais fluidos.</p></div>
        <div><GitBranch /><strong>Mais integração</strong><p>Informações conectadas entre sistemas e equipes.</p></div>
        <div><ChartNoAxesCombined /><strong>Melhores decisões</strong><p>Dados confiáveis e visibilidade sobre a operação.</p></div>
      </section>

      <section className="solution-band salesforce-band" id="salesforce">
        <div className="solution-lead">
          <div className="solution-main-icon"><Cloud /></div>
          <div className="solution-section-label"><span className="section-tag light">SALESFORCE</span><span className="solution-number">01</span></div>
          <h2>Uma plataforma que acompanha o negócio.</h2>
          <p>Estruturamos e evoluímos ambientes Salesforce com atenção à experiência das pessoas, à qualidade técnica e aos objetivos da operação.</p>
          <div className="solution-products"><span>Sales Cloud</span><span>Service Cloud</span><span>Experience Cloud</span><span>Marketing Cloud Next</span></div>
        </div>
        <div className="capability-list dark-list">
          {salesforceCapabilities.map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="solution-band data-band" id="dados">
        <div className="solution-lead">
          <div className="solution-main-icon"><DatabaseZap /></div>
          <div className="solution-section-label"><span className="section-tag">DADOS & INTEGRAÇÕES</span><span className="solution-number">02</span></div>
          <h2>Informação certa, no lugar certo.</h2>
          <p>Conectamos fontes, organizamos dados e desenhamos integrações para que a tecnologia sustente uma visão única e confiável da operação.</p>
          <div className="solution-products"><span>Data Cloud</span><span>MuleSoft</span><span>APIs</span><span>ERPs</span></div>
        </div>
        <div className="capability-list light-list">
          {dataCapabilities.map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="solution-band ai-band" id="ia">
        <div className="solution-lead">
          <div className="solution-main-icon"><Sparkles /></div>
          <div className="solution-section-label"><span className="section-tag light">INTELIGÊNCIA ARTIFICIAL</span><span className="solution-number">03</span></div>
          <h2>IA aplicada ao trabalho real.</h2>
          <p>Transformamos possibilidades de inteligência artificial em soluções integradas aos processos, aos dados e às regras da empresa.</p>
          <div className="solution-products"><span>Agentforce</span><span>GenAI</span><span>RAG</span><span>Einstein</span></div>
        </div>
        <div className="capability-list dark-list">
          {aiCapabilities.map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="solution-band adoption-band" id="evolucao">
        <div className="solution-lead">
          <div className="solution-main-icon"><RefreshCcw /></div>
          <div className="solution-section-label"><span className="section-tag">ADOÇÃO & EVOLUÇÃO</span><span className="solution-number">04</span></div>
          <h2>Valor que continua depois do go-live.</h2>
          <p>Acompanhamos a operação para aumentar a adoção, organizar prioridades e fazer a plataforma evoluir sem perder governança.</p>
          <div className="solution-products"><span>SLA definido</span><span>Backlog priorizado</span><span>Ciclos contínuos</span></div>
        </div>
        <div className="capability-list light-list">
          {adoptionCapabilities.map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="solutions-cta">
        <div><span className="section-tag light">PRÓXIMO PASSO</span><h2>Qual desafio precisa ser resolvido agora?</h2></div>
        <div><p>Começamos entendendo o contexto antes de recomendar tecnologia.</p><a className="button light-button" href="/contato">Agendar diagnóstico <ArrowRight size={19} /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
