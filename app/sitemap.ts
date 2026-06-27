import type { MetadataRoute } from "next";

const baseUrl = "https://sportpulse.news";

const routes = [
  "",
  "/tonight",
  "/trending",
  "/recaps",
  "/explained",

  "/explained/what-is-sportpulse",
  "/explained/why-sports-fans-search-for-scores",
  "/explained/what-makes-an-athlete-trending",
  "/explained/why-game-context-matters",
  "/explained/how-sports-momentum-shifts",
  "/explained/why-one-play-can-change-a-game",

  "/trending/how-sports-trends-work",

  "/recaps/what-is-a-fast-sports-recap",

  "/tonight/how-to-catch-up-on-sports-fast",

  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/impressum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1
        : ["/tonight", "/trending", "/recaps", "/explained"].includes(route)
          ? 0.9
          : ["/about", "/contact", "/privacy", "/terms", "/impressum"].includes(route)
            ? 0.5
            : 0.7,
  }));
}