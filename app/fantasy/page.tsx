import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "Fantasy Sports | SportPulse",
  description:
    "SportPulse is building fantasy football and fantasy basketball context for usage changes, injuries, player trends, and matchup signals.",
};

export default function FantasyPage() {
  return <SportFocusPage content={sportFocusPages.fantasy} />;
}