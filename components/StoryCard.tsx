import type { Story } from "@/lib/mockData";

const categoryStyles: Record<Story["category"], string> = {
  Result: "bg-emerald-50 text-emerald-700",
  Story: "bg-accent-soft text-accent-strong",
  Analysis: "bg-violet-50 text-violet-700",
  Injury: "bg-amber-50 text-amber-700",
  Transfer: "bg-sky-50 text-sky-700",
};

export default function StoryCard({
  story,
  featured = false,
}: {
  story: Story;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col rounded-card border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-20px_rgba(79,70,229,0.45)] ${
        featured ? "md:p-8" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className={`rounded-full px-2.5 py-1 font-semibold ${categoryStyles[story.category]}`}
        >
          {story.category}
        </span>
        <span className="font-medium text-muted">{story.sport}</span>
      </div>

      <h3
        className={`mt-4 font-semibold tracking-tight text-foreground ${
          featured ? "text-2xl leading-snug" : "text-lg leading-snug"
        }`}
      >
        {story.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {story.summary}
      </p>

      <div className="mt-5 flex items-center gap-3 text-xs font-medium text-muted">
        <span>{story.readTime}</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
        <span>{story.timeAgo}</span>
      </div>
    </article>
  );
}
