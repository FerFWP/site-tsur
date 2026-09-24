import type { MetadataRoute } from "next";

const siteUrl = "https://tsur.io";
const lastModified = new Date("2026-09-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/solucoes`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/realty`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/cases`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/sobre`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contato`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/termos`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
