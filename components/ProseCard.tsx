import type { ReactNode } from "react";

type ProseCardProps = {
  title: string;
  paragraphs?: string[];
  children?: ReactNode;
};

/**
 * A bordered editorial content block with a section heading (h2) and
 * either plain paragraphs or custom children. Used to add readable,
 * non-thin written content across pages.
 */
export default function ProseCard({ title, paragraphs, children }: ProseCardProps) {
  return (
    <section className="rounded-card border border-border bg-surface p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {paragraphs && paragraphs.length > 0 ? (
        <div className="mt-3 space-y-3">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed text-muted sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
