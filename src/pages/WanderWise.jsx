import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/** Small badge/pill (now supports links) */
function Pill({ children, href }) {
  const cls =
    "inline-flex items-center gap-1 rounded-full border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition";
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cls}
      aria-label="License: Source-available (non-commercial)"
    >
      {children}
    </a>
  ) : (
    <span className={cls}>{children}</span>
  );
}

/** Meta card used in the top grid */
function MetaCard({ label, children }) {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</p>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}

/** Simple stat block */
function Stat({ k, v }) {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5 text-center">
      <div className="text-3xl font-extrabold">{v}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{k}</div>
    </div>
  );
}

export default function WanderWise() {
  // Gallery images – replace with your real screenshots in /public/wanderwise/
  const gallery = [
    { src: "/ItineraryPlanner.jpg", alt: "Itinerary Builder" },
    { src: "/CurrencyConvertor.jpg", alt: "Currency Convertor" },
    { src: "/TravelBuddy.jpg", alt: "Travel Buddy" },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="px-6 py-12 max-w-6xl mx-auto text-gray-800 dark:text-gray-100"
    >
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 dark:text-gray-300">WanderWise</span>
      </nav>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          WanderWise — Cross-Platform Travel Companion
        </h1>
        <p className="mt-3 max-w-3xl text-lg">
          AI-assisted trip planning, budget tracking, and local discovery—designed for delightful offline-friendly travel.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Pill>Flutter</Pill>
          <Pill>Firebase</Pill>
          <Pill>Currency Rate API</Pill>
          <Pill>OpenRouter AI</Pill>
          <Pill>FYP / Individual</Pill>
          {/* License badge (link to your repo LICENSE or README#license) */}
          <Pill href="https://github.com/nrathirazmn/WanderWiseMobileApp/tree/main">
            Source-available (non-commercial)
          </Pill>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/nrathirazmn/WanderWiseMobileApp"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white font-semibold shadow hover:opacity-90"
          >
            View Code
          </a>
          <a
            href="/#featured"
            className="rounded-2xl px-5 py-3 border border-gray-300 dark:border-white/10"
          >
            Back to Featured
          </a>
        </div>
      </motion.header>

      {/* Banner image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <img
          src="/WanderWiseVertical.png"
          alt="WanderWise preview"
          className="w-full rounded-3xl object-cover border border-black/5 dark:border-white/10 shadow"
        />
      </motion.div>

      {/* Meta grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <MetaCard label="Role">
          Full-stack builder: product design, Flutter app, Firebase backend, AI integration.
        </MetaCard>
        <MetaCard label="Strategy">
          Modular features, pragmatic UX; gradual AI assist vs. full automation.
        </MetaCard>
        <MetaCard label="Architecture">
          Flutter + State mgmt (Provider/BLoC), Firestore/Auth/Storage, Maps & REST, AI via OpenRouter.
        </MetaCard>
        <MetaCard label="Status">
          Active development •{" "}
          <a
            href="https://github.com/nrathirazmn/WanderWiseMobileApp/tree/main"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-indigo-400 underline-offset-4 hover:text-indigo-600"
          >
            Source-available (non-commercial)
          </a>
        </MetaCard>
      </section>

      {/* Problem / Solution */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Planning trips means juggling scattered tools: notes for ideas, spreadsheets for budgets, maps for places.
            Travelers need a single companion that understands intent, keeps costs in check, and works even with spotty connectivity.
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">The Solution</h2>
          <p className="mt-3 text-sm leading-relaxed">
            WanderWise unifies AI-assisted planning, budgeting, and local discovery.
            Itinerary items, budgets; AI augments (doesn’t replace) user decisions.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Feature Highlights</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          {[
            { icon: "🧠", title: "AI Planning", desc: "Generate/adjust day plans; transform prompts into actionable itineraries." },
            { icon: "💸", title: "Budget Guardrails", desc: "Track spend per day/category; alerts when limits approach." },
            { icon: "📍", title: "Local Discovery", desc: "Curated places with tags, and quick save to itinerary." },
            { icon: "❤️", title: "Travel Buddy", desc: "Match with users all around the world.\n[Tinder Inspired]" },
            { icon: "🤝", title: "Share & Import", desc: "One-tap share; import community itineraries with sanity checks." },
            { icon: "🔒", title: "Sync & Auth", desc: "Secure login; cloud sync across devices via Firebase." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-2 font-semibold">{f.title}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-200 whitespace-pre-line">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Screens</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Snapshots of WanderWise's features.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {gallery.map((g, i) => (
            <motion.div
              key={g.src + i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900"
            >
              <img src={g.src} alt={g.alt} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Architecture & Data Flow</h2>
        <div className="mt-4 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5 text-sm leading-relaxed">
            <ul className="list-disc ml-5 space-y-2">
              <li><b>Presentation:</b> Flutter; state via Provider/BLoC; theming & responsive layout.</li>
              <li><b>Domain & Data:</b> Repositories wrapping Firebase/REST.</li>
              <li><b>AI Layer:</b> OpenRouter calls for itinerary ideas & tips; guarded by rate/error handling.</li>
              <li><b>Offline:</b> Local cache for itinerary & budget; background sync when online.</li>
              <li><b>Observability:</b> Simple analytics for feature usage and errors.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-3">
            <img
              src="/Class_Diagram_WanderWise.jpg"
              alt="Architecture sketch"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Outcomes</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto place-items-center">
          <Stat k="Avg plan time" v="~30s" />
          <Stat k="User Satisfaction" v="> 4.9" />
          <Stat k="Unit/UI tests" v="Growing" />
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          Collected real data upon completion of development.
        </p>
      </section>

      {/* Credits / Links */}
      <section className="mb-16">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">Credits & Links</h2>
          <ul className="mt-3 text-sm space-y-2">
            <li>
              <a
                className="text-indigo-500 hover:text-indigo-600 underline underline-offset-4"
                href="https://github.com/nrathirazmn/WanderWiseMobileApp"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              Design & build by <span className="font-medium">Athira Azman</span>. Tech: Flutter, Firebase, OpenRouter AI.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </motion.main>
  );
}
