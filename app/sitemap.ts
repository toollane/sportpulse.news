import type { MetadataRoute } from "next";

const siteUrl = "https://sportpulse.news";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "daily", priority: 1 },
    { path: "/tonight", changeFrequency: "daily", priority: 0.9 },
    { path: "/trending", changeFrequency: "daily", priority: 0.9 },
    { path: "/recaps", changeFrequency: "daily", priority: 0.8 },
    { path: "/explained", changeFrequency: "weekly", priority: 0.8 },
    {
      path: "/explained/what-is-sportpulse",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/explained/why-sports-fans-search-for-scores",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/explained/what-makes-an-athlete-trending",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/explained/why-game-context-matters",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/explained/how-sports-momentum-shifts",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/explained/why-one-play-can-change-a-game",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/trending/how-sports-trends-work",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/tonight/how-to-catch-up-on-sports-fast",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/recaps/what-is-a-fast-sports-recap",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.4 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
