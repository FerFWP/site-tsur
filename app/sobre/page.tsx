import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Sobre a TSUR | Experiência em Salesforce e visão de negócio",
  description: "Conheça a origem da TSUR Tech, a experiência de seus sócios e os princípios que orientam projetos de Salesforce, dados e inteligência artificial.",
  alternates: { canonical: "/sobre" },
};

const principles = [
  { number: "01", title: "Você fala com quem executa.", text: "Quem senta na primeira conversa é quem desenha a arquitetura e acompanha a entrega." },
  { number: "02", title: "Presença de verdade", text: "Trabalhamos com poucos clientes para conhecer profundamente cada operação e acompanhar sua evolução." },
  { number: "03", title: "Documentamos antes de construir.", text: "Arquitetura, prioridades e roadmap saem por escrito antes do desenvolvimento começar. Nada entra em produção sem passar por aí." },
];

export default function Sobre() {
  return (
    <main className="about-story-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="TSUR Tech, página inicial">
          <Image src="/logo-tsur-color.png" alt="TSUR Tech" width={160} height={61} priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/solucoes">Soluções</a><a href="/realty">Realty</a><a href="/cases">Cases</a><a className="active-link" href="/sobre" aria-current="page">Sobre</a><a href="/contato">Contato</a>
        </nav>
        <a className="header-cta" href="/contato">Agendar diagnóstico <ArrowRight size={18} /></a>
        <nav className="mobile-nav" aria-label="Navegação móvel">
          <Link href="/">Início</Link><a href="/solucoes">Soluções</a><a href="/realty">Realty</a><a href="/cases">Cases</a><a href="/sobre" aria-current="page">Sobre</a><a href="/contato">Contato</a>
        </nav>
      </header>

      <section className="about-story-hero">
        <div className="about-story-hero-main">
          <span className="section-tag">SOBRE A TSUR</span>
          <h1>Experiência em tecnologia.<br /><span>Visão de negócio.</span></h1>
        </div>
        <div className="about-story-hero-support">
          <p>A TSUR nasceu da união entre quem passou os últimos anos construindo operações complexas em Salesforce e quem entende o que o negócio precisa antes da tecnologia entrar.</p>
        </div>
      </section>

      <section className="about-origin">
        <div className="about-origin-heading">
          <span className="section-tag">POR QUE EXISTIMOS</span>
          <h2>Negócio e tecnologia precisam decidir juntos.</h2>
        </div>
        <div className="about-origin-copy">
          <p>Decisões de tecnologia precisam partir de quem entende o negócio e conhece a operação.</p>
          <p>A TSUR reúne essas duas perspectivas: necessidades comerciais, decisões e processos de um lado; arquitetura, integração e governança do outro.</p>
        </div>
      </section>

      <section className="about-leadership">
        <div className="about-story-heading"><span className="section-tag">QUEM CONDUZ</span><h2>Experiência que conecta<br />negócio e tecnologia.</h2></div>
        <div className="about-founder-grid single-founder">
          <article className="about-founder-card">
            <div className="about-founder-summary">
              <div className="about-founder-image">
                <Image className="about-founder-image-main" src="/alvaro-silva.png" alt="Álvaro Silva, sócio Comercial da TSUR Tech" fill sizes="(max-width: 520px) 112px, (max-width: 1000px) 170px, 190px" quality={95} priority />
              </div>
              <div className="about-founder-intro">
                <span className="about-founder-role">SÓCIO · COMERCIAL E SOLUÇÕES</span><h3>Álvaro Silva</h3>
                <p>Especialista no ecossistema Salesforce desde 2015 e com mais de 11 anos liderando iniciativas de transformação digital, possuo formação em História e especializações em Gestão Estratégica de Negócios e Gestão Avançada de Processos. Minha trajetória é marcada pela concepção de arquiteturas de alto impacto e pela entrega de valor para grandes marcas do mercado.</p>
              </div>
            </div>
            <div className="about-founder-body">
              <p>Como sócio e líder da frente Comercial e de Soluções na TSUR, atuo no direcionamento estratégico, no crescimento da consultoria e no desenvolvimento do nosso portfólio de ofertas. À frente do relacionamento com o mercado e com sólida bagagem nos setores de incorporação imobiliária, saúde, agronegócio e turismo, conecto os objetivos de negócio dos nossos clientes a arquiteturas Salesforce robustas, garantindo rentabilidade, eficiência operacional e geração de valor de longo prazo.</p>
              <blockquote>Compromisso, transparência e evolução contínua.</blockquote>
            </div>
          </article>
          {/* Perfil de Thomaz Toledo temporariamente oculto.
          <article className="about-founder-card">
            <div className="about-founder-summary">
              <div className="about-founder-image">
                <Image className="about-founder-image-main" src="/thomaz-toledo.png" alt="Thomaz Toledo, sócio de Operações da TSUR Tech" fill sizes="(max-width: 520px) 112px, (max-width: 1000px) 170px, 190px" quality={95} />
              </div>
              <div className="about-founder-intro">
                <span className="about-founder-role">SÓCIO · OPERAÇÕES</span><h3>Thomaz Toledo</h3>
                <p>São 12 anos em TI, 8 deles dedicados exclusivamente a Salesforce. Sou tecnólogo em Tecnologia da Informação e pós-graduado em Arquitetura de Soluções. Minha trajetória foi construída na parte da plataforma que o usuário não vê, mas que sustenta tudo: modelo de dados, regras de acesso, integrações e o caminho seguro de cada mudança até produção.</p>
              </div>
            </div>
            <div className="about-founder-body">
              <p>Como sócio responsável pelas Operações na TSUR, conduzo a arquitetura e a entrega dos projetos. Em serviços financeiros e incorporação imobiliária, estruturei jornadas comerciais da captação do lead à assinatura do contrato, desenhei mecanismos de distribuição de leads que consideram a capacidade real de cada consultor, réguas de cobrança que entendem distrato e renegociação, integrações com assinatura eletrônica e ERPs, e a governança de acessos e publicações que mantém a plataforma estável enquanto ela evolui.</p>
              <blockquote>Ética, transparência e lealdade.</blockquote>
            </div>
          </article>
          */}
        </div>
      </section>

      <section className="about-work">
        <div className="about-story-heading light-heading"><span className="section-tag light">COMO TRABALHAMOS</span><h2>Princípios que aparecem na entrega.</h2></div>
        <div className="about-principles">
          {principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}
        </div>
      </section>

      <section className="about-story-cta">
        <div><span className="section-tag">VAMOS COMEÇAR</span><h2>O primeiro passo é entender o seu cenário.</h2></div>
        <div className="about-story-cta-action"><p>30 minutos de conversa, sem compromisso. Ao final, o problema prioritário e os próximos passos.</p><a className="button primary" href="/contato">Agendar diagnóstico <ArrowRight size={19} /></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
