import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "PRJ-001",
    slug: "tf-rag",
    category: "AI SYSTEMS",
    title: "TensorFlow-RAG",
    description:
      "Resource-efficient retrieval-augmented generation system built around optimized inference, backend APIs, and automated evaluation.",
    metric: "61%",
    metricLabel: "IDLE MEMORY REDUCTION",
    secondaryMetric: "465 MB → 180 MB",
    stack: ["Python", "FastAPI", "ChromaDB", "ONNX", "Docker"],
    details: ["23-question evaluation suite", "pytest + GitHub Actions"],
  },
  {
    id: "PRJ-002",
    slug: "fed-fighter",
    category: "FEDERATED ML",
    title: "FedFighter",
    description:
      "Federated intrusion-detection research system comparing aggregation strategies across non-IID network security data.",
    metric: "92.4%",
    metricLabel: "FEDAVG ACCURACY",
    secondaryMetric: "5 CLIENTS / 10 ROUNDS",
    stack: ["Python", "PyTorch", "Flower", "CNN-LSTM"],
    details: ["FedAvg vs FedProx", "CICIDS2017"],
  },
  {
    id: "PRJ-003",
    slug: "financial-sentiment-nlp",
    category: "NATURAL LANGUAGE PROCESSING",
    title: "Financial Sentiment Analyzer",
    description:
      "Classifies financial news headlines with FinBERT and pairs the results with stock returns and interactive price charts.",
    metric: "FinBERT",
    metricLabel: "HEADLINE SENTIMENT",
    secondaryMetric: "MARKET DATA + CHARTS",
    stack: ["Python", "FastAPI", "Transformers", "Plotly", "TwelveData"],
    details: ["Positive, negative, and neutral classification", "Interactive stock price history"],
    repository: "https://github.com/nicolasarmientor/financial-sentiment-nlp",
  },
  {
    id: "PRJ-004",
    slug: "weather-dashboard-web",
    category: "SOFTWARE ENGINEERING",
    title: "Weather Dashboard",
    description:
      "Real-time weather application using asynchronous backend communication and external geographic and weather APIs.",
    metric: "LIVE",
    metricLabel: "API DATA",
    secondaryMetric: "ASYNC / AWAIT",
    stack: ["C#", "ASP.NET Core", "REST", "HttpClient"],
    details: ["OpenWeather integration", "Environment-based secrets"],
  },
];

const interests = [
  "AI / MACHINE LEARNING",
  "AUTONOMOUS SYSTEMS",
  "BACKEND ENGINEERING",
  "AEROSPACE",
  "PERFORMANCE ENGINEERING",
  "COMPUTER VISION",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="tech-grid" />

      {/* NAV */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080a0d]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-[0.25em] text-white"
          >
            NS<span className="text-cyan-400">/</span>
          </a>

          <div className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.16em] text-zinc-400 md:flex">
            <a className="nav-link" href="#projects">
              01 PROJECTS
            </a>
            <Link className="nav-link" href="/background">02 BACKGROUND</Link>
            <a className="nav-link" href="#console">03 CONSOLE</a>
            <Link className="nav-link" href="/portfolio">04 ALL PROJECTS</Link>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-white/20 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            RESUME ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 lg:px-8"
      >
        <div className="grid w-full gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <div className="mb-7 flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] text-cyan-400">
              <span className="h-px w-10 bg-cyan-400" />
              SOFTWARE ENGINEERING // AI SYSTEMS // AEROSPACE
            </div>

            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-zinc-500">
              ENGINEER / DEVELOPER
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Nicolas
              <br />
              <span className="text-zinc-400">Sarmiento.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Building intelligent software systems at the intersection of
              artificial intelligence, performance engineering, autonomous
              technology, and aerospace.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group bg-white px-6 py-3 font-mono text-xs font-semibold tracking-[0.14em] text-black transition hover:bg-cyan-300"
              >
                EXPLORE SYSTEMS{" "}
                <span className="ml-2 transition group-hover:ml-4">→</span>
              </a>

              <a
                href="https://github.com/nicolasarmientor"
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 px-6 py-3 font-mono text-xs tracking-[0.14em] text-zinc-300 transition hover:border-white/60 hover:text-white"
              >
                GITHUB ↗
              </a>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-3 border-y border-white/10 py-5">
              <HeroStat title="FOCUS" value="AI / SWE" />
              <HeroStat title="DOMAIN" value="AERO" />
              <HeroStat title="STATUS" value="ACTIVE" active />
            </div>
          </div>

          {/* AIRCRAFT / TELEMETRY DISPLAY */}
