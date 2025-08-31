import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/** Small badge/pill */
function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs">
      {children}
    </span>
  );
}

/** Meta card */
function MetaCard({ label, children }) {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}

/** Phone-style carousel (no cropping, supports arrows + dots + autoplay) */
function PhotoCarousel({ photos = [], auto = true, interval = 4500 }) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + photos.length) % photos.length);
  const next = () => setI((p) => (p + 1) % photos.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    let t;
    if (auto && photos.length > 1) t = setInterval(next, interval);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (t) clearInterval(t);
    };
  }, [auto, interval, photos.length]);

  if (!photos.length) {
    return (
      <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 text-sm">
        No screenshots yet—add images to <code>/public/money-budget/</code> and
        populate the <code>gallery</code> array.
      </div>
    );
  }

  const current = photos[i];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Phone frame container */}
      <div className="relative mx-auto w-full max-w-[380px] md:max-w-[420px] aspect-[9/19.5] rounded-[2rem] border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 shadow overflow-hidden">
        {/* “Bezel” top bar (optional, looks like a phone notch area) */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-black/5 dark:bg-white/5" />
        {/* Image (no crop) */}
        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt || "Screenshot"}
          draggable="false"
          initial={{ opacity: 0.0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-contain p-3"
        />
        {/* Caption */}
        {current.alt && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs md:text-sm px-3 py-2">
            {current.alt}
          </div>
        )}
        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-gray-800/80 px-3 py-2 text-sm shadow hover:bg-white"
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-gray-800/80 px-3 py-2 text-sm shadow hover:bg-white"
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${
              i === idx ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function MoneyBudget() {
  const gallery = [
    { src: "/moneytrackerhomepage.jpg", alt: "Overview — Dashboard" },
    { src: "/incomeoverview.jpg", alt: "Income Overview" },
    { src: "/expensesoverview.jpg", alt: "Expenses Overview" },
    { src: "/summaryoverview.jpg", alt: "Summary Overview" },
    { src: "/graphoverview.jpg", alt: "Graph Overview" },
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
        <span className="text-gray-700 dark:text-gray-300">Money Budget App</span>
      </nav>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Money Budget App — Personal Finance
        </h1>
        <p className="mt-3 max-w-3xl text-lg">
          Track expenses and income, set simple budgets, and visualize trends with lightweight charts.
          A desktop app built during Year&nbsp;2.
        </p>

        {/* Corrected tech stack */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Pill>Java</Pill>
          <Pill>Swing + AWT</Pill>
          <Pill>NetBeans (GUI Builder)</Pill>
          <Pill>JFreeChart</Pill>
          <Pill>Local text files (CSV-like)</Pill>
          <Pill>Desktop App</Pill>
          <Pill>Year 2 Project</Pill>
        </div>
      </motion.header>

      {/* Meta grid (kept simple) */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <MetaCard label="Role">Group Project (UI, file I/O, charts)</MetaCard>
        <MetaCard label="Platform">Desktop (Swing)</MetaCard>
        <MetaCard label="Storage">
          Local files: <code>income.txt</code>, <code>expense.txt</code>
        </MetaCard>
        <MetaCard label="Status">Complete • Personal use</MetaCard>
      </section>

      {/* Highlights / Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Highlights</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          {[
            { icon: "🏷️", title: "Categories & Totals", desc: "Record income/expenses by category; compute monthly totals and summaries." },
            { icon: "🧾", title: "Fast Entry", desc: "Quick add using simple forms (Swing); data written to local text files." },
            { icon: "📊", title: "Charts", desc: "Visualize income/expenses with JFreeChart and custom-painted panels." },
            { icon: "💾", title: "Offline & Local", desc: "No database or account; everything stays in local CSV-like files." },
            { icon: "🧹", title: "Lightweight UX", desc: "Focused screens with clear controls; minimal setup to start tracking." },
            { icon: "🛠️", title: "NetBeans Project", desc: "Swing forms via NetBeans GUI builder (.form files) for quick iteration." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-2 font-semibold">{f.title}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-200">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens — Carousel in phone frame */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Screens</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Screenshots of the money budget tracker.
        </p>
        <div className="mt-6">
          <PhotoCarousel photos={gallery} />
        </div>
      </section>

      {/* What I learned */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">What I Learned</h2>
        <ul className="mt-4 list-disc ml-6 text-sm space-y-1 text-gray-700 dark:text-gray-200">
          <li>Building desktop UIs with Swing and the NetBeans GUI builder.</li>
          <li>File I/O (BufferedReader/BufferedWriter) to persist simple records.</li>
          <li>Hooking up JFreeChart for quick visual feedback from raw data.</li>
        </ul>
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
