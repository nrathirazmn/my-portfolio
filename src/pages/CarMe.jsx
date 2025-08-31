import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/** Small badge/pill (non-link) */
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

/** Simple stat block (optional) */
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

/** AS-style carousel (same sizing/behavior as your AS Seafood page) */
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
        No screenshots yet — add images and populate the array for this section.
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

export default function CarMe() {

  const customerGallery = [
    { src: "/carme-mycar.png", alt: "Customer — Bookings" },
    { src: "/carrental.png", alt: "Customer — Car Rentals" },
    { src: "/carmepage.png", alt: "Customer — Homepage" },
    { src: "/searchfx.png", alt: "Customer — Search Function" },
  ];

  const adminGallery = [
    { src: "/carmeadmin.png", alt: "Admin — Dashboard" },
    { src: "/carmecardash.png", alt: "Admin — Cars Dashboard" },
    { src: "/carmememdash.png", alt: "Admin — Members Dashboard" },
    { src: "/carmetransactiondash.png", alt: "Admin — Transaction Dashboard" },
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
        <span className="text-gray-700 dark:text-gray-300">CarMe</span>
      </nav>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          CarMe — Car Rental Platform
        </h1>
        <p className="mt-3 max-w-3xl text-lg">
          A PHP + MySQL web app for car rentals with customer & admin portals:
          search & reserve, cart/checkout, invoices, fleet management, and
          transaction records.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Pill>PHP (procedural)</Pill>
          <Pill>MySQL / MariaDB (mysqli)</Pill>
          <Pill>Sessions Auth</Pill>
          <Pill>PEAR Mail (emails)</Pill>
          <Pill>Vanilla JS</Pill>
          <Pill>Custom CSS + Boxicons</Pill>
          <Pill>Group Project</Pill>
        </div>
      </motion.header>

      {/* Meta grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <MetaCard label="Role">
          Full-stack (database schema, reservation/cart, admin UX)
        </MetaCard>
        <MetaCard label="Customer Flow">
          Search → select car → add to cart → checkout → invoice
        </MetaCard>
        <MetaCard label="Admin Flow">
          Cars CRUD, members, transactions, profile
        </MetaCard>
        <MetaCard label="Status">
          Shipped MVP • Local & XAMPP-ready
        </MetaCard>
      </section>

      {/* Problem / Solution */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Traditional rental workflows rely on walk-ins/phone bookings and
            spreadsheets. Customers lack real-time availability, and admins
            spend time on manual updates.
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">The Solution</h2>
          <p className="mt-3 text-sm leading-relaxed">
            A lightweight web platform: customers can browse by location/date
            and reserve cars; admins manage fleet data and review transactions —
            all backed by a simple MySQL schema.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Feature Highlights</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          {[
            { icon: "🔎", title: "Customer — Search & Browse", desc: "Filter by location/date; view live car details (brand/model/seater/price)." },
            { icon: "🛒", title: "Cart & Checkout", desc: "Add to cart with number of days; confirm checkout and generate invoice." },
            { icon: "📄", title: "Invoice", desc: "Printable invoice per reservation with itemized costs and totals." },
            { icon: "🚗", title: "Admin — Cars CRUD", desc: "Create/edit/delete cars, set price & availability, upload images." },
            { icon: "👥", title: "Members & Sessions", desc: "Customer login/registration; admin login; PHP sessions for auth." },
            { icon: "✉️", title: "Email (Optional)", desc: "PEAR Mail integration for contact/newsletter; configurable SMTP in XAMPP." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-2 font-semibold">{f.title}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-200">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens — Customer vs Admin carousels (AS-sized) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Screens</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Screenshots<code> of customers side</code> and{" "}
          <code>admin side</code> of the website.
        </p>

        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer</h3>
            <PhotoCarousel photos={customerGallery} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Admin</h3>
            <PhotoCarousel photos={adminGallery} />
          </div>
        </div>
      </section>

      {/* Outcomes (optional) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Outcomes</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto place-items-center">
          <Stat k="Booking steps" v="↓ Simplified" />
          <Stat k="Admin updates" v="Faster" />
          <Stat k="Deploy target" v="XAMPP / Local" />
        </div>
      </section>

      {/* Credits */}
      <section className="mb-16">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold">Credits</h2>
          <ul className="mt-3 text-sm space-y-2">
            <li>
              Built by a student team. My scope: database schema, reservation &
              cart flow, and admin UX.
            </li>
            <li>
              Tech: PHP (mysqli), MySQL/MariaDB, Sessions, PEAR Mail, Vanilla
              JS, custom CSS, Boxicons.
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
