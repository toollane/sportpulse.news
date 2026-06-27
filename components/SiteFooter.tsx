import Link from "next/link";

const mainLinks = [
  { href: "/tonight", label: "Tonight" },
  { href: "/trending", label: "Trending" },
  { href: "/recaps", label: "Recaps" },
  { href: "/explained", label: "Explained" },
];

const trustLinks = [
  { href: "/about", label: "About" },
  { href: "/editorial-standards", label: "Editorial Standards" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/impressum", label: "Legal Notice / Impressum" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-[-0.05em] text-white"
            >
              SportPulse
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              The fastest way to understand what happened in sports today.
              Fast recaps, sports trends, and clear explanations for fans who
              want context without clutter.
            </p>

            <p className="mt-5 text-xs leading-5 text-white/40">
              SportPulse is an independent sports media and analysis project.
              Not affiliated with any league, team, athlete, sportsbook, media
              company, or governing body.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/35">
              Explore
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/35">
              Trust
            </h2>

            <nav className="mt-4 flex flex-col gap-3">
              {trustLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SportPulse. All rights reserved.</p>
          <p>Independent sports intelligence, recaps, and explanations.</p>
        </div>
      </div>
    </footer>
  );
}

export const Footer = SiteFooter;

export default SiteFooter;