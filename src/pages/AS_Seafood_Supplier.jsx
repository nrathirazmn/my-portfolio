import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);

/** Small badge/pill (linkable) */
function Pill({ children, href }) {
  const cls =
    "inline-flex items-center gap-1 rounded-full border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <span className={cls}>{children}</span>
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

/** Simple stat block */
function Stat({ k, v }) {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5 text-center">
      <div className="text-3xl font-extrabold">{v}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {k}
      </div>
    </div>
  );
}

/** Reusable carousel (same behavior as on Home) */
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
        No screenshots yet—add images to <code>/public/seafood/…</code>
      </div>
    );
  }

  const current = photos[i];
  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 shadow">
        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt || "Screenshot"}
          initial={{ opacity: 0.0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-72 md:h-96 object-cover"
        />
        {current.alt && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm px-4 py-2">
            {current.alt}
          </div>
        )}
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

export default function AS_Seafood_Supplier() {
  /** Put screenshots in these folders and update filenames as needed */
  const customerScreens = [
    { src: "/AS_Homepage.png", alt: "Customer — HomePage" },
    { src: "/HTP.png", alt: "Customer — How to Purchase" },
    { src: "/OrderSummary.png", alt: "Customer — Order Summary" },
    { src: "/Invoice.png", alt: "Customer — Invoice)" },
    { src: "/ShoppingCart.png", alt: "Customer — Shopping" },
  ];

  const adminScreens = [
    { src: "/adminDashboard.png", alt: "Admin — Dashboard & charts" },
    { src: "/OrderSelection.png", alt: "Admin — Order Selection" },
    { src: "/ProductAdmin.png", alt: "Admin — Product" },
    { src: "/adminAS.png", alt: "Admin Page" },
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
        <Link to="/" className="hover:text-indigo-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 dark:text-gray-300">
          AS Seafood Supplier
        </span>
      </nav>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          AS Seafood Supplier — E-commerce Platform
        </h1>
        <p className="mt-3 max-w-3xl text-lg">
          Digital marketplace for a local seafood shop—catalog, cart, and
          in-store payment flow on the customer side; stock management and
          best-seller analytics on the admin side.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Pill>PHP</Pill>
          <Pill>MySQL (mysqli)</Pill>
          <Pill>Bootstrap 5</Pill>
          <Pill>Bootstrap Icons</Pill>
          <Pill>Chart.js</Pill>
          <Pill>PHPMailer</Pill>
          <Pill>HTML</Pill>
          <Pill>CSS</Pill>
          <Pill>JavaScript</Pill>
          <Pill>Group Project</Pill>
          {/* Links */}
          <Pill href="https://github.com/yantingling/AUV-AS-Seafood-Supplier-Ecommerce">
            GitHub · Access Upon Request
          </Pill>
          <Pill href="https://youtu.be/q5MBZtiSGZ4">Demo Video</Pill>
        </div>
      </motion.header>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <img
          src="/AS_Homepage.png"
          alt="AS Seafood platform preview"
          className="w-full rounded-3xl object-cover border border-black/5 dark:border-white/10 shadow"
        />
      </motion.div>

      {/* Meta grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <MetaCard label="Client">
          Encik Asrial — digitize the physical seafood marketplace.
        </MetaCard>
        <MetaCard label="Role">
          Project Manager • Full-stack (coordination, backend endpoints, admin UX)
        </MetaCard>
        <MetaCard label="Architecture">
          PHP + MySQL • Bootstrap 5 • Chart.js • PHPMailer • Session-based auth
        </MetaCard>
        <MetaCard label="Status">Shipped MVP • Ongoing enhancements</MetaCard>
      </section>

      {/* Problem / Solution */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="mt-3 text-sm leading-relaxed">
            The shop relied on walk-ins and phone orders—no central catalog,
            limited reach, and manual stock tracking. Customers couldn’t easily
            browse today’s fresh inventory or reserve items, and the owner had
            no quick view of what sells best.
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">The Solution</h2>
          <p className="mt-3 text-sm leading-relaxed">
            A web platform with a live catalog and reservation-style checkout
            (pay at shop), plus an admin panel to manage inventory and visualize
            best-selling products—unlocking digital reach while keeping the
            store’s familiar in-person payment flow.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Feature Highlights</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          {[
            {
              icon: "🛒",
              title: "Customer — Catalog & Cart",
              desc:
                "Browse seafood by type (fish, shellfish, etc.); filter by freshness/price; add to cart; confirm reservation.",
            },
            {
              icon: "🏪",
              title: "Pay at Shop",
              desc:
                "Checkout generates an order reservation (QR/ID). Customer pays on pickup—no online gateway needed.",
            },
            {
              icon: "📦",
              title: "Admin — Stock Management",
              desc:
                "CRUD products, control availability/weights, set prices, upload images, and bulk update inventory.",
            },
            {
              icon: "📈",
              title: "Best-Sellers & Trends",
              desc:
                "Dashboard charts for top sellers, revenue estimates, and daily/weekly trends to plan procurement.",
            },
            {
              icon: "👥",
              title: "Roles & Auth",
              desc:
                "Session-based login (PHP sessions); admin/manager roles; audit timestamps on key changes.",
            },
            {
              icon: "🔎",
              title: "Search & Filters",
              desc:
                "Type-ahead search; category chips; in-stock only; price range slider.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-2 font-semibold">{f.title}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-200">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens split: Customer vs Admin (with carousels) */}
      <section className="mb-16" id="screens">
        <h2 className="text-2xl font-semibold">Screens</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Screenshots<code> of customers side</code> and{" "}
          <code>admin side</code> of the website.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer</h3>
            <PhotoCarousel photos={customerScreens} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Admin</h3>
            <PhotoCarousel photos={adminScreens} />
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Architecture & Data Flow</h2>
        <div className="mt-4 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5 text-sm leading-relaxed">
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <b>Frontend:</b> Bootstrap 5 + vanilla JS; customer and admin
                pages; responsive UI with icons.
              </li>
              <li>
                <b>Backend:</b> PHP controllers/endpoints for products, users,
                orders/reservations; input validation & error handling.
              </li>
              <li>
                <b>Database:</b> MySQL (products, categories, stock, users,
                orders). Aggregations for charts.
              </li>
              <li>
                <b>Auth:</b> Session-based login (PHP sessions) with role-based
                access (admin/manager); protected admin area.
              </li>
              <li>
                <b>Analytics:</b> Chart.js for best-sellers and time-series
                trends in admin dashboard.
              </li>
              <li>
                <b>Notifications:</b> PHPMailer for transactional emails (optional).
              </li>
              <li>
                <b>Payment:</b> In-store settlement (no gateway) via reservation
                ID/QR for quick lookup.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
            <img
              src="/ContextDiagramAS.png"
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
          <Stat k="Time to order" v="↓ ~50%" />
          <Stat k="Catalog coverage" v="100% live" />
          <Stat k="Best-seller insight" v="Weekly charts" />
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          Measured post-launch with store feedback & admin dashboard metrics.
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
                href="https://github.com/yantingling/AUV-AS-Seafood-Supplier-Ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>{" "}
              •{" "}
              <a
                className="text-emerald-500 hover:text-emerald-600 underline underline-offset-4"
                href="https://youtu.be/q5MBZtiSGZ4"
                target="_blank"
                rel="noreferrer"
              >
                Demo Video
              </a>
            </li>
            <li>
              Built for <span className="font-medium">Encik Asrial</span> by a
              student team. My role: Project Manager & Full-stack.
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
