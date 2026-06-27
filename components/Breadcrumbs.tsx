import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  includeJsonLd?: boolean;
};

const siteUrl = "https://sportpulse.news";

export default function Breadcrumbs({
  items,
  includeJsonLd = true,
}: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      {includeJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="font-medium transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      isLast ? "font-medium text-foreground/70" : undefined
                    }
                  >
                    {item.label}
                  </span>
                )}
                {!isLast ? (
                  <span aria-hidden className="text-border">
                    &gt;
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
