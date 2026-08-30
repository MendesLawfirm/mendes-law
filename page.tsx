import { attorneys } from "@/content/attorneys";
import { practiceAreas } from "@/content/practice-areas";
import { insights } from "@/content/insights";

/**
 * Foundation-phase placeholder home page.
 *
 * This exists to prove the (marketing) route group, the content layer,
 * and the Zod-validated data flow all work end to end. It is intentionally
 * unstyled beyond structural Tailwind utilities — the final visual design
 * (typography, palette, layout concept) has not been approved yet and will
 * be built in the next phase against this same data.
 */
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-24">
      <section>
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Foundation build — placeholder content
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900">
          Mendes
        </h1>
        <p className="mt-4 max-w-xl text-neutral-600">
          This is a structural placeholder for the Mendes home page. Visual
          design has not been finalized. This page exists to confirm the
          content layer, routing, and validation pipeline are working.
        </p>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-widest text-neutral-500">
          Practice Areas ({practiceAreas.length})
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {practiceAreas.map((area) => (
            <li key={area.slug} className="text-neutral-800">
              {area.title} — {area.summary}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-widest text-neutral-500">
          Attorneys ({attorneys.length})
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {attorneys.map((attorney) => (
            <li key={attorney.slug} className="text-neutral-800">
              {attorney.name} — {attorney.position}
              {attorney.isPlaceholder && (
                <span className="ml-2 text-xs uppercase tracking-wide text-amber-600">
                  demonstration content
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-widest text-neutral-500">
          Insights ({insights.length})
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {insights.map((insight) => (
            <li key={insight.slug} className="text-neutral-800">
              {insight.title} — {insight.summary}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
