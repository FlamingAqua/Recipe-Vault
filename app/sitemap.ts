import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://recipe-vault.vercel.app",
      priority: 1,
    },
  ];
}