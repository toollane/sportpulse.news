import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contactTopics } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Contact — Get in touch with SportPulse",
  description:
    "Questions, feedback, corrections, or partnership ideas? Contact the SportPulse team at hello@sportpulse.news. We read every message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        lead="We're building SportPulse in the open and we genuinely value reader feedback. Whether you've spotted something, have an idea for coverage, or just want to say hello, we'd love to hear from you."
      />

      {/* Primary contact details */}
      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Email us
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          The fastest way to reach the team is by email. We read every message
          and aim to respond to genuine inquiries as quickly as we can.
        </p>
        <a
          href="mailto:hello@sportpulse.news"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          hello@sportpulse.news
        </a>
      </section>

      <section className="mt-8" aria-label="What to contact us about">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          What you can reach us about
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {contactTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-card border border-border bg-surface p-5"
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {topic.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-label="Contact form">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Send a message
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Prefer a form? Fill in the details below and we&rsquo;ll get back to
          you.
        </p>
        <div className="mt-5">
          <ContactForm />
        </div>
      </section>

      <p className="mt-8 text-sm leading-relaxed text-muted">
        Please note: SportPulse is an independent project run by a small team.
        During this early phase, the contact form is a demo and does not yet
        deliver messages, so email is the most reliable way to reach us.
        Message handling through the form will be enabled as the platform
        launches.
      </p>
    </div>
  );
}
