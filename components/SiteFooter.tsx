import Link from "next/link";

const sections = [
  {
    title: "Coverage",
    links: [
      { href: "/tonight", label: "Tonight" },
      { href: "/trending", label: "Trending" },
      { href: "/recaps", label: "Recaps" },
      { href: "/explained", label: "Explained" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/impressum", label: "Legal Notice / Impressum" },
    ],
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M2 12h4l2.5-7 5 14L16 12h6" />
                </svg>
              </span>
              <span className="text-base font-semibold tracking-tight">
                Sport<span className="text-gradient">Pulse</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The fastest way to understand what happened in sports today.
              SportPulse turns scores into clear, readable context — what
              happened, why it mattered, and what to watch next.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted">
            SportPulse is an independent sports media and analysis project. It
            is not affiliated with, endorsed by, or partnered with any league,
            team, or governing body. SportPulse does not provide betting advice
            or wagering recommendations.
          </p>
          <p className="mt-4 text-sm text-muted">
            © {year} SportPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
