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

  "/trending/how-sports-trends-work",
  "/trending/why-athletes-go-viral",
  "/trending/why-players-trend-after-one-game",

  "/recaps/what-is-a-fast-sports-recap",
  "/recaps/how-to-read-a-game-recap",
  "/recaps/why-short-sports-recaps-are-useful",
  "/recaps/how-to-catch-up-after-missing-a-game",

  "/tonight/how-to-catch-up-on-sports-fast",
  "/tonight/what-to-watch-next-in-sports",
  "/tonight/how-to-follow-sports-without-watching-every-game",

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