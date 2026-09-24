import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown, ArrowRight, Bot, Building2, ChartNoAxesCombined, Cloud,
  Code2, DatabaseZap, Lightbulb, RefreshCw, Search,
  ScanText, Sparkles, UsersRound,
} from "lucide-react";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Consultoria Salesforce, Dados e IA | TSUR Tech",
  description: "A TSUR Tech é uma consultoria brasileira especializada em Salesforce, dados, integrações e inteligência artificial aplicada à operação.",
  alternates: { canonical: "/" },
};

const expertise = [
  { icon: Cloud, title: "Transformação Salesforce", text: "Estratégia, arquitetura e implementação de operações comerciais e de atendimento.", tech: "Sales Cloud · Service Cloud · Experience Cloud · Salesforce Platform" },
  { icon: DatabaseZap, title: "Dados & Integrações", text: "Dados conectados e governados para integrar sistemas, ativar jornadas e apoiar decisões.", tech: "Data Cloud · MuleSoft · ERPs · Governança de dados" },
  { icon: Bot, title: "Inteligência Artificial", text: "Agentes e IA generativa aplicados a desafios reais da operação.", tech: "Agentforce · GenAI · RAG" },
  { icon: RefreshCw, title: "Adoção & Evolução", text: "Governança, sustentação e melhoria contínua para a plataforma acompanhar a operação.", tech: "Roadmap · Sustentação · Operação assistida · Adoção" },
];

const workFormats = [
  {
    title: "Projeto fechado",
    text: "Escopo, prazo e entregáveis definidos antes de começar. Indicado para implantações e evoluções com objetivo claro.",
    meta: "Escopo fixo · Prazo definido",
  },
  {
    title: "Squad dedicado",
    text: "Time alocado por período, sob a nossa gestão, com backlog priorizado junto ao negócio. Para roadmaps contínuos de evolução da plataforma.",
    meta: "Time fixo · Ciclos contínuos",
  },
  {
    title: "Staffing",
    text: "Profissionais certificados integrados ao seu time, sob a sua gestão. Para ampliar capacidade técnica sem abrir um projeto.",
    meta: "Alocação · Gestão do cliente",
  },
  {
    title: "Sustentação e evolução contínua",
    text: "Acompanhamento recorrente depois do go-live, com backlog priorizado por adoção, risco e impacto.",
    meta: "Recorrente · SLA definido",
  },
];

const certificationBadges = [
  { src: "/certifications/application-architect.png", alt: "Salesforce Certified Application Architect" },
  { src: "/certifications/data-architect.png", alt: "Salesforce Certified Platform Data Architect" },
  { src: "/certifications/sharing-visibility-architect.png", alt: "Salesforce Certified Platform Sharing and Visibility Architect" },
  { src: "/certifications/platform-developer.png", alt: "Salesforce Certified Platform Developer I" },
  { src: "/certifications/platform-app-builder.png", alt: "Salesforce Certified Platform App Builder" },
  { src: "/certifications/platform-administrator.png", alt: "Salesforce Certified Platform Administrator" },
  { src: "/certifications/platform-administrator-ii.png", alt: "Salesforce Certified Platform Administrator II" },
  { src: "/certifications/business-analyst.png", alt: "Salesforce Certified Business Analyst" },
  { src: "/certifications/marketing-cloud-engagement-specialist.png", alt: "Salesforce Certified Marketing Cloud Engagement Specialist" },
  { src: "/certifications/platform-foundations.png", alt: "Salesforce Certified Platform Foundations" },
];

