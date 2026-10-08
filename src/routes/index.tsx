import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Gauge, MapPin, ShieldCheck, Wrench } from "lucide-react";
import heroImage from "@/assets/abilene-sprinkler-hero.jpg";
import repairImage from "@/assets/sprinkler-repair-detail.jpg";
import controllerImage from "@/assets/smart-controller.jpg";
import { areas, posts, services } from "@/lib/site-content";
import { ContactBand } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abilene Sprinkler Repair | Lawn Irrigation Service in Abilene, TX" },
      { name: "description", content: "Sprinkler repair in Abilene, TX for broken heads, leaks, valves, controllers, dry zones, and system tune-ups in Buffalo Gap, Tye, Merkel, Clyde, Hawley, Potosi, and Impact." },
      { property: "og:title", content: "Abilene Sprinkler Repair | Local Irrigation Service" },
      { property: "og:description", content: "Residential sprinkler diagnostics and repair for Abilene, Texas and nearby communities. Call (855) 695-1000." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative">
        <img src={heroImage} alt="Sprinklers watering a residential lawn in Abilene, Texas" width={1920} height={1024} fetchPriority="high" className="h-[54vh] min-h-[420px] w-full object-cover md:h-[610px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto -mt-40 max-w-6xl px-5 md:-mt-52">
          <div className="animate-rise max-w-xl rounded-2xl bg-glass/82 p-6 shadow-float ring-1 ring-line backdrop-blur-xl md:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Abilene, Texas · Taylor County</p>
            <h1 className="mt-3 text-balance font-display text-[36px] font-extrabold leading-[1.06] md:text-[50px]">Abilene sprinkler repair, diagnosed right.</h1>
            <p className="mt-4 max-w-[46ch] text-pretty text-[15px] leading-6 text-cool">Help for broken heads, dry zones, leaking lines, stuck valves, and controller problems across Abilene and nearby communities. Call (855) 695-1000.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Request sprinkler service</Link>
              <Link to="/services" className="rounded-full bg-glass px-5 py-3 text-sm font-semibold ring-1 ring-line">View repair services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-5">
        <div className="mb-6 flex items-end justify-between gap-4"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Irrigation diagnostics</p><h2 className="mt-2 font-display text-2xl font-bold">What we repair</h2></div><Link to="/services" className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">All services <ArrowRight size={16} /></Link></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="group rounded-xl bg-card p-5 ring-1 ring-line backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-glass">
              <span className="font-mono text-[11px] text-primary">{String.fromCharCode(65 + index)} · Repair</span>
              <h3 className="mt-2 font-display text-base font-bold group-hover:text-primary">{service.name}</h3>
              <p className="mt-2 text-pretty text-[13px] leading-5 text-cool">{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-2xl bg-cool p-7 text-primary-foreground md:p-10">
          <div className="animate-sweep absolute inset-y-0 -right-24 w-72 bg-primary/35 blur-3xl" />
          <div className="relative"><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">How a repair visit works</p><div className="mt-6 grid gap-7 sm:grid-cols-3">
            {[{ n: "01", t: "Diagnose", d: "Run the system, inspect the symptom, and trace pressure, electrical, valve, or coverage causes." }, { n: "02", t: "Explain", d: "Review what failed, what can wait, and the practical repair options before work begins." }, { n: "03", t: "Repair & verify", d: "Complete approved work, run the affected zones, and confirm coverage and shutoff." }].map((step) => <div key={step.n}><span className="font-display text-3xl font-extrabold">{step.n}</span><h3 className="mt-2 font-display font-bold">{step.t}</h3><p className="mt-1 text-[13px] leading-5 text-primary-foreground/75">{step.d}</p></div>)}
          </div></div>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:items-center">
        <img src={repairImage} alt="Technician adjusting a lawn sprinkler head" loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-line" />
        <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Built around the real problem</p><h2 className="mt-3 text-balance font-display text-3xl font-bold">A repair should improve the whole zone—not hide one symptom.</h2><p className="mt-4 text-pretty text-[15px] leading-7 text-cool">Abilene lawns show sprinkler trouble through dry Bermuda edges, wind-blown spray, soft soil over a leak, runoff on caliche, or an unexpectedly high water bill. We treat those clues as one irrigation system. That means checking head spacing, nozzle compatibility, valve behavior, visible piping, controller output, and water pressure where appropriate.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Zone-by-zone testing", "Clear repair priorities", "Coverage adjustments", "Final system check"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={17} className="text-primary" />{item}</div>)}</div></div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="mb-6 flex items-end justify-between"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Local coverage</p><h2 className="mt-2 font-display text-2xl font-bold">Sprinkler service near Abilene</h2></div><MapPin className="text-primary" /></div>
        <p className="mb-6 max-w-3xl text-sm leading-6 text-cool">Our service-area pages explain common irrigation concerns in each community and connect homeowners directly to the right repair information.</p>
        <div className="flex flex-wrap gap-2">{areas.map((area) => <Link key={area.slug} to="/service-areas/$slug" params={{ slug: area.slug }} className="rounded-full bg-card px-4 py-2 text-[13px] font-medium ring-1 ring-line transition hover:bg-primary hover:text-primary-foreground">{area.name}</Link>)}</div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Water-smart control</p><h2 className="mt-3 font-display text-3xl font-bold">Get more from the controller you already own.</h2><p className="mt-4 text-[15px] leading-7 text-cool">Long runtimes do not correct broken heads or poor distribution. Once the system is operating properly, controller programming can be matched to Bermuda, beds, shade, caliche, and the City of Abilene’s current watering rules.</p><Link to="/services/$slug" params={{ slug: "sprinkler-controller-repair" }} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Controller repair and setup <ArrowRight size={16} /></Link></div>
        <img src={controllerImage} alt="Modern residential irrigation controller" loading="lazy" width={1200} height={800} className="aspect-[3/2] w-full rounded-2xl object-cover ring-1 ring-line" />
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5"><div className="mb-6 flex items-end justify-between"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">From the field</p><h2 className="mt-2 font-display text-2xl font-bold">Sprinkler advice for Texas lawns</h2></div><Link to="/blog" className="text-sm font-semibold text-primary">All articles</Link></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{posts.map((post) => <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="rounded-xl bg-card p-5 ring-1 ring-line hover:bg-glass"><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{post.category}</span><h3 className="mt-2 font-display text-[15px] font-bold leading-5">{post.title}</h3><p className="mt-2 text-xs leading-5 text-cool">{post.excerpt}</p></Link>)}</div></section>

      <section className="mx-auto mt-16 max-w-6xl px-5"><div className="grid gap-3 sm:grid-cols-3">{[{ icon: ShieldCheck, t: "Local focus", d: "Service information written for Abilene heat, wind, caliche, and Bermuda lawns." }, { icon: Gauge, t: "System diagnosis", d: "Pressure, controls, valves, leaks, and coverage considered as connected parts." }, { icon: Wrench, t: "Repair-first guidance", d: "Practical options organized around the symptom and condition of your system." }].map((item) => <div key={item.t} className="rounded-xl bg-card p-5 ring-1 ring-line"><item.icon className="text-primary" size={22} /><h3 className="mt-3 font-display font-bold">{item.t}</h3><p className="mt-1 text-[13px] leading-5 text-cool">{item.d}</p></div>)}</div></section>
      <ContactBand />
    </>
  );
}
