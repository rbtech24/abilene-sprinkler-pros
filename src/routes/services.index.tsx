import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, CircleCheck } from "lucide-react"
import { ContactBand, PageHero } from "@/components/site-shell"
import { services } from "@/lib/site-content"

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [{ title: "Sprinkler Repair Services in Abilene, TX" }, { name: "description", content: "Sprinkler head, valve, leak, controller, full-system repair, and tune-up services for Abilene, Texas homes. Call (855) 695-1000." }, { property: "og:title", content: "Sprinkler Repair Services in Abilene, TX" }, { property: "og:description", content: "Residential irrigation diagnostics and repair services for Abilene and nearby communities." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/services" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/services" }] }),
  component: ServicesPage,
})

function ServicesPage() {
  return <>
    <PageHero eyebrow="Residential irrigation services" title="Sprinkler repair services for Abilene lawns" intro="Start with the symptom you can see. Each service page explains likely causes, what a careful diagnosis includes, and related irrigation problems worth checking in Abilene." />
    <section className="mx-auto mt-12 max-w-6xl px-5"><div className="grid gap-4 md:grid-cols-2">{services.map((service, index) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="group rounded-xl bg-card p-6 ring-1 ring-line hover:bg-glass"><span className="font-mono text-[11px] text-primary">0{index + 1} · Abilene service</span><h2 className="mt-2 font-display text-xl font-bold group-hover:text-primary">{service.name}</h2><p className="mt-2 text-sm leading-6 text-cool">{service.short}</p><div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">Service details <ArrowRight size={16} /></div></Link>)}</div></section>
    <section className="mx-auto mt-16 max-w-6xl px-5"><div className="grid gap-8 lg:grid-cols-2"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">One connected system</p><h2 className="mt-3 font-display text-3xl font-bold">Good diagnostics reduce repeat repairs.</h2><p className="mt-4 text-[15px] leading-7 text-cool">A broken head may be obvious, but pressure loss might also come from a cracked fitting. A zone that will not run could involve a valve, field wire, controller terminal, or water supply. Looking at the complete zone helps separate the visible symptom from the actual failure.</p></div><div className="grid gap-3">{["Run every available irrigation zone", "Observe pressure, coverage, runoff, and shutoff", "Explain immediate repairs and lower-priority improvements", "Re-test affected zones after approved work"].map((item) => <div key={item} className="flex gap-3 rounded-xl bg-card p-4 text-sm ring-1 ring-line"><CircleCheck size={19} className="shrink-0 text-primary" />{item}</div>)}</div></div></section>
    <ContactBand />
  </>
}