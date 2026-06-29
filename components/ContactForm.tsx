"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend is connected yet. This acknowledges the message locally only.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-border bg-surface p-6 text-center">
        <p className="text-base font-semibold text-foreground">
          Thanks for reaching out.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This is a demo form and does not yet send messages. Once message
          delivery is live, we&rsquo;ll respond to inquiries as quickly as we
          can.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@example.com" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required className={fieldClass} placeholder="How can we help?" />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
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

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
