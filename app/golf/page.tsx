import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "Golf Tournament Pulse | SportPulse",
  description:
    "Follow golf tournaments with context for leaderboard movement, round swings, player form, major storylines, Sunday pressure, and what to watch next.",
};

export default function GolfPage() {
  return <SportFocusPage content={sportFocusPages.golf} />;
}
