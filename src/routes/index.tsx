import { createFileRoute } from "@tanstack/react-router";
import shrike from "@/assets/shrike-halftone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chelate — Securing the agentic CI/CD" },
      {
        name: "description",
        content:
          "Chelate watches your CI agents so a stranger's issue comment can't turn them against you. Shrike scans, Titra blocks at runtime.",
      },
      { property: "og:title", content: "Chelate — Securing the agentic CI/CD" },
      {
        property: "og:description",
        content: "Open-source pipeline scanning with Shrike. Runtime control of CI agents with Titra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const posts = [
  { tag: "Product", title: "Introducing Shrike: find the pipelines an outsider can attack", href: "#product" },
  { tag: "How", title: "Why our blocks are deterministic, never an AI", href: "#how" },
  { tag: "Product", title: "Titra: watch and stop CI agents at runtime", href: "#product" },
  { tag: "How", title: "Blocking the action, not the network", href: "#how" },
];

const expertise = [
  ["Microsoft HoF", "Recognized for responsibly disclosing critical vulnerabilities in Microsoft's cloud & identity infrastructure"],
  ["GitHub Security", "Listed in GitHub's Security Hall of Fame for responsible disclosure in core platform features"],
  ["OWASP Standards", "All assessments follow OWASP Testing Guide v4.2 and Top 10 methodology across every engagement"],
  ["CREST Certified", "Internationally recognised penetration testing standards, ethics, and professional conduct"],
  ["CVE Programme", "Active CVE contributors — we find, report, and help patch real vulnerabilities in widely-used software"],
  ["Bug Bounty Elite", "Top-ranked researchers across HackerOne, Bugcrowd and Intigriti with critical-severity findings"],
  ["Open Source Trust", "Trusted by maintainers of widely-used npm, PyPI, and Go packages to audit before major releases"],
  ["OpenSSF Supply Chain SIG", "Contributing members of the Open Source Security Foundation's Supply Chain Security working group"],
];

