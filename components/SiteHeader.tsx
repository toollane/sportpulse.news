"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/tonight", label: "Tonight" },
  { href: "/nba", label: "NBA" },
  { href: "/nfl", label: "NFL" },
  { href: "/mlb", label: "MLB" },
  { href: "/nhl", label: "NHL" },
  { href: "/golf", label: "Golf" },
  { href: "/fantasy", label: "Fantasy" },
  { href: "/trending", label: "Trending" },
  { href: "/recaps", label: "Recaps" },
  { href: "/explained", label: "Explained" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label="SportPulse home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
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
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Sport<span className="text-gradient">Pulse</span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    setHidden(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      setHidden(false);
      return;
    }

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 32) {
        setHidden(false);
      } else if (scrollDelta > 8 && currentScrollY > 120) {
        setHidden(true);
      } else if (scrollDelta < -8) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md transition-transform duration-300 ease-out will-change-transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-2.5 py-2 text-sm font-medium transition-colors lg:px-3 ${
                  active
                    ? "bg-accent-soft text-accent-strong"
                    : "text-muted hover:bg-accent-soft/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/#newsletter"
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Get the briefing
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-surface md:hidden">
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    active
                      ? "bg-accent-soft text-accent-strong"
                      : "text-foreground hover:bg-accent-soft/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#newsletter"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2.5 text-base font-semibold text-background"
            >
              Get the briefing
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}