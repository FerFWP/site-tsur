import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, BarChart3, Bot, Gauge, Headphones, ScanText,
  ShieldCheck, Sparkles, UsersRound,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "TSUR Realty | Plataforma de Vendas Imobiliárias sobre Salesforce",
  description:
    "Conheça o TSUR Realty, plataforma de vendas imobiliárias sobre Salesforce com atendimento, cadências, espelho de vendas, documentos, contratos e agente conversacional.",
  alternates: { canonical: "/realty" },
};

const realtyJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://tsur.io/realty#software",
  name: "TSUR Realty",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://tsur.io/realty",
  description:
    "Plataforma de vendas imobiliárias sobre Salesforce criada pela TSUR, com atendimento, cadências, espelho de vendas, simulação, documentação, contrato, leitura automática de documentos e agente conversacional.",
  provider: { "@id": "https://tsur.io/#organization" },
  featureList: [
    "Control Tower para priorização comercial",
    "Leitura automática de documentos",
    "Agente conversacional integrado ao funil",
    "Roleta e gestão de leads",
    "Cadências comerciais",
    "Gestão de visitas",
    "Espelho e simulador de vendas",
    "Gestão de compradores, crédito e contratos",
    "Repasse",
    "Pós-venda e atendimento",
    "Visita e assistência técnica",
    "Gestão de permutas",
  ],
};

const highlights = [
  {
    icon: Gauge,
    title: "Control Tower",
    text: "A fila do dia, com prioridade, prazo, etapa e histórico de cada cliente. O corretor vê quem precisa de atenção e executa a ação dali mesmo.",
  },
  {
    icon: ScanText,
    title: "Leitura automática de documentos",
    text: "Os arquivos recebidos viram dados preenchidos no Salesforce. Menos digitação, menos erro de transcrição, passagem mais rápida para a análise.",
  },
  {
    icon: Bot,
    title: "Agente conversacional",
    text: "“Concluí a visita com o cliente.” O agente identifica a negociação, pergunta o que falta e conduz a transição prevista no processo. Sem abrir o Salesforce.",
  },
];

const journey = [
  { title: "Roleta de leads", text: "Distribuição automática conforme empreendimento, região, canal, equipe e disponibilidade." },
  { title: "Gestão de leads, cadências e visitas", text: "Atendimentos, contatos e visitas organizados por etapa, prazo e próximo passo." },
  { title: "Gestão de compradores e documentos", text: "Pessoas, arquivos e pendências organizados por negociação." },
  { title: "Análise cadastral e de crédito", text: "Dados preparados para revisão, validação e tomada de decisão." },
  { title: "Espelho de Vendas", text: "Disponibilidade de unidades e informações comerciais em uma visão única." },
  { title: "Simulador de Vendas", text: "Condições, cenários e propostas estruturados durante a negociação." },
  { title: "Assinatura de contrato", text: "Documentos e etapas finais acompanhados até a formalização." },
  { title: "Repasse", text: "Etapas financeiras, pendências e responsáveis acompanhados depois da assinatura." },
  { title: "Pós-venda e atendimento", text: "Solicitações e histórico do cliente centralizados durante todo o relacionamento." },
  { title: "Visita e assistência técnica", text: "Agendamentos, ocorrências e atendimentos técnicos organizados por imóvel e cliente." },
  { title: "Gestão de permutas", text: "Imóveis, avaliações, contrapartidas e andamento das permutas reunidos em uma única visão." },
];

const audiences = [
  { icon: BarChart3, title: "Diretoria e gestão comercial", text: "Visibilidade sobre etapas, responsáveis, prazos e gargalos." },
  { icon: UsersRound, title: "Corretores e consultores", text: "Operação integrada, ações guiadas, atualização por conversa." },
  { icon: Headphones, title: "SDRs e centrais de atendimento", text: "Cadências de contato, registro de resultados, agendamento." },
  { icon: ShieldCheck, title: "Backoffice e crédito", text: "Documentos organizados por comprador, dados preenchidos, revisão rastreável." },
];

const indicators = [
  "Tempo até o primeiro contato",
  "Conversão entre etapas",
  "Comparecimento às visitas",
  "Tempo para completar a documentação",
  "Duração da análise",
  "Tempo até a assinatura",
];

