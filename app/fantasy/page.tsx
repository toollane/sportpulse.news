import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "Fantasy Impact Center | SportPulse",
  description:
    "Understand fantasy sports signals with context for injury impact, usage change, waiver signals, player trends, opportunity watch, and start/sit factors.",
};

export default function FantasyPage() {
  return <SportFocusPage content={sportFocusPages.fantasy} />;
}