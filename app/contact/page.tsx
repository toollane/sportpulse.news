import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Get in touch with SportPulse",
  description:
    "Questions, feedback, or partnership ideas? Contact the SportPulse team. We read every message and we'd love to hear how we can improve.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="max-w-2xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Contact
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          We&rsquo;re building SportPulse in the open and we genuinely value
          reader feedback. Whether you&rsquo;ve spotted something, have an idea
          for coverage, or just want to say hello, use the form below.
        </p>
      </header>

      <div className="mt-10">
        <ContactForm />
      </div>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border border-border bg-surface p-6">
          <h2 className="text-base font-semibold tracking-tight text-foreground">
            General inquiries
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            For questions about the project, coverage suggestions, or
            corrections, the contact form is the fastest way to reach us.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            hello@sportpulse.news
          </p>
        </div>
        <div className="rounded-card border border-border bg-surface p-6">
          <h2 className="text-base font-semibold tracking-tight text-foreground">
            Response time
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            SportPulse is an independent project run by a small team. We aim to
            read every message and respond to genuine inquiries as quickly as we
            can.
          </p>
        </div>
      </section>

      <p className="mt-8 text-sm leading-relaxed text-muted">
        Please note: the email address above is provided for the demo and the
        form does not yet deliver messages. Message handling will be enabled as
        the platform launches.
      </p>
    </div>
  );
}
