import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "NFL Pulse | SportPulse",
  description:
    "NFL Pulse is SportPulse's fast context layer for NFL matchups, weekly recaps, fantasy football relevance, and what changed.",
};

export default function NflPage() {
  return <SportFocusPage content={sportFocusPages.nfl} />;
}