<div className="relative min-h-[600px] lg:min-h-[720px]">

  {/* aircraft */}
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src="/f18-blueprint.svg"
      alt="Original F/A-18-inspired blueprint, top view with swept wings and twin engines"
      width={640}
      height={700}
      priority
      className="
        w-full
        max-w-none
        object-contain
      "
    />
  </div>

  {/* HUD center marker */}
  <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute left-1/2 top-0 h-4 w-px bg-cyan-400/30" />
    <div className="absolute bottom-0 left-1/2 h-4 w-px bg-cyan-400/30" />
    <div className="absolute left-0 top-1/2 h-px w-4 bg-cyan-400/30" />
    <div className="absolute right-0 top-1/2 h-px w-4 bg-cyan-400/30" />

    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50" />
  </div>

  {/* top telemetry */}
  <div className="absolute left-2 top-10 font-mono text-[9px] tracking-[0.2em] text-zinc-600">
    BLUEPRINT // 001
  </div>

  <div className="absolute right-2 top-10 flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-emerald-400">
    <span className="status-light" />
    AIRFRAME STUDY
  </div>

  {/* left telemetry */}
  <div className="absolute bottom-16 left-2 font-mono text-[9px] leading-6 text-zinc-600">
    <p>
      PLATFORM <span className="text-zinc-400">AEROSPACE</span>
    </p>

    <p>
      FOCUS <span className="text-zinc-400">AUTONOMY</span>
    </p>

    <p>
      MODE <span className="text-zinc-400">PERFORMANCE</span>
    </p>
  </div>

  {/* right telemetry */}
  <div className="absolute bottom-16 right-2 text-right font-mono text-[9px] leading-6 text-zinc-600">
    <p>VIEW // TOP</p>
    <p>DRAWING // CONCEPT</p>
    <p>SCALE // ILLUSTRATIVE</p>
  </div>

  {/* decorative line */}
  <div className="absolute bottom-8 left-0 right-0 flex items-center gap-3">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

    <span className="font-mono text-[8px] tracking-[0.2em] text-zinc-700">
      ENGINEERING SYSTEM
    </span>

    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
  </div>
