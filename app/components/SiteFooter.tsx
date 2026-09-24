import Image from "next/image";

const whatsappUrl =
  "https://wa.me/5531972537483?text=" +
  encodeURIComponent("Olá, quero conhecer mais sobre as soluções da TSUR Tech");

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 3C8.86 3 3.02 8.8 3.02 15.94c0 2.28.6 4.5 1.73 6.45L3 29l6.78-1.78a13.08 13.08 0 0 0 6.25 1.59h.01c7.18 0 13.02-5.8 13.02-12.94C29.06 8.8 23.22 3 16.04 3Zm0 23.63h-.01a10.9 10.9 0 0 1-5.55-1.51l-.4-.24-4.02 1.05 1.07-3.9-.26-.4a10.7 10.7 0 0 1-1.67-5.7c0-5.93 4.86-10.75 10.84-10.75 5.98 0 10.84 4.82 10.84 10.75 0 5.92-4.86 10.74-10.84 10.74Zm5.94-8.04c-.33-.16-1.93-.94-2.23-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.25-.7.09-.33-.16-1.38-.5-2.62-1.6a9.82 9.82 0 0 1-1.82-2.25c-.2-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.54.1-.22.05-.41-.03-.57-.08-.17-.73-1.77-1.01-2.42-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.69 0 1.59 1.16 3.12 1.32 3.34.16.22 2.28 3.46 5.52 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.1 1.93-.79 2.2-1.54.27-.76.27-1.42.19-1.55-.09-.14-.3-.22-.63-.38Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.34 3.5A1.84 1.84 0 1 1 5.3 7.18a1.84 1.84 0 0 1 .04-3.68ZM3.75 8.65h3.18V19.5H3.75V8.65Zm5.17 0h3.05v1.48h.04c.42-.81 1.46-1.66 3-1.66 3.21 0 3.8 2.12 3.8 4.87v6.16h-3.17v-5.46c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88v5.56H8.92V8.65Z"
      />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="TSUR Tech, página inicial">
            <Image src="/logo-tsur-white.png" alt="TSUR Tech" width={150} height={57} />
          </a>
          <p>Salesforce, dados e IA operando como uma coisa só.</p>
        </div>

        <nav className="footer-column" aria-label="Navegação do rodapé">
          <strong>Navegação</strong>
          <a href="/solucoes">Soluções</a>
          <a href="/realty">Realty</a>
          <a href="/cases">Cases</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>

        <nav className="footer-column" aria-label="Soluções TSUR">
          <strong>Soluções</strong>
          <a href="/solucoes#salesforce">Transformação Salesforce</a>
          <a href="/solucoes#dados">Dados &amp; Integrações</a>
          <a href="/solucoes#ia">Inteligência Artificial</a>
          <a href="/solucoes#evolucao">Adoção &amp; Evolução</a>
        </nav>

        <div className="footer-column footer-locations">
          <strong>Onde estamos</strong>
          <span>Curitiba, PR</span>
          <span>Belo Horizonte, MG</span>
          <p>Atendimento em<br />todo o Brasil.</p>
        </div>

        <div className="footer-column footer-contact">
          <strong>Contato</strong>
          <a href="mailto:contato@tsur.io">contato@tsur.io</a>
          <div className="footer-socials" aria-label="Redes e canais da TSUR">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              title="Falar no WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/tsur-tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da TSUR"
              title="LinkedIn da TSUR"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TSUR Tech · TSUR Tech e Consultoria LTDA · CNPJ 65.077.783/0001-57</p>
        <nav aria-label="Informações legais">
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos</a>
        </nav>
      </div>
    </footer>
  );
}
