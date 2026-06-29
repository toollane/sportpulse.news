"use client";

import type { FormEvent } from "react";

const contactEmail = "hello@sportpulse.news";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const emailSubject = subject
      ? `SportPulse contact: ${subject}`
      : "SportPulse contact";

    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <div className="rounded-card border border-border bg-surface p-6 sm:p-8">
      <div className="mb-6 rounded-2xl border border-accent/20 bg-accent-soft/40 p-4">
        <p className="text-sm font-semibold text-foreground">
          Contact SportPulse directly
        </p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Your message opens as a prepared email draft to{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold text-accent hover:text-accent-strong"
          >
            {contactEmail}
          </a>
          . This keeps contact simple and transparent while direct form delivery
          is being prepared.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={fieldClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className={fieldClass}
            placeholder="How can we help?"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${fieldClass} resize-y`}
            placeholder="Share your feedback, question, or idea."
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            Open email draft
          </button>

          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent sm:w-auto"
          >
            Email directly
          </a>
        </div>
      </form>
    </div>
  );
}