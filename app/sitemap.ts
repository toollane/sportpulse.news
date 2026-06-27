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
  "/explained/what-makes-a-game-worth-watching",
  "/explained/why-final-scores-do-not-tell-the-full-story",
  "/explained/how-to-understand-a-game-without-watching-it",
  "/explained/what-is-a-turning-point-in-sports",
  "/explained/how-injuries-change-the-story-of-a-game",

  "/trending/how-sports-trends-work",
  "/trending/why-athletes-go-viral",
  "/trending/why-players-trend-after-one-game",
  "/trending/why-sports-stories-change-so-fast",

  "/recaps/what-is-a-fast-sports-recap",
  "/recaps/how-to-read-a-game-recap",
  "/recaps/why-short-sports-recaps-are-useful",
  "/recaps/how-to-catch-up-after-missing-a-game",
  "/recaps/what-to-look-for-in-a-box-score",

  "/tonight/how-to-catch-up-on-sports-fast",
  "/tonight/what-to-watch-next-in-sports",
  "/tonight/how-to-follow-sports-without-watching-every-game",
  "/tonight/what-happened-in-sports-today",

  "/about",
  "/editorial-standards",
  "/contact",
  "/privacy",
  "/terms",
  "/impressum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => {
    const isHome = route === "";
    const isHub = ["/tonight", "/trending", "/recaps", "/explained"].includes(
      route,
    );
    const isTrustPage = [
      "/about",
      "/editorial-standards",
      "/contact",
      "/privacy",
      "/terms",
      "/impressum",
    ].includes(route);

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: isHome ? "daily" : "weekly",
      priority: isHome ? 1 : isHub ? 0.9 : isTrustPage ? 0.5 : 0.7,
    };
  });
}