import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs — Chelate Sec" },
      {
        name: "description",
        content:
          "Field notes on securing the agentic CI/CD — product launches, research, and how we hold pipelines in place.",
      },
      { property: "og:title", content: "Blogs — Chelate Sec" },
      {
        property: "og:description",
        content: "Field notes on securing the agentic CI/CD from Chelate Sec.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blogs,
});

const posts = [
  {
    slug: "/blogs/shrike-launch",
    tag: "Product Launch",
    date: "Oct 21, 2026",
    read: "5 min read",
    title: "Chelate Sec: Securing the Agentic CI/CD",
    excerpt:
      "In chemistry, a chelate grips a reactive metal at several points at once and locks it in a ring. A dangerous workflow is the same. Today we launch Shrike — our open-source scanner for agentic CI/CD.",
  },
];

function Blogs() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-ink bg-paper">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-ink">
          <Link to="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-tomato" />
            chelate
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-sea">
            Securing the Agentic Workflows
          </span>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-tomato">/ Field notes</p>
        <h1 className="mt-6 font-display text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.85] tracking-tighter">
          Blogs<span className="text-tomato">.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-snug text-muted-foreground">
          Research, launches and hard lessons from holding agentic pipelines in place.
        </p>

        <div className="mt-16 border-t border-ink">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={p.slug}
              className="group grid gap-4 border-b border-ink py-10 transition-colors hover:bg-sea/30 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-3">
                <span className="text-tomato">{p.tag}</span>
                <br />
                {p.date} · {p.read}
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl font-black leading-tight tracking-tight group-hover:text-tomato md:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
              <span aria-hidden className="font-mono text-2xl text-tomato md:col-span-1 md:text-right">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-paper py-10 text-sea">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-ink/15 pb-6 font-mono text-xs uppercase tracking-widest">
            <a href="https://github.com/ChelateSec/shrike" className="text-ink hover:text-tomato">
              Shrike ↗
            </a>
            <a href="https://github.com/ChelateSec" className="text-ink hover:text-tomato">
              GitHub org ↗
            </a>
            <a href="https://www.chelate.tech/" className="hover:text-tomato">
              Chelate.tech ↗
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 pt-6 font-mono text-xs uppercase tracking-widest">
          <Link to="/" className="flex items-center gap-2 text-ink">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-tomato" /> chelate
          </Link>
          <span>© 2026 Chelate · Securing the Agentic Workflows</span>
        </div>
      </footer>
    </div>
  );
}
