"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const articleSections = ["explained", "recaps", "tonight", "trending"];

function isArticlePath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length < 2) {
    return false;
  }

  return articleSections.includes(parts[0]);
}

export default function BackToTopButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const enabled = useMemo(() => isArticlePath(pathname), [pathname]);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled, pathname]);

  if (!enabled) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent md:bottom-6 md:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
    >
      Top
      <span aria-hidden>↑</span>
    </button>
  );
}