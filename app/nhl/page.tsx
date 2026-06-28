import type { Metadata } from "next";
import SportFocusPage from "@/components/SportFocusPage";
import { sportFocusPages } from "@/lib/sportFocusPages";

export const metadata: Metadata = {
  title: "NHL Ice Pulse | SportPulse",
  description:
    "Understand the NHL night with fast context for matchups, goalies, line movement, power-play signals, playoff race pressure, and fantasy hockey impact.",
};

export default function NhlPage() {
  return <SportFocusPage content={sportFocusPages.nhl} />;
}
