import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von SportPulse mit Platzhaltern für die rechtlich erforderlichen Angaben des Seitenbetreibers in Deutschland.",
  alternates: { canonical: "/impressum" },
};

const placeholderRows = [
  { label: "Name", value: "[Name eintragen]" },
  { label: "Adresse", value: "[Adresse eintragen]" },
  { label: "E-Mail", value: "[E-Mail-Adresse eintragen]" },
  {
    label: "Verantwortliche Person nach geltendem deutschen Recht",
    value: "[Name der verantwortlichen Person eintragen]",
  },
];

export default function ImpressumPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <header>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
          Rechtliche Angaben
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Impressum
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Angaben gemäß den in Deutschland geltenden rechtlichen
          Informationspflichten. Diese Seite enthält Platzhalter und muss vor
          der finalen rechtlichen Nutzung geprüft und vervollständigt werden.
        </p>
      </header>

      <section className="mt-10 rounded-card border border-accent/30 bg-accent-soft/50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Wichtiger Hinweis
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
          Dieses Impressum ist eine Vorlage für SportPulse und ersetzt keine
          Rechtsberatung. Die Angaben müssen vor der Veröffentlichung durch
          die Seitenbetreiberin oder den Seitenbetreiber ergänzt und rechtlich
          geprüft werden. Insbesondere Name, Anschrift, Kontaktinformationen
          und verantwortliche Person dürfen nicht als final gelten, solange die
          Platzhalter nicht ersetzt wurden.
        </p>
      </section>

      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Anbieterkennzeichnung
        </h2>
        <dl className="mt-6 divide-y divide-border">
          {placeholderRows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6"
            >
              <dt className="text-sm font-semibold text-foreground">
                {row.label}
              </dt>
              <dd className="text-sm leading-relaxed text-muted">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Angaben zum Projekt
        </h2>
        <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            SportPulse ist ein unabhängiges Sportmedien- und Analyseprojekt.
            Der Dienst konzentriert sich auf Sporttrends, kurze Recaps,
            Erklärungen und tägliche Briefings, damit Leserinnen und Leser
            schneller verstehen können, was im Sport passiert ist und warum es
            relevant sein kann.
          </p>
          <p>
            SportPulse ist nicht mit Ligen, Teams, Sportwettenanbietern,
            Medienunternehmen, Athletinnen, Athleten oder Sportverbänden
            verbunden, von diesen beauftragt oder offiziell empfohlen.
            SportPulse gibt keine Wett-Tipps und keine
            Glücksspiel-Empfehlungen.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Kontakt
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Für allgemeine Anfragen, Korrekturen oder Hinweise nutzen Sie bitte
          die oben angegebene E-Mail-Adresse, sobald diese final ergaenzt wurde.
          Weitere Informationen zum Projekt finden Sie auf der{" "}
          <Link
            href="/about"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            About-Seite
          </Link>{" "}
          und in der{" "}
          <Link
            href="/privacy"
            className="font-semibold text-accent hover:text-accent-strong"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
