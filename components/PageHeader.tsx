type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

/**
 * Shared page intro used by the inner content and trust pages so the
 * eyebrow / h1 / lead pattern stays consistent across the site.
 * Renders the single <h1> for the page.
 */
export default function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
        {eyebrow}
      </span>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {lead}
      </p>
    </header>
  );
}
