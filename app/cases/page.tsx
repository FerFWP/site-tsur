import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Cases Salesforce | Projetos em Operações Complexas | TSUR",
  description:
    "Conheça projetos conduzidos pelos sócios da TSUR em incorporação imobiliária, serviços financeiros e turismo, com Salesforce, integrações e automação.",
  alternates: { canonical: "/cases" },
};

const realEstateDeliveries = [
  "Captação, qualificação e distribuição automatizada de leads",
  "Roleta inteligente por empreendimento, regional, canal e equipe",
  "Atendimento omnichannel integrado a WhatsApp e telefonia",
  "Espelho de vendas com disponibilidade das unidades",
  "Simulador de propostas e condições comerciais",
  "Análise cadastral e de crédito",
  "Pré-reserva e controle de unidades",
  "Gestão de contratos e assinatura eletrônica",
  "Comissão, repasse, registro e pós-venda",
  "Integrações com ERPs do setor imobiliário",
];

const financialWorkstreams = [
  {
    title: "Jornada comercial em Salesforce",
    text: "Regras de qualificação, transições entre etapas, avaliação de perfil do cliente e atualização do processo a partir da assinatura eletrônica.",
  },
  {
    title: "Distribuição de leads por capacidade",
    text: "Mecanismo com regras de enquadramento, elegibilidade e priorização. A classificação considera produto, patrimônio e renda; a distribuição considera disponibilidade, posição na fila, carteira em atendimento e limite de recebimentos. Mudanças no perfil do consultor reavaliam sua participação nas filas.",
  },
  {
    title: "Réguas de cobrança",
    text: "Jornadas preventivas, de vencimento e pós-vencimento por e-mail, SMS e WhatsApp, com dados financeiros vindos do ERP. As regras consideram disponibilidade do boleto, baixa do pagamento, renegociação, distrato e execução jurídica.",
  },
  {
    title: "Propostas comerciais",
    text: "Simulação de vendas, organização de compradores, tabelas comerciais, negociação e geração de proposta em PDF com extrato da negociação.",
  },
  {
    title: "Integrações com sistemas corporativos",
    text: "Conexão entre o CRM e serviços externos, tratando cada evento pelo significado que ele tem para a operação: qual registro atualizar, qual etapa pode avançar e qual ação vem em seguida.",
  },
  {
    title: "Segurança e governança",
    text: "Modelos de acesso e compartilhamento alinhados à hierarquia, versionamento, revisão de código, testes e governança das publicações entre homologação e produção.",
  },
];

