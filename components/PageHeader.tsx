import Breadcrumbs from "@/components/Breadcrumbs";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

const sectionBreadcrumbs: Record<
  string,
  { label: string; href: string; hubTitle: string }
> = {
  Explained: {
    label: "Explained",
    href: "/explained",
    hubTitle: "The context behind the headlines",
  },
  Recaps: {
    label: "Recaps",
    href: "/recaps",
    hubTitle: "Every game that mattered, in under a minute",
  },
  Trending: {
    label: "Trending",
    href: "/trending",
    hubTitle: "What sports fans are paying attention to now",
  },
  Tonight: {
    label: "Tonight",
    href: "/tonight",
    hubTitle: "What happened tonight, explained",
  },
};

/**
 * Shared page intro used by the inner content and trust pages so the
 * eyebrow / h1 / lead pattern stays consistent across the site.
 * Renders the single <h1> for the page.
 */
export default function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  const section = sectionBreadcrumbs[eyebrow];
  const breadcrumbItems = section
    ? [
        { label: "Home", href: "/" },
        ...(title === section.hubTitle
          ? [{ label: section.label }]
          : [
              { label: section.label, href: section.href },
              { label: title },
            ]),
      ]
    : undefined;

  return (
    <header className="max-w-3xl">
      {breadcrumbItems ? <Breadcrumbs items={breadcrumbItems} /> : null}
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
