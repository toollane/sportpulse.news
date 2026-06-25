import type { Faq } from "@/lib/mockData";

/**
 * Accessible FAQ accordion built on native <details>/<summary> (no JS).
 * Reused on the homepage and on each content page to add depth and to
 * support FAQ structured data.
 */
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-card border border-border bg-surface">
      {items.map((faq) => (
        <details key={faq.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
            {faq.question}
            <span
              aria-hidden
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-muted transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** Builds FAQPage JSON-LD from a list of FAQs for richer search results. */
export function buildFaqJsonLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
