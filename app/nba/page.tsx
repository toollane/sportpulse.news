import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "NBA Pulse Today | SportPulse",
  description:
    "Catch up on the NBA night with fast context for scores, rotation watch, player signals, fantasy basketball usage, and what to watch next.",
};

export default function NbaPage() {
  return <SportFocusPage content={sportFocusPages.nba} />;
}