const principles = [
  ["01", "We ask the attacker's question", "Can someone with no access reach a secret or a write token — and how? That one question turns a pile of findings into the few paths that matter."],
  ["02", "We watch at runtime", "Titra sits in the running pipeline and sees every command, push and tool call. Finally, a record of what ran."],
  ["03", "We block the action, not the network", "The dangerous move is often a normal-looking call to GitHub itself. We gate the agent's action — what firewalls can't see."],
  ["04", "Deterministic, never an AI", "A model deciding what to block could be prompt-injected too. Our rules can't be talked out of a block."],
  ["05", "We adopt gently", "Every install starts watch-only. See what your agents do, then turn on blocking when you trust it."],
  ["06", "Open where it secures most", "The scanner is free and open so the whole ecosystem can check itself. We charge for scale."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-paper">
          <a href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-tomato" />
            chelate
          </a>
          <div className="hidden gap-8 font-mono text-xs uppercase tracking-widest md:flex">
            <a href="#problem" className="opacity-80 hover:opacity-100">Problem</a>
            <a href="#product" className="opacity-80 hover:opacity-100">Product</a>
            <a href="#how" className="opacity-80 hover:opacity-100">How</a>
          </div>
          <a href="#product" className="rounded-sm bg-tomato px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground hover:opacity-90">
            Run Shrike
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-sonic text-paper">
        <img
          src={shrike}
          alt="Halftone shrike perched on a branch"
          className="drift absolute inset-0 -z-10 h-full w-full object-cover object-[20%_center] md:object-left"
        />
        <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-rows-[1fr_auto] px-6 pb-12 pt-32">
          <div className="flex flex-col items-end text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sea">
              Loggerhead Shrike | Lanius ludovicianus
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] opacity-70">
              Chelate · CI/CD Field Guide 2026
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <h1 className="reveal font-display text-[clamp(3.2rem,9vw,8.5rem)] font-black leading-[0.86] tracking-tighter md:col-span-8 md:col-start-5 md:text-right">
              Securing the
              <br />
              <span className="text-tomato">agentic</span> CI/CD.
            </h1>
            <p className="max-w-sm text-lg leading-snug text-sea md:col-span-4 md:row-start-1">
              You gave an AI agent the keys to your repo and a desk inside your pipeline. Nobody
              checks what it does all day. <span className="text-paper">We do.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog strip */}
      <div className="flex items-stretch border-y border-ink bg-ink font-mono text-xs text-paper">
        <span className="shrink-0 border-r border-paper/20 px-5 py-4 uppercase tracking-widest text-sea">
          Latest / Blogs
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee flex w-max gap-12 py-4">
            {[...posts, ...posts].map((p, i) => (
              <a key={i} href={p.href} className="flex items-center gap-3 whitespace-nowrap hover:text-sea">
                <span className="uppercase tracking-widest text-tomato">{p.tag}</span>
                {p.title} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
        <a href="#product" className="hidden shrink-0 border-l border-paper/20 px-5 py-4 uppercase tracking-widest hover:text-sea sm:block">
          All blogs ↗
        </a>
      </div>

      {/* Problem */}
      <section id="problem" className="relative bg-ink text-paper">
        <div className="halftone-fade pointer-events-none absolute inset-x-0 top-0 h-64 text-sonic" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-tomato">/ The problem</p>
            <h2 className="reveal mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Untrusted input, right next to production credentials.
            </h2>
          </div>
          <div className="reveal relative space-y-6 rounded-sm border border-sea/30 bg-sonic/15 p-8 text-lg leading-relaxed text-sea md:col-span-6 md:col-start-7">
            <span className="absolute -top-3 left-6 bg-ink px-2 font-mono text-[10px] uppercase tracking-[0.3em] text-tomato">incident.log</span>
            <p>
              A stranger opens an issue, a PR, or a comment — and a workflow runs holding the
              repo's write token, publishing keys, and cloud secrets.
            </p>
            <p>
              Teams now drop agents into their pipelines to review PRs and fix issues. Agents
              that read whatever a stranger writes, and act with those same credentials.
            </p>
            <p className="border-l-2 border-tomato pl-5 text-paper">
              One poisoned comment and the agent pushes bad code, approves a PR, or leaks a
              secret. And nobody sees it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sonic">/ The product</p>
        <h2 className="mt-6 max-w-3xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
          Two tools. One model of your pipeline.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-ink bg-ink md:grid-cols-2">
          <article className="relative overflow-hidden bg-sonic p-10 text-paper">
            <div className="halftone pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full text-sea opacity-40" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-sea">Free · Open source</p>
            <h3 className="mt-4 font-display text-6xl font-black tracking-tighter">Shrike</h3>
            <p className="mt-2 font-mono text-sm text-sea">find the risk</p>
            <p className="mt-8 max-w-md text-lg leading-relaxed">
              A CLI and GitHub Action that scans your workflows and tells you which pipelines an
              outsider can attack — ranked by Severity, Triggerability and Impact. No noise.
            </p>
            <pre className="mt-8 overflow-x-auto rounded-sm bg-ink p-4 font-mono text-sm text-sea">
              <span className="text-tomato">$</span> shrike scan --org your-org
            </pre>
          </article>
          <article className="relative overflow-hidden bg-paper p-10">
            <div className="halftone pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full text-tomato opacity-40" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-tomato">Paid platform</p>
            <h3 className="mt-4 font-display text-6xl font-black tracking-tighter">Titra</h3>
            <p className="mt-2 font-mono text-sm text-muted-foreground">watch and stop it</p>
            <p className="mt-8 max-w-md text-lg leading-relaxed">
              Install the GitHub App, add one line to your workflow. Titra records every action
              your agent takes and blocks the dangerous ones — in real time.
            </p>
            <ul className="mt-8 space-y-2 font-mono text-sm">
              {["push to protected branch", "approve a pull request", "leak a secret"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="rounded-sm bg-tomato px-2 py-0.5 text-[10px] uppercase tracking-widest text-primary-foreground">blocked</span>
                  {x}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Principles */}
      <section id="how" className="border-t border-border bg-sea/40">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-sonic">/ How we secure them</p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {principles.map(([n, t, d]) => (
              <div key={n} className="reveal group bg-paper p-8 transition-colors hover:bg-sonic hover:text-paper">
                <p className="font-mono text-sm text-tomato">{n}</p>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight">{t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground group-hover:text-sea">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-y border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sonic">
            Backed by expertise — researchers, advisors &amp; allies
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map(([t, d], i) => (
              <div key={t} className="reveal" style={{ animationDelay: `${i * 60}ms` }}>
                <h3 className="text-lg font-extrabold tracking-tight">{t}</h3>
                <p className="mt-3 font-mono text-[13px] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-tomato">/ Founder</p>
        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl font-black tracking-tight">S. Lakshmi Vignesh</h2>
            <p className="mt-3 font-mono text-sm text-muted-foreground">Security engineer &amp; researcher</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:col-span-7 md:grid-cols-4">
            {[["60+", "vulnerabilities"], ["12", "CVEs credited"], ["MVR", "Microsoft 2025"], ["#1", "Intel Q1 2026"]].map(([n, l]) => (
              <div key={l} className="border-t-2 border-sonic pt-3">
                <p className="font-display text-3xl font-black text-sonic">{n}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Microsoft · Google · OpenAI · Meta · NVIDIA · Intel · PayPal · Coinbase · Mozilla
        </p>
      </section>


      {/* CTA */}
      <section className="grain relative overflow-hidden bg-tomato text-primary-foreground">
        <div className="halftone pointer-events-none absolute inset-y-0 right-0 w-1/2 text-ink opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.9] tracking-tighter">
            Your pipeline runs a robot with your credentials.
          </h2>
          <p className="mt-6 max-w-xl text-xl">We make sure it only does its job.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://www.chelate.tech/" className="rounded-sm bg-ink px-6 py-3 font-mono text-sm uppercase tracking-widest text-paper hover:opacity-90">
              Scan with Shrike
            </a>
            <a href="https://www.chelate.tech/" className="rounded-sm border border-ink px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-ink hover:text-paper">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <footer className="overflow-hidden bg-ink pt-16 text-sea">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-xs uppercase tracking-widest">
          <span className="flex items-center gap-2 text-paper">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-tomato" /> chelate
          </span>
          <span>© 2026 Chelate · Securing the agentic CI/CD</span>
        </div>
        <p className="reveal mt-10 select-none whitespace-nowrap text-center font-display text-[16vw] font-black leading-[0.85] pb-6 tracking-tighter text-paper">
          Chelate<span className="text-tomato">Sec</span>
        </p>
      </footer>
    </div>
  );
}
