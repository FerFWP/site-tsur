import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://tsur.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Consultoria Salesforce, Dados e IA | TSUR Tech",
  description:
    "A TSUR Tech é uma consultoria brasileira especializada em Salesforce, dados, integrações e inteligência artificial aplicada à operação.",
  applicationName: "TSUR Tech",
  authors: [{ name: "TSUR Tech", url: siteUrl }],
  creator: "TSUR Tech",
  publisher: "TSUR Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "TSUR Tech",
    title: "Consultoria Salesforce, Dados e IA | TSUR Tech",
    description: "Salesforce, dados e inteligência artificial operando como uma coisa só.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TSUR Tech — Salesforce, dados e IA operando como uma coisa só" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria Salesforce, Dados e IA | TSUR Tech",
    description: "Salesforce, dados e inteligência artificial operando como uma coisa só.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "TSUR Tech",
      legalName: "TSUR Tech e Consultoria LTDA",
      url: siteUrl,
      logo: `${siteUrl}/logo-tsur-color.png`,
      email: "contato@tsur.io",
      telephone: "+55-31-97253-7483",
      slogan: "Salesforce, dados e IA operando como uma coisa só.",
      sameAs: ["https://www.linkedin.com/company/tsur-tech/"],
      areaServed: { "@type": "Country", name: "Brasil" },
      location: [
        { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Curitiba", addressRegion: "PR", addressCountry: "BR" } },
        { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Belo Horizonte", addressRegion: "MG", addressCountry: "BR" } },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+55-31-97253-7483",
        email: "contato@tsur.io",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
      knowsAbout: ["Salesforce", "Sales Cloud", "Service Cloud", "Data Cloud", "MuleSoft", "Agentforce", "Inteligência Artificial", "Integrações", "Sustentação Salesforce"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "TSUR Tech",
      url: siteUrl,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
