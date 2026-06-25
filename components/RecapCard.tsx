import type { Recap } from "@/lib/mockData";

function TeamRow({
  name,
  score,
  winner,
}: {
  name: string;
  score: number;
  winner: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`text-sm ${winner ? "font-semibold text-foreground" : "font-medium text-muted"}`}
      >
        {name}
      </span>
      <span
        className={`text-lg tabular-nums ${winner ? "font-bold text-foreground" : "font-semibold text-muted"}`}
      >
        {score}
      </span>
    </div>
  );
}

export default function RecapCard({ recap }: { recap: Recap }) {
  const homeWins = recap.homeScore > recap.awayScore;
  const awayWins = recap.awayScore > recap.homeScore;

  return (
    <article className="flex flex-col rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)]">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-accent">{recap.league}</span>
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-semibold text-zinc-600">
          {recap.status}
        </span>
      </div>

      <div className="mt-4 space-y-2 border-y border-border py-4">
        <TeamRow name={recap.away} score={recap.awayScore} winner={awayWins} />
        <TeamRow name={recap.home} score={recap.homeScore} winner={homeWins} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{recap.summary}</p>
    </article>
  );
}
