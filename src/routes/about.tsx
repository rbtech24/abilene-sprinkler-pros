import { createFileRoute, Link } from "@tanstack/react-router"
import repairImage from "@/assets/sprinkler-repair-detail.jpg"
import { ContactBand, PageHero } from "@/components/site-shell"
import { phoneDisplay, phoneHref, requestServiceUrl } from "@/lib/site-content"

export const Route = createFileRoute("/about")({ head: () => ({ meta: [{ title: "About Abilene Sprinkler Repair" }, { name: "description", content: "Abilene Sprinkler Repair diagnoses residential irrigation problems in Abilene, Texas. Call (855) 695-1000." }, { property: "og:title", content: "About Abilene Sprinkler Repair" }, { property: "og:description", content: "Diagnostic-first sprinkler repair for Abilene and nearby West Texas communities." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/about" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/about" }] }), component: AboutPage })

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Local service, clear answers" title="Built for Abilene sprinkler problems" intro="Abilene Sprinkler Repair connects homeowners with practical irrigation diagnostics and a direct way to request service in Abilene and nearby towns." />
      <section className="mx-auto mt-12 grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
        <img src={repairImage} alt="Sprinkler head and irrigation pipe being repaired beside a Bermuda lawn" loading="lazy" width={1200} height={800} className="rounded-2xl ring-1 ring-line" />
        <div>
          <h2 className="font-display text-2xl font-bold">Repair the cause, then verify the result</h2>
          <p className="mt-4 text-[15px] leading-7 text-cool">The work starts with what the system is doing: where water appears, which zones respond, how pressure changes, and whether the controller and valves communicate. That keeps the repair tied to evidence instead of a guess from the first brown spot.</p>
          <p className="mt-4 text-[15px] leading-7 text-cool">Calls for this site are answered at {phoneDisplay}, the published Mr. Sprinkler Repair line. Abilene yards deal with semi-arid heat, wind, Bermuda, and caliche and clay soils, so a Gulf Coast watering schedule is the wrong starting point. A street address, a fixed public schedule, and a license number are not printed here. Call and those details are confirmed when the visit is scheduled.</p>
          <a href={phoneHref} className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Call {phoneDisplay}</a>
          <a href={requestServiceUrl} className="ml-3 inline-flex rounded-full bg-glass px-5 py-3 text-sm font-semibold ring-1 ring-line">Request service</a>
        </div>
      </section>
      <ContactBand />
    </>
  )
}
