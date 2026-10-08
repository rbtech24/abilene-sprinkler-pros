import { Link } from "@tanstack/react-router"
import { Menu, Phone, X } from "lucide-react"
import { useState, type ReactNode } from "react"
import { areas, brand, domain, phoneDisplay, phoneHref, services } from "@/lib/site-content"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-glass/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Abilene Sprinkler Repair home">
          <span className="grid size-9 place-items-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">AS</span>
          <span className="font-display text-[15px] font-bold">Abilene Sprinkler Repair</span>
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] font-medium lg:flex" aria-label="Main navigation">
          <Link to="/services" className="text-cool transition-colors hover:text-primary">Services</Link>
          <Link to="/service-areas" className="text-cool transition-colors hover:text-primary">Service Areas</Link>
          <Link to="/about" className="text-cool transition-colors hover:text-primary">About</Link>
          <Link to="/blog" className="text-cool transition-colors hover:text-primary">Blog</Link>
          <Link to="/faq" className="text-cool transition-colors hover:text-primary">FAQ</Link>
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href={phoneHref} className="font-mono text-[12px] text-cool hover:text-primary">{phoneDisplay}</a>
          <Link to="/contact" className="rounded-full bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground">Request service</Link>
        </div>
        <button className="grid size-10 place-items-center rounded-full bg-secondary text-secondary-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-glass px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-1 text-sm">
            {[{ to: "/services", label: "Services" }, { to: "/service-areas", label: "Service Areas" }, { to: "/about", label: "About" }, { to: "/blog", label: "Blog" }, { to: "/faq", label: "FAQ" }, { to: "/contact", label: "Request Service" }].map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-cool hover:bg-secondary">{item.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line pb-28 pt-12 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-base font-bold">{brand}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-cool">Residential sprinkler repair for Abilene and nearby communities, including Buffalo Gap, Tye, Merkel, Clyde, Hawley, Potosi, and Impact. Call {phoneDisplay}.</p>
          <p className="mt-4 font-mono text-xs text-primary">{domain}</p>
        </div>
        <div>
          <p className="font-display text-sm font-bold">Popular services</p>
          <div className="mt-3 grid gap-2 text-sm text-cool">{services.slice(0, 5).map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="hover:text-primary">{service.name}</Link>)}</div>
        </div>
        <div>
          <p className="font-display text-sm font-bold">Nearby service areas</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-cool">{areas.slice(0, 8).map((area) => <Link key={area.slug} to="/service-areas/$slug" params={{ slug: area.slug }} className="hover:text-primary">{area.name}</Link>)}</div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line px-5 pt-6 text-xs text-muted-foreground">
        <p>© 2026 {brand}. All rights reserved.</p>
        <div className="flex gap-5"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/contact">Contact</Link></div>
      </div>
    </footer>
  )
}

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="mx-3 mb-3 flex gap-2 rounded-2xl bg-glass/90 p-2 shadow-float ring-1 ring-line backdrop-blur-xl">
        <a href={phoneHref} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground"><Phone size={17} /> Call</a>
        <Link to="/contact" className="flex-1 rounded-xl bg-foreground py-3.5 text-center text-sm font-semibold text-background">Request service</Link>
      </div>
    </div>
  )
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="border-b border-line bg-glass/30">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-cool md:text-lg">{intro}</p>
        {children}
      </div>
    </section>
  )
}

export function ContactBand() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5">
      <div className="overflow-hidden rounded-2xl bg-cool p-7 text-primary-foreground md:flex md:items-center md:justify-between md:p-10">
        <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">Abilene irrigation help</p><h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">Ready to get every zone working again?</h2><p className="mt-2 text-sm text-primary-foreground/75">Call {phoneDisplay} or send the neighborhood, the zone, and what the system is doing.</p></div>
        <Link to="/contact" className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground md:mt-0">Request service</Link>
      </div>
    </section>
  )
}

export function PendingPhone() { return <a href={phoneHref}>{phoneDisplay}</a> }