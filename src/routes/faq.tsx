import { createFileRoute, Link } from "@tanstack/react-router"
import { ContactBand, PageHero } from "@/components/site-shell"

const faqs = [
  ["What sprinkler problems do you cover?", "Broken and misaligned heads, leaking pipe and fittings, stuck valves, wiring and controller faults, uneven coverage, pressure symptoms, and seasonal tune-ups."],
  ["Do you serve towns outside Abilene?", "Yes. Service information covers Abilene, Buffalo Gap, Tye, Merkel, Clyde, Hawley, Potosi, and Impact."],
  ["Why does one zone have low pressure?", "Possible causes include a line leak, a restricted valve, clogged nozzles, too many heads on the zone, or a supply issue. Comparing that zone with the rest of the system narrows the cause."],
  ["Why does water continue after the timer stops?", "A valve may be stuck open because of debris, diaphragm wear, or an electrical issue. Shut off the irrigation water if active flow is causing damage, and call (855) 695-1000."],
  ["Can a controller solve dry spots?", "Programming can improve timing, but it cannot correct broken heads, blocked spray, poor spacing, or a leaking line. Repair coverage first, then set the schedule for Abilene’s current watering rules."],
  ["How can I prepare for a service visit?", "Know where the controller and irrigation shutoff are located, clear access to valve boxes when you can, and note which zones show the problem."],
  ["Are pricing and same-day service guaranteed?", "No price or same-day promise is published on this page. Call (855) 695-1000. Scope and timing are confirmed before work begins."],
  ["Are licensing details listed?", "Mr. Sprinkler Repair states that its irrigators are licensed in Texas. This page does not print a license number. Call (855) 695-1000 to confirm."],
]

export const Route = createFileRoute("/faq")({ head: () => ({ meta: [{ title: "Sprinkler Repair FAQ | Abilene, TX" }, { name: "description", content: "Answers about sprinkler leaks, low pressure, valves, controllers, coverage, and repair service in Abilene, Texas. Call (855) 695-1000." }, { property: "og:title", content: "Abilene Sprinkler Repair FAQ" }, { property: "og:description", content: "Clear answers to common residential irrigation repair questions in Abilene." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/faq" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/faq" }] }), component: FaqPage })

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Homeowner answers" title="Sprinkler repair frequently asked questions" intro="Practical answers about common irrigation symptoms in Abilene, what to have ready for a visit, and how to reach the office at (855) 695-1000." />
      <section className="mx-auto mt-12 max-w-4xl px-5">
        <div className="grid gap-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-xl bg-card p-5 ring-1 ring-line">
              <summary className="cursor-pointer list-none font-display font-bold">{q}<span className="float-right text-primary group-open:rotate-45">+</span></summary>
              <p className="mt-3 pr-8 text-sm leading-6 text-cool">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-cool">For issue-specific guidance, browse all <Link to="/services" className="font-semibold text-primary">sprinkler repair services</Link> or read the <Link to="/blog" className="font-semibold text-primary">Abilene irrigation blog</Link>.</p>
      </section>
      <ContactBand />
    </>
  )
}
