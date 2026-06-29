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
            <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Message helper
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          Send a prepared message.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Fill out the fields below and SportPulse will open your email app with
          a prepared message to hello@sportpulse.news. Nothing is sent without
          your confirmation.
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

        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            Open email draft
          </button>
        </div>
      </form>
    </div>
  );
}