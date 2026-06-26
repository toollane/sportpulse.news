import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SportPulse",
  description:
    "Read the SportPulse privacy policy, including information about analytics, cookies, advertising, contact data, and user privacy rights.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#111111]">
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            Privacy
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            This Privacy Policy explains how SportPulse handles information
            when you visit sportpulse.news, contact us, or use our sports
            briefing and analysis pages.
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Who operates SportPulse?
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is an independent sports media and analysis project
              operated by Nicklas Wolf, Am Dorfe 3, 37133 Friedland, Germany.
              You can contact the operator by email at{" "}
              <a
                href="mailto:toolfixio@gmail.com"
                className="underline decoration-black/25 underline-offset-4 hover:decoration-black"
              >
                toolfixio@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              What information do we collect?
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              At this stage, SportPulse is primarily an informational website.
              We do not require users to create an account, log in, or submit
              personal profile information to read our content.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              We may process limited technical information that is automatically
              generated when you visit a website, such as browser type, device
              information, pages visited, approximate time of access, referring
              pages, and basic server log information. This information helps us
              operate, secure, and improve the website.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Contact by email
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              If you contact SportPulse by email, we may process the information
              you provide, such as your email address, name, message content,
              and any details needed to respond. We use this information only to
              handle your request and maintain appropriate records.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Cookies and similar technologies
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse may use cookies or similar technologies to operate the
              website, understand basic usage, improve user experience, and, in
              the future, support advertising or analytics services.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              You can usually control or delete cookies through your browser
              settings. Blocking cookies may affect how some websites function,
              although the core SportPulse reading experience should remain
              accessible.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Advertising and Google AdSense
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse may apply for and use Google AdSense or similar
              advertising services in the future. If advertising is enabled,
              third-party vendors, including Google, may use cookies to serve
              ads based on a user&apos;s prior visits to this website or other
              websites.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              Google&apos;s use of advertising cookies enables Google and its
              partners to serve ads based on visits to SportPulse and/or other
              websites on the Internet. Users may be able to opt out of
              personalized advertising through Google&apos;s ad settings or other
              available industry opt-out tools.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              If SportPulse serves personalized ads to users in the European
              Economic Area, the United Kingdom, or Switzerland, SportPulse will
              need to use an appropriate consent management solution that meets
              Google&apos;s applicable consent requirements before such ads are
              served.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Analytics
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse may use privacy-conscious analytics or standard web
              analytics tools in the future to understand which pages are useful,
              how visitors navigate the website, and where improvements are
              needed. If additional analytics tools are added, this Privacy
              Policy should be updated accordingly.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Embedded content and external links
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse may link to external websites, official sports sources,
              media platforms, or third-party services. We are not responsible
              for the privacy practices, content, or security of external
              websites. Users should review the privacy policies of any external
              sites they visit.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Data retention
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              We keep personal information only for as long as reasonably
              necessary for the purpose for which it was collected, such as
              responding to a contact request, maintaining website security, or
              complying with applicable obligations.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Your rights
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              Depending on your location and applicable law, you may have rights
              to request access, correction, deletion, restriction, or
              portability of your personal information. You may also have the
              right to object to certain processing.
            </p>
            <p className="mt-4 leading-8 text-black/65">
              To make a privacy-related request, contact us at{" "}
              <a
                href="mailto:toolfixio@gmail.com"
                className="underline decoration-black/25 underline-offset-4 hover:decoration-black"
              >
                toolfixio@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Children&apos;s privacy
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              SportPulse is intended for a general audience and is not designed
              for children. We do not knowingly collect personal information
              from children.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Changes to this Privacy Policy
            </h2>
            <p className="mt-4 leading-8 text-black/65">
              We may update this Privacy Policy as SportPulse develops, adds new
              features, introduces analytics, or enables advertising. The latest
              version will be published on this page.
            </p>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              Related pages
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/terms"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Terms of Use
              </Link>
              <Link
                href="/impressum"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Legal Notice / Impressum
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="rounded-2xl border border-black/10 p-4 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                About SportPulse
              </Link>
            </div>
          </section>

          <p className="pt-4 text-sm leading-6 text-black/45">
            Last updated: June 26, 2026. This Privacy Policy should be reviewed
            before enabling advertising, analytics, newsletter tools, or other
            third-party services.
          </p>
        </div>
      </section>
    </main>
  );
}