</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <SectionHeading
            number="01"
            eyebrow="SELECTED ENGINEERING WORK"
            title="Featured Systems"
          />
          <Link className="all-work-link" href="/portfolio">View all projects <span aria-hidden="true">↗</span></Link>
          <Link className="all-work-link ml-6" href="/background">Education &amp; experience <span aria-hidden="true">↗</span></Link>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card group relative overflow-hidden border border-white/10 bg-[#0c0f14]/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-cyan-400">
                    {project.id}
                  </div>

                  <div className="font-mono text-[9px] tracking-[0.18em] text-zinc-600">
                    {project.category}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="project-description mt-4 max-w-xl text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 border-y border-white/10 py-5">
                  <div>
                    <p className="project-number text-white">
                      {project.metric}
                    </p>
                    <p className="mt-2 font-mono text-[9px] tracking-[0.15em] text-zinc-600">
                      {project.metricLabel}
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <p className="project-secondary text-zinc-300">
                      {project.secondaryMetric}
                    </p>
                    <p className="mt-2 font-mono text-[9px] tracking-[0.15em] text-zinc-600">
                      SYSTEM TELEMETRY
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="project-stack border border-white/10 bg-white/[0.02] px-3 py-1.5 text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-end justify-between">
                  <div className="project-notes space-y-1 text-zinc-400">
                    {project.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>

                  <Link href={`/portfolio#${project.slug}`} aria-label={`Read about ${project.title}`} className="font-mono text-xs text-zinc-400 transition hover:text-cyan-300">READ MORE →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <SectionHeading
            number="02"
            eyebrow="ENGINEERING PROFILE"
            title="Built around performance."
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="max-w-2xl text-xl leading-9 text-zinc-300">
                I study Software Engineering and Aerospace Engineering at
                Auburn University. My interests sit where software meets
                high-performance engineering: AI systems, autonomous aircraft,
                drones, Formula 1, and complex technical systems.
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-zinc-500">
                I&apos;m especially interested in building software where
                efficiency, reliability, data, and engineering decisions have
                measurable consequences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
              {interests.map((interest, index) => (
                <div
                  key={interest}
                  className="bg-[#090b0f] p-5 font-mono text-[10px] tracking-[0.13em] text-zinc-400"
                >
                  <span className="mr-3 text-zinc-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSOLE */}
      <section id="console" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <SectionHeading
            number="03"
            eyebrow="SYSTEM TERMINAL"
            title="Engineering Console"
          />

          <div className="mt-16 overflow-hidden border border-white/10 bg-black/50">
            <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>

              <span className="font-mono text-[9px] tracking-[0.18em] text-zinc-600">
                NS // ENGINEERING TERMINAL
              </span>
            </div>

            <div className="space-y-5 p-6 font-mono text-xs leading-6 sm:p-9">
              <ConsoleLine command="whoami" output="Nicolas Sarmiento" />
              <ConsoleLine
                command="education"
                output="Software Engineering + Aerospace Engineering // Auburn University"
              />
              <ConsoleLine
                command="interests"
                output="AI // Autonomous Systems // Aerospace // Formula 1 // Performance Engineering"
              />
              <ConsoleLine
                command="current_focus"
                output="Building intelligent software systems."
              />

              <div>
                <span className="text-emerald-400">$ </span>
                <span className="cursor-block">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] text-cyan-400">
                ESTABLISH DATA LINK
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                Let&apos;s build something.
              </h2>
            </div>

            <div className="flex flex-wrap items-end gap-6 lg:justify-end">
              <a className="footer-link" href="mailto:nsarmiento655@outlook.com">
                EMAIL ↗
              </a>
              <a
                className="footer-link"
                href="https://github.com/nicolasarmientor"
                target="_blank"
              >
                GITHUB ↗
              </a>
              <a className="footer-link" href="https://www.linkedin.com/in/nicolas-sarmiento-25955a2a5/">
                LINKEDIN ↗
              </a>
              <a className="footer-link" href="/resume.pdf" target="_blank">
                RESUME ↗
              </a>
            </div>
          </div>

          <div className="mt-16 flex justify-between border-t border-white/10 pt-6 font-mono text-[9px] tracking-[0.15em] text-zinc-700">
            <span>NICOLAS SARMIENTO // ENGINEERING PORTFOLIO</span>
            <span>AIRFRAME STUDY</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function HeroStat({
  title,
  value,
  active = false,
}: {
  title: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[8px] tracking-[0.2em] text-zinc-600">
        {title}
      </p>
      <p
        className={`mt-2 font-mono text-xs ${
          active ? "text-emerald-400" : "text-zinc-300"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.2em]">
        <span className="text-cyan-400">{number}</span>
        <span className="h-px w-10 bg-white/20" />
        <span className="text-zinc-600">{eyebrow}</span>
      </div>

      <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function ConsoleLine({
  command,
  output,
}: {
  command: string;
  output: string;
}) {
  return (
    <div>
      <p>
        <span className="text-emerald-400">$ </span>
        <span className="text-zinc-300">{command}</span>
      </p>
      <p className="mt-1 pl-4 text-zinc-500">{output}</p>
    </div>
  );
}