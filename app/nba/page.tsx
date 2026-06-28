import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "NBA Pulse | SportPulse",
  description:
    "NBA Pulse is SportPulse's fast context layer for NBA games, recaps, momentum, fantasy signals, and what to watch next.",
};

export default function NbaPage() {
  return <SportFocusPage content={sportFocusPages.nba} />;
}