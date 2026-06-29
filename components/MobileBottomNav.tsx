"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primaryLinks = [
  { href: "/tonight", label: "Today" },
  { href: "/nba", label: "NBA" },
  { href: "/nfl", label: "NFL" },
  { href: "/fantasy", label: "Fantasy" },
];

const menuLinks = [
  { href: "/mlb", label: "MLB" },
  { href: "/nhl", label: "NHL" },
  { href: "/golf", label: "Golf" },
  { href: "/trending", label: "Trending" },
  { href: "/recaps", label: "Recaps" },
  { href: "/explained", label: "Explained" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      {open ? (
        <div className="mx-3 mb-2 rounded-card border border-border bg-surface/95 p-3 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-2 gap-2">
            {menuLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-accent-soft text-accent-strong"
                      : "bg-background text-foreground hover:bg-accent-soft/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      <nav
        aria-label="Mobile quick navigation"
        className="border-t border-border/80 bg-background/90 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
      >
        <div className="grid grid-cols-5 gap-1">
          {primaryLinks.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-2 py-2.5 text-center text-xs font-semibold transition ${
                  active
                    ? "bg-accent-soft text-accent-strong"
                    : "text-muted hover:bg-accent-soft/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Open more navigation links"
            className={`rounded-xl px-2 py-2.5 text-center text-xs font-semibold transition ${
              open
                ? "bg-accent-soft text-accent-strong"
                : "text-muted hover:bg-accent-soft/60 hover:text-foreground"
            }`}
          >
            Menu
          </button>
        </div>
      </nav>
    </div>
  );
}