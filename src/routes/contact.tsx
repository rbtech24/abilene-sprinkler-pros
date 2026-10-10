import { createFileRoute, Link } from "@tanstack/react-router"
import { Clock3, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/site-shell"
import { phoneDisplay, phoneHref, requestServiceUrl } from "@/lib/site-content"

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [{ title: "Contact Abilene Sprinkler Repair" }, { name: "description", content: "Call (855) 695-1000 or send a service request for sprinkler repair in Abilene, Texas and nearby communities." }, { property: "og:title", content: "Contact Abilene Sprinkler Repair" }, { property: "og:description", content: "Request sprinkler repair in Abilene, Buffalo Gap, Tye, Merkel, Clyde, Hawley, Potosi, and Impact." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/contact" }] }), component: ContactPage })

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Request sprinkler service" title="Tell us what your sprinkler system is doing" intro="Call (855) 695-1000 or send a service request online. Include the neighborhood, the affected zone, whether water is actively leaking, and any controller message you can see." />
      <section className="mx-auto mt-12 grid max-w-6xl gap-8 px-5 lg:grid-cols-[.8fr_1.2fr]">
        <div className="grid gap-3">
          <div className="rounded-xl bg-card p-5 ring-1 ring-line">
            <Phone size={19} className="text-primary" />
            <p className="mt-3 font-display text-sm font-bold">Phone</p>
            <a href={phoneHref} className="mt-1 inline-block text-sm font-semibold text-primary">{phoneDisplay}</a>
          </div>
          <div className="rounded-xl bg-card p-5 ring-1 ring-line">
            <Clock3 size={19} className="text-primary" />
            <p className="mt-3 font-display text-sm font-bold">Hours</p>
            <p className="mt-1 text-sm text-cool">Call {phoneDisplay} to set a time. A standing public schedule is not listed for Abilene.</p>
          </div>
          <div className="rounded-xl bg-card p-5 ring-1 ring-line">
            <MapPin size={19} className="text-primary" />
            <p className="mt-3 font-display text-sm font-bold">Primary area</p>
            <p className="mt-1 text-sm text-cool">Abilene, Texas, Taylor County. A street address is not published on this page.</p>
          </div>
        </div>
        <div className="rounded-xl bg-card p-6 ring-1 ring-line md:p-8">
          <h2 className="font-display text-2xl font-bold">What to have ready</h2>
          <p className="mt-3 text-sm leading-6 text-cool">To book a visit, call (855) 695-1000 or use the Request Service form. Having these details ready speeds things up. The appointment is confirmed before any work begins.</p>
          <ol className="mt-6 grid gap-4 text-sm text-cool">
            <li><strong className="text-foreground">1. Location:</strong> Abilene neighborhood, or Buffalo Gap, Tye, Merkel, Clyde, Hawley, Potosi, or Impact.</li>
            <li><strong className="text-foreground">2. Symptom:</strong> leak, dry zone, broken head, controller fault, or another issue.</li>
            <li><strong className="text-foreground">3. Scope:</strong> one zone, several zones, or the full system.</li>
            <li><strong className="text-foreground">4. Urgency:</strong> whether water will not stop or is causing damage.</li>
            <li><strong className="text-foreground">5. Photos:</strong> controller display, valve box, or visible leak if it is safe to photograph.</li>
          </ol>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={phoneHref} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Call {phoneDisplay}</a>
            <a href={requestServiceUrl} className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background">Request Service</a>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-6xl px-5">
        <p className="text-sm text-cool">Not sure which service applies? Start with <Link to="/services/$slug" params={{ slug: "sprinkler-repair" }} className="font-semibold text-primary">complete sprinkler system repair</Link> or review the <Link to="/faq" className="font-semibold text-primary">frequently asked questions</Link>.</p>
      </section>
    </>
  )
}