export default function RealtyPage() {
  return (
    <main className="realty-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realtyJsonLd).replace(/</g, "\\u003c") }} />

      <header className="site-header">
        <a className="brand" href="/" aria-label="TSUR Tech, página inicial">
          <Image src="/logo-tsur-color.png" alt="TSUR Tech" width={160} height={61} priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/solucoes">Soluções</a>
          <a className="active-link" aria-current="page" href="/realty">Realty</a>
          <a href="/cases">Cases</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
        <a className="header-cta" href="/contato">Agendar diagnóstico <ArrowRight size={18} /></a>
        <nav className="mobile-nav" aria-label="Navegação móvel">
          <Link href="/">Início</Link><a href="/solucoes">Soluções</a><a aria-current="page" href="/realty">Realty</a><a href="/cases">Cases</a><a href="/sobre">Sobre</a><a href="/contato">Contato</a>
        </nav>
      </header>

      <section className="realty-hero">
        <div className="realty-hero-copy">
          <span className="section-tag">TSUR REALTY · PRODUTO TSUR</span>
          <h1>Do primeiro atendimento à assinatura, <span>em um só lugar.</span></h1>
          <p>Uma plataforma de vendas imobiliárias sobre Salesforce, criada pela TSUR. Reúne atendimento, cadências, espelho de vendas, simulação, documentação e contrato — com leitura automática de documentos e um agente que atualiza o funil por conversa.</p>
          <div className="realty-hero-action">
            <a className="button primary" href="#realty-destaques">Conhecer o Realty <ArrowDown size={19} /></a>
          </div>
        </div>

        <aside className="realty-product-view" aria-label="Prévia conceitual da experiência do TSUR Realty">
          <div className="realty-product-topline"><span>TSUR REALTY</span><strong>Prévia conceitual</strong></div>
          <div className="realty-interface">
            <div className="realty-control-tower">
              <div className="realty-interface-heading"><div><Gauge /></div><span>CONTROL TOWER</span><strong>Fila de hoje</strong></div>
              <div className="realty-queue-item is-current"><span>01</span><div><strong>Visita concluída</strong><small>Cliente 018 · agora</small></div></div>
              <div className="realty-queue-item"><span>02</span><div><strong>Documentação pendente</strong><small>Cliente 042 · 2 arquivos</small></div></div>
              <div className="realty-queue-item"><span>03</span><div><strong>Proposta em análise</strong><small>Cliente 031 · retorno hoje</small></div></div>
            </div>
            <div className="realty-agent-preview">
              <div className="realty-agent-heading"><div><Bot /></div><div><span>AGENTE REALTY</span><strong>Atualização por conversa</strong></div></div>
              <div className="realty-chat-message user-message">Concluí a visita com o cliente.</div>
              <div className="realty-chat-message agent-message">Encontrei a negociação. O cliente deseja avançar para proposta?</div>
              <div className="realty-chat-actions"><span>Sim, avançar</span><span>Registrar observação</span></div>
              <div className="realty-agent-status"><Sparkles /><span>Funil pronto para ser atualizado no Salesforce</span></div>
            </div>
          </div>
        </aside>
      </section>

      <section className="realty-problem">
        <div><span className="section-tag light">O PROBLEMA</span><h2>Corretor não preenche CRM.</h2></div>
        <div className="realty-problem-copy">
          <div className="realty-problem-sequence" aria-label="A conversa avança, o CRM fica para depois e a gestão perde visibilidade">
            <span>A conversa avança</span><b aria-hidden="true">→</b>
            <span>O CRM fica para depois</span><b aria-hidden="true">→</b>
            <span>A gestão perde visibilidade</span>
          </div>
          <p>Na prática, a negociação acontece onde o corretor está: na conversa, na visita e no WhatsApp. Atualizar o CRM acaba ficando para depois, não por falta de disciplina, mas porque o sistema interrompe o ritmo do atendimento. Nesse intervalo, informações se perdem, o próximo passo deixa de ficar claro e a gestão passa a enxergar a operação com atraso.</p>
          <strong>O Realty foi pensado para mudar essa dinâmica: em vez de o corretor parar para alimentar o sistema, o sistema acompanha o trabalho que já está acontecendo.</strong>
        </div>
      </section>

      <section className="realty-highlights" id="realty-destaques">
        <div className="realty-section-heading">
          <span className="section-tag">O QUE MUDA</span>
          <h2>Três coisas que mudam a operação.</h2>
        </div>
        <div className="realty-highlight-grid">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <div className="realty-highlight-top"><div className="realty-icon"><Icon /></div><span>0{index + 1}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <aside className="realty-mid-cta">
          <div><strong>Quer ver como isso funciona na sua operação?</strong><span>Mostramos o Realty a partir do seu processo comercial.</span></div>
          <a className="button primary" href="/contato">Conversar sobre o Realty <ArrowRight size={19} /></a>
        </aside>
      </section>

      <section className="realty-journey">
        <div className="realty-section-heading realty-section-heading-split">
          <div><span className="section-tag light">A JORNADA COMPLETA</span><h2>Da distribuição do lead ao pós-venda.</h2></div>
          <p>Os módulos organizam a operação sem separar o que o cliente vive do que a gestão precisa acompanhar.</p>
        </div>
        <div className="realty-journey-grid">
          {journey.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="realty-audience">
        <div className="realty-section-heading realty-section-heading-split">
          <div><span className="section-tag">PARA QUEM</span><h2>Uma operação compartilhada, sem perder cada responsabilidade.</h2></div>
          <p>Cada equipe trabalha a partir do mesmo contexto, com a visão e as ações adequadas ao seu papel.</p>
        </div>
        <div className="realty-audience-grid">
          {audiences.map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="realty-contracting">
        <div>
          <span className="section-tag light">COMO CONTRATAMOS</span>
          <h2>Três pacotes, módulos escolhidos para a sua operação.</h2>
        </div>
        <div>
          <p>Os pacotes combinam a plataforma e os serviços de implantação. O modelo tem custo de implantação e mensalidade, dimensionados pelo porte da operação e pelos módulos escolhidos.</p>
          <a className="button light-button" href="/contato">Conversar sobre o Realty <ArrowRight size={19} /></a>
        </div>
      </section>

      <section className="realty-measurement">
        <div className="realty-measurement-intro">
          <span className="section-tag">COMO VAMOS MEDIR</span>
          <h2>Sem percentuais inventados. Com indicadores definidos desde o início.</h2>
          <p>O Realty é uma solução nova. Em vez de prometer percentuais, definimos junto com o cliente os indicadores que serão acompanhados desde o início.</p>
        </div>
        <div className="realty-indicators" aria-label="Indicadores acompanhados no TSUR Realty">
          {indicators.map((indicator, index) => <div key={indicator}><span>0{index + 1}</span><strong>{indicator}</strong></div>)}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