const method = [
  { icon: Search, number: "01", title: "Descoberta", text: "Entendimento da operação, definição das prioridades e dos próximos passos." },
  { icon: Lightbulb, number: "02", title: "Desenho", text: "Arquitetura proposta, prioridades e roadmap documentados antes do desenvolvimento." },
  { icon: UsersRound, number: "03", title: "Entrega", text: "Solução construída em ciclos curtos, com demonstrações e decisões validadas com o time." },
  { icon: ChartNoAxesCombined, number: "04", title: "Evolução", text: "Operação acompanhada após o go-live, com backlog priorizado por adoção, risco e impacto." },
];

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="TSUR Tech, página inicial">
          <Image src="/logo-tsur-color.png" alt="TSUR Tech" width={160} height={61} priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/solucoes">Soluções</a>
          <a href="/realty">Realty</a>
          <a href="/cases">Cases</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
        <a className="header-cta" href="/contato">Agendar diagnóstico <ArrowRight size={18} /></a>
        <nav className="mobile-nav" aria-label="Navegação móvel">
          <a href="/solucoes">Soluções</a>
          <a href="/realty">Realty</a>
          <a href="/cases">Cases</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={18} /> Salesforce · Dados · Inteligência Artificial</div>
          <h1>Salesforce, dados e IA<br />operando como<br /><span>uma coisa só.</span></h1>
          <p>A TSUR Tech é uma consultoria brasileira especializada em Salesforce, dados, integrações e inteligência artificial. Reorganizamos ecossistemas complexos para reduzir integrações frágeis e trabalho manual.</p>
          <div className="hero-actions">
            <div className="hero-primary-action">
              <div className="hero-action-row">
                <a className="button primary" href="/contato">Agendar diagnóstico <ArrowRight size={19} /></a>
                <a className="hero-secondary-link" href="/cases">Ver cases <ArrowRight size={17} /></a>
              </div>
              <small>30 minutos, sem compromisso.</small>
            </div>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Credenciais da TSUR">
          <div className="partner-badge">
            <Image src="/salesforce-partner-compact.png" alt="Selo Salesforce Partner da TSUR Tech" width={1720} height={650} priority />
          </div>
          <a href="/sobre">Conheça nossa experiência <ArrowRight size={19} /></a>
        </aside>
        <a className="hero-scroll-cue" href="#tsur"><span>Continue explorando</span><ArrowDown size={18} /></a>
      </section>

      <section className="trust-bar">
        <span>ÁREAS DE ATUAÇÃO</span>
        <strong>Sales Cloud</strong><strong>Service Cloud</strong><strong>Data Cloud</strong>
        <strong>Marketing Cloud Next</strong><strong>Agentforce</strong>
      </section>

      <section className="intro" id="tsur">
        <div className="intro-content">
          <div className="section-tag">NOSSA VISÃO</div>
          <h2>Tecnologia sem contexto<br />vira complexidade.</h2>
          <p className="intro-lead">A maioria dos projetos não falha por falta de tecnologia, e sim por decisões de arquitetura tomadas sem entender a operação. Começamos pelo negócio, e é por isso que o que entregamos continua funcionando depois do go-live.</p>
          <div className="principles">
            <article>
              <div className="principle-icon"><Lightbulb /></div>
              <h3>Visão de produto</h3>
              <p>Entendemos a operação antes de escrever a primeira linha de código.</p>
            </article>
            <article>
              <div className="principle-icon"><Code2 /></div>
              <h3>Profundidade técnica</h3>
              <p>Time certificado em diversas especialidades Salesforce.</p>
            </article>
            <article>
              <div className="principle-icon"><UsersRound /></div>
              <h3>Proximidade na entrega</h3>
              <p>Especialistas acompanham o trabalho do diagnóstico à evolução contínua.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-certifications" id="certificacoes">
        <div className="certification-gallery-head">
          <span className="section-tag">CERTIFICAÇÕES SALESFORCE</span>
          <div>
            <h2>Conhecimento técnico<br />comprovado na plataforma.</h2>
          </div>
        </div>
        <div className="certification-badge-grid" aria-label="Certificações Salesforce do time técnico da TSUR">
          {certificationBadges.map((badge) => (
            <Image
              key={badge.src}
              src={badge.src}
              alt={badge.alt}
              width={500}
              height={490}
              sizes="(max-width: 720px) 42vw, (max-width: 1050px) 28vw, 190px"
            />
          ))}
        </div>
      </section>

      <section className="expertise" id="atuacao">
        <div className="section-head">
          <span className="section-tag light">ÁREAS DE ATUAÇÃO</span>
          <div className="section-head-row"><h2>Competências que<br />trabalham juntas.</h2><p>Da estratégia à sustentação, conectamos as camadas necessárias para transformar tecnologia em resultado.</p></div>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="expertise-item" key={item.title}>
                <div className="large-icon"><Icon /></div>
                <span className="item-number">0{index + 1}</span>
                <h3>{item.title}</h3><p>{item.text}</p><small>{item.tech}</small>
              </article>
            );
          })}
        </div>
        <div className="expertise-footer"><a href="/solucoes">Explorar todas as soluções <ArrowRight size={18} /></a></div>
      </section>

      <section className="home-realty" aria-labelledby="home-realty-title">
        <div className="home-realty-copy">
          <span className="section-tag light">PRODUTO TSUR</span>
          <p className="home-realty-name">TSUR Realty</p>
          <h2 id="home-realty-title">Do primeiro atendimento à assinatura, em um só lugar.</h2>
          <a href="/realty">Conhecer o Realty <ArrowRight size={18} /></a>
        </div>
        <div className="home-realty-highlights" aria-label="Destaques do TSUR Realty">
          <article><Building2 /><div><strong>Control Tower</strong><span>A fila do dia, com prioridade, prazo e histórico.</span></div></article>
          <article><ScanText /><div><strong>Leitura automática</strong><span>Documentos recebidos viram dados no Salesforce.</span></div></article>
          <article><Bot /><div><strong>Agente conversacional</strong><span>O funil avança pela conversa, sem abrir o CRM.</span></div></article>
        </div>
      </section>

      <section className="work-formats" id="formatos">
        <div className="section-head dark">
          <span className="section-tag">FORMATOS DE TRABALHO</span>
          <div className="section-head-row">
            <h2>Do diagnóstico à sustentação,<br />no formato certo para cada operação.</h2>
            <p>Nem todo desafio precisa de um projeto completo. Escolhemos o formato pelo estágio da operação e pelo tipo de decisão que está na frente.</p>
          </div>
        </div>
        <div className="work-formats-grid">
          {workFormats.map((format, index) => (
            <article key={format.title}>
              <span className="work-format-number">0{index + 1}</span>
              <div>
                <h3>{format.title}</h3>
                <p>{format.text}</p>
                <small>{format.meta}</small>
              </div>
            </article>
          ))}
        </div>
        <aside className="work-formats-callout">
          <div>
            <strong>Não sabe qual formato faz sentido?</strong>
            <p>O diagnóstico de 30 minutos existe para isso. Mapeamos o cenário e indicamos o caminho, inclusive quando o caminho não é contratar a TSUR agora.</p>
          </div>
          <a className="button light-button" href="/contato">Falar com a TSUR <ArrowRight size={19} /></a>
        </aside>
      </section>

      <section className="method" id="metodo">
        <div className="section-head dark">
          <span className="section-tag">MÉTODO TSUR</span>
          <div className="section-head-row"><h2>Nada entra em produção<br />sem passar por aqui.</h2><p>Um processo estruturado que reduz riscos, organiza decisões e mantém o negócio próximo da entrega.</p></div>
        </div>
        <div className="method-grid">
          {method.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.number}>
                <div className="method-marker"><div className="method-icon"><Icon /></div><span>{item.number}</span></div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="method-footer"><p>O primeiro passo é entender o seu cenário.</p><a className="button primary" href="/contato">Agendar diagnóstico <ArrowRight size={19} /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