export default function Cases() {
  return (
    <main className="cases-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="TSUR Tech, página inicial">
          <Image src="/logo-tsur-color.png" alt="TSUR Tech" width={160} height={61} priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/solucoes">Soluções</a>
          <a href="/realty">Realty</a>
          <a className="active-link" aria-current="page" href="/cases">Cases</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
        <a className="header-cta" href="/contato">Agendar diagnóstico <ArrowRight size={18} /></a>
        <nav className="mobile-nav" aria-label="Navegação móvel">
          <Link href="/">Início</Link><a href="/solucoes">Soluções</a><a href="/realty">Realty</a><a className="active-link" aria-current="page" href="/cases">Cases</a><a href="/sobre">Sobre</a><a href="/contato">Contato</a>
        </nav>
      </header>

      <section className="cases-hero">
        <div className="cases-hero-copy">
          <span className="section-tag">PROJETOS</span>
          <h1>O que já construímos em operações complexas.</h1>
        </div>
        <div className="cases-hero-support">
          <p>Três operações, três setores, a mesma natureza de problema: jornada comercial fragmentada, sistemas desconectados e decisões tomadas sem visibilidade.</p>
          <small>Os clientes não são nomeados por acordo de confidencialidade.</small>
        </div>
      </section>

      <article className="case-story case-story-light" id="incorporacao-imobiliaria">
        <header className="case-story-header">
          <div className="case-story-index"><span>CASE</span><strong>01</strong></div>
          <div>
            <span className="case-sector">INCORPORAÇÃO IMOBILIÁRIA</span>
            <h2>Uma jornada imobiliária conectada de ponta a ponta.</h2>
            <p className="case-client"><strong>Cliente</strong> Incorporadora de grande porte, com atuação nacional.</p>
          </div>
        </header>

        <div className="case-story-grid">
          <section className="case-copy-block">
            <span>O DESAFIO</span>
            <p>Uma operação comercial com múltiplos canais de entrada de leads, distribuição manual dos atendimentos e pouca integração entre vendas, análise de crédito, contratos e ERP. Faltava visibilidade sobre a disponibilidade das unidades e sobre o andamento da jornada do cliente.</p>
          </section>
          <section className="case-copy-block case-outcome-block">
            <span>O QUE MUDOU</span>
            <p>A jornada comercial passou a viver em uma única plataforma. Leads, oportunidades e unidades ganharam controle centralizado, as atividades manuais diminuíram e as áreas de comercial, crédito, contratos e pós-venda passaram a operar sobre a mesma visão.</p>
          </section>
        </div>

        <section className="case-built-section">
          <div className="case-built-heading">
            <span>O QUE CONSTRUÍMOS</span>
            <p>Mapeamento funcional, arquitetura e implantação de uma solução completa para digitalizar a jornada imobiliária no Salesforce.</p>
          </div>
          <ul className="case-deliveries">
            {realEstateDeliveries.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ul>
        </section>

        <div className="case-technologies">
          <span>TECNOLOGIAS</span>
          <p>Sales Cloud · Service Cloud · Experience Cloud · Marketing Cloud · Digital Engagement · LWC · Flow · Apex · APIs REST · WhatsApp e telefonia · TOTVS RM, Sienge e Mega</p>
        </div>
      </article>

      <article className="case-story case-story-dark" id="servicos-financeiros">
        <header className="case-story-header">
          <div className="case-story-index"><span>CASE</span><strong>02</strong></div>
          <div>
            <span className="case-sector">SERVIÇOS FINANCEIROS</span>
            <h2>Distribuição, cobrança e governança guiadas pela operação.</h2>
            <p className="case-client"><strong>Cliente</strong> Operação de consultoria financeira com rede de consultores.</p>
          </div>
        </header>

        <section className="case-copy-block case-challenge-wide">
          <span>O DESAFIO</span>
          <p>Conectar a jornada comercial de ponta a ponta, da entrada do lead à formalização do contrato, em uma operação onde a qualificação depende do perfil do cliente, a distribuição depende da capacidade real de cada consultor e a cobrança precisa refletir a situação de cada parcela.</p>
        </section>

        <section className="case-built-section">
          <div className="case-built-heading">
            <span>O QUE CONSTRUÍMOS</span>
            <p>Seis frentes conduzidas ao longo do relacionamento.</p>
          </div>
          <div className="case-workstreams">
            {financialWorkstreams.map((item, index) => (
              <div key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-copy-block case-outcome-wide">
          <span>O QUE MUDOU</span>
          <p>A distribuição de leads deixou de ser rodízio simples e passou a considerar carga operacional real. A cobrança passou a responder à situação de cada obrigação financeira, não a uma sequência fixa de disparos. E as mudanças na plataforma passaram a ter caminho controlado até produção.</p>
        </section>
      </article>

      <article className="case-story case-story-soft" id="turismo-e-viagens">
        <header className="case-story-header">
          <div className="case-story-index"><span>CASE</span><strong>03</strong></div>
          <div>
            <span className="case-sector">TURISMO E VIAGENS</span>
            <h2>Uma base comercial preparada para a expansão nacional.</h2>
            <p className="case-client"><strong>Cliente</strong> Operadora de turismo com atuação nacional, atendendo clientes em mais de 2.000 municípios.</p>
          </div>
        </header>

        <div className="case-story-grid case-story-grid-three">
          <section className="case-copy-block">
            <span>O DESAFIO</span>
            <p>Modernizar a estrutura comercial e de atendimento para sustentar um novo ciclo de crescimento após a pandemia: integrar informações entre áreas, padronizar processos, centralizar o relacionamento com o cliente e preparar a base tecnológica para expansão nacional.</p>
          </section>
          <section className="case-copy-block">
            <span>O QUE CONSTRUÍMOS</span>
            <p>Levantamento e análise dos processos, condução das reuniões com as áreas de negócio, estruturação dos requisitos funcionais e desenho dos processos comerciais e de atendimento. A definição funcional da solução Salesforce foi feita em alinhamento direto entre presidência, áreas de negócio e equipe técnica, com acompanhamento da implementação, apoio à homologação e suporte à adoção.</p>
          </section>
          <section className="case-copy-block case-outcome-block">
            <span>O QUE MUDOU</span>
            <p>As informações dos clientes passaram a ter um lugar único, os processos comerciais e de atendimento ganharam padrão, e as interações passaram a ser rastreáveis. A plataforma ficou preparada para acompanhar a expansão dos negócios.</p>
          </section>
        </div>

        <div className="case-technologies">
          <span>TECNOLOGIAS</span>
          <p>Sales Cloud · Service Cloud · Lightning Platform · Flow · Objetos e processos personalizados · Regras de validação e aprovação · Integrações com SAP e Vindi</p>
        </div>
      </article>

      <aside className="case-attribution">
        <span>NOTA DE ATRIBUIÇÃO</span>
        <p>Os projetos acima foram conduzidos pelos sócios da TSUR em suas trajetórias no ecossistema Salesforce. É a bagagem que sustenta o trabalho que fazemos hoje.</p>
      </aside>

      <section className="case-cta">
        <div>
          <span className="section-tag light">PRÓXIMO PASSO</span>
          <h2>Sua operação tem um problema parecido?</h2>
        </div>
        <div>
          <p>Começamos entendendo o contexto antes de recomendar tecnologia.</p>
          <a className="button light-button" href="/contato">Agendar diagnóstico <ArrowRight size={19} /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
