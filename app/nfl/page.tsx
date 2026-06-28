import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "NFL Week Pulse | SportPulse",
  description:
    "Reset the NFL week with fast context for matchups, Sunday results, teams under pressure, injury impact, fantasy football signals, and Monday storylines.",
};

export default function NflPage() {
  return <SportFocusPage content={sportFocusPages.nfl} />;
}