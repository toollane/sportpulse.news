import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "MLB Daily Pulse | SportPulse",
  description:
    "Read the baseball day through series context, probable pitchers, bullpen watch, wild card movement, fantasy baseball signals, and what to watch next.",
};

export default function MlbPage() {
  return <SportFocusPage content={sportFocusPages.mlb} />;
}
