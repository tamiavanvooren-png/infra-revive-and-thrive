import { createFileRoute } from "@tanstack/react-router";

import heroBridge from "@/assets/hero-bridge.jpg";
import workRoads from "@/assets/work-roads.jpg";
import workSurvey from "@/assets/work-survey.jpg";
import workBuildings from "@/assets/work-buildings.jpg";
import workWater from "@/assets/work-water.jpg";
import siteReel from "@/assets/site-reel.mp4.asset.json";
import { BlueprintGrid, BudgetDonut, PhaseChart } from "@/components/Graphics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infrastructure Reconstruction, Revolution & Rehabilitation" },
      {
        name: "description",
        content:
          "Restoring roads, bridges, buildings and water infrastructure with durable, cost-effective construction that improves safety and community resilience.",
      },
      {
        property: "og:title",
        content: "Infrastructure Reconstruction, Revolution & Rehabilitation",
      },
      {
        property: "og:description",
        content:
          "A reconstruction and rehabilitation programme delivering safer roads, stronger bridges and restored public facilities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const scope = [
  {
    title: "Roads & Bridges",
    img: workRoads,
    body: "Resurfacing, pothole rehabilitation, structural bridge repair and new line marking to restore safe traffic flow.",
  },
  {
    title: "Survey & Engineering",
    img: workSurvey,
    body: "Condition assessments, setting out, quantity take-offs and quality control by qualified site engineers.",
  },
  {
    title: "Buildings & Facilities",
    img: workBuildings,
    body: "Structural strengthening, masonry and roof repair, and full rehabilitation of public and private buildings.",
  },
  {
    title: "Water & Drainage",
    img: workWater,
    body: "Culverts, stormwater channels, pipelines and erosion protection engineered for extreme weather.",
  },
];

const outcomes = [
  ["Restored infrastructure", "Assets returned to full, certified service life."],
  ["Improved public safety", "Hazards removed; compliant signage and access."],
  ["Economic activity", "Local suppliers and skilled labour engaged on site."],
  ["Community resilience", "Durable, low-maintenance, climate-aware builds."],
];

const indicators = [
  ["On schedule", "98%", "Milestones delivered to programme"],
  ["Budget compliance", "±3%", "Variance against approved cost plan"],
  ["Quality", "Zero", "Repeat defects after handover"],
  ["Satisfaction", "4.8/5", "Client and community rating"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="h-6 w-6 bg-primary" aria-hidden="true" />
            <span className="font-display text-lg leading-none tracking-widest">IRRR Project</span>
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#scope">Scope</a>
            <a className="hover:text-foreground" href="#reel">Site reel</a>
            <a className="hover:text-foreground" href="#programme">Programme</a>
            <a className="hover:text-foreground" href="#outcomes">Outcomes</a>
          </nav>
          <a
            href="#contact"
            className="bg-primary px-4 py-2 font-display text-sm tracking-wider text-primary-foreground"
          >
            Request proposal
          </a>
        </div>
        <div className="hazard-bar h-1" aria-hidden="true" />
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate">
          <img
            src={heroBridge}
            alt="Bridge reconstruction site with cranes and workers at sunrise"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Project Proposal · Civil Infrastructure
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
              Infrastructure Reconstruction, Revolution &amp; Rehabilitation
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We restore, repair and reconstruct damaged public and private infrastructure through
              sustainable, cost-effective and high-quality construction — improving safety, economic
              development and community well-being.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#scope"
                className="bg-primary px-6 py-3 font-display tracking-wider text-primary-foreground"
              >
                See the scope of work
              </a>
              <a
                href="#reel"
                className="border border-border px-6 py-3 font-display tracking-wider text-foreground hover:bg-secondary"
              >
                Watch the site reel
              </a>
            </div>
          </div>
        </section>

        {/* Objective / overview */}
        <section className="relative border-y border-border" style={{ background: "var(--gradient-steel)" }}>
          <div className="relative text-primary">
            <BlueprintGrid />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl md:text-4xl">Project objective</h2>
              <p className="mt-5 text-muted-foreground">
                To restore functional, safe infrastructure at pace — combining assessment-led design,
                disciplined cost control and durable construction methods that stand up to heavy use
                and severe weather.
              </p>
              <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "Road & bridge construction",
                  "Structural rehabilitation",
                  "Demolition & earthworks",
                  "Water & drainage systems",
                  "Surveying & quality control",
                  "Maintenance contracts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-l-2 border-primary pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              {[
                ["40", "week programme"],
                ["6", "workstreams"],
                ["120+", "site personnel"],
                ["ISO", "aligned QA/QC"],
              ].map(([k, v]) => (
                <div key={v} className="border border-border bg-card p-6">
                  <dt className="font-display text-4xl text-primary">{k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Scope with images */}
        <section id="scope" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl md:text-4xl">Scope of work</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Four integrated workstreams, each resourced with its own plant, materials and supervision.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {scope.map((s) => (
              <article key={s.title} className="group border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Video reel */}
        <section id="reel" className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl md:text-4xl">Site reel</h2>
              <p className="max-w-md text-sm text-muted-foreground">
                Earthworks, compaction and reconstruction in progress — captured on active sites.
              </p>
            </div>
            <div
              className="mt-8 overflow-hidden border border-border"
              style={{ boxShadow: "var(--shadow-site)" }}
            >
              <video
                src={siteReel.url}
                poster={heroBridge}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-video h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Programme + budget graphics */}
        <section id="programme" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl md:text-4xl">Programme &amp; resources</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div className="border border-border bg-card p-7">
              <h3 className="text-xl text-primary">Implementation phases</h3>
              <div className="mt-6">
                <PhaseChart />
              </div>
            </div>
            <div className="border border-border bg-card p-7">
              <h3 className="text-xl text-primary">Resource allocation</h3>
              <div className="mt-6">
                <BudgetDonut />
              </div>
            </div>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            {[
              "Construction machinery",
              "Building materials",
              "Surveying equipment",
              "Skilled labour",
              "PPE",
              "Transport vehicles",
            ].map((r) => (
              <li key={r} className="border border-border px-3 py-2">
                {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Outcomes + indicators */}
        <section id="outcomes" className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="text-3xl md:text-4xl">Expected outcomes</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.map(([title, body]) => (
                <div key={title} className="border-t-2 border-primary pt-5">
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-20 text-3xl md:text-4xl">Success indicators</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {indicators.map(([label, value, note]) => (
                <div key={label} className="border border-border bg-card p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-3 font-display text-4xl text-primary">{value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative isolate overflow-hidden border-t border-border">
          <img
            src={workRoads}
            alt=""
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
            <h2 className="text-4xl md:text-5xl">Rebuild it once. Rebuild it right.</h2>
            <p className="mt-5 text-muted-foreground">
              Request the full proposal pack — scope, programme, cost plan and safety file.
            </p>
            <a
              href="mailto:proposals@irrr-project.com"
              className="mt-8 inline-block bg-primary px-8 py-4 font-display tracking-wider text-primary-foreground"
            >
              proposals@irrr-project.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="hazard-bar h-1" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground">
          <p>Infrastructure Reconstruction, Revolution &amp; Rehabilitation Project</p>
          <p>Roads · Bridges · Buildings · Water</p>
        </div>
      </footer>
    </div>
  );
}
