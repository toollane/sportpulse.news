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

export default function ReadingProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  const visible = useMemo(() => isArticlePath(pathname), [pathname]);

  useEffect(() => {
    if (!visible) {
      setProgress(0);
      return;
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(Math.min(scrollTop / documentHeight, 1));
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [visible, pathname]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}