import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-24 px-6 max-w-6xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mx-auto max-w-3xl text-center">
          {title && <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>}
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
          )}
        </div>
      )}
      <div className="mt-12">{children}</div>
    </section>
  );
}

function ProjectCard({ title, role, desc, tech, hrefCode = "#", hrefDemo = "#", to }) {
  const CardInner = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group rounded-3xl bg-white dark:bg-gray-900 p-6 sm:p-7 transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-[0_0_0_2px_rgba(99,102,241,0.3)] hover:border-indigo-400"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{role}</p>
        </div>
        <span className="rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow">
          Featured
        </span>
      </div>
      <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">{desc}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
        {tech.map((t) => (
          <span key={t} className="rounded-full border border-gray-200 dark:border-white/10 px-2 py-1">{t}</span>
        ))}
      </div>
      {/* <div className="mt-5 flex items-center gap-4">
        <a href={hrefCode} target="_blank" rel="noreferrer" className="text-sm font-medium text-indigo-500 hover:text-indigo-600">
          Code
        </a>
        {hrefDemo && hrefDemo !== "#" && (
          <a href={hrefDemo} target="_blank" rel="noreferrer" className="text-sm font-medium text-emerald-500 hover:text-emerald-600">
            Live Demo
          </a>
        )}
      </div> */}
    </motion.div>
  );
  return to ? <Link to={to} className="block no-underline">{CardInner}</Link>
             : <a href={hrefDemo} target="_blank" rel="noreferrer" className="block no-underline">{CardInner}</a>;
}

/* --- NEW helpers for the Skills section --- */
function LevelBar({ level = 80 }) {
  return (
    <div className="mt-2 h-2 w-full rounded-full bg-gray-200/70 dark:bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-emerald-500"
        style={{ width: `${level}%` }}
        aria-label={`Skill level ${level}%`}
      />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-gray-900/60 px-2.5 py-0.5 text-xs">
      {children}
    </span>
  );
}
/* --- end helpers --- */

function FeaturedProject() {
  return (
    <Section id="featured" title="Featured Project — WanderWise"
      subtitle="All-in-one travel companion that blends itinerary planning, currency conversion, and AI assistance.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
          <img src="/WanderWise.png" alt="WanderWise preview" className="rounded-3xl w-full object-cover shadow border border-black/5 dark:border-white/10" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
          <h3 className="text-2xl font-bold">WanderWise — Travel Companion (FYP)</h3>
          <p className="mt-3 text-gray-700 dark:text-gray-200">
            Built with Flutter + OpenRouter AI. Generate trips, import community itineraries, and plan smarter with an offline-friendly toolkit.
          </p>
          <ul className="mt-4 list-disc ml-6 text-sm text-gray-700 dark:text-gray-200 space-y-1">
            <li>AI chatbot for destination tips & itinerary generation</li>
            <li>Itinerary sharing and one-click import</li>
            <li>Offline-friendly maps & currency converter</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/wanderwise" className="rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white font-semibold shadow hover:opacity-90">
              Read case study
            </Link>
            <a href="https://github.com/nrathirazmn/WanderWiseMobileApp" target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-3 border border-gray-300 dark:border-white/10">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

const journey = [
  { when: "Feb 2025 — Present", title: "President • AIESEC in Kuching", location: "Kota Samarahan, Sarawak", details: ["Lead strategic planning and operations for youth-focused community programs."], tags: ["Leadership", "Strategy", "Operations"] },
  { when: "Sept 2023 — Jan 2025", title: "Head of Incoming Global Volunteer (iGV)", details: ["Led SDG-focused projects (Climate Action, Quality Education) impacting 100+ participants."], tags: ["SDG", "People Ops"] },
  { when: "Mar 2023 — Aug 2023", title: "Director • Speak Up Sarawak 11.0 & ECHO 1.0", details: ["Ensured volunteer experience; impacted 50 stakeholders; raised awareness on stray animals; raised crowdfunds for beneficiaries."], tags: ["Events", "Fundraising", "Community"] },
];

const journeyPhotos = [
  { src: "/Induction.jpg", caption: "Induction Day — AKCH 25.26" },
  { src: "/School_Bali.jpg", caption: "World's Largest Lesson in Bali" },
  { src: "/Hiking.jpg", caption: "ECHO Hiking" },
  { src: "/School_Workshops.jpg", caption: "Food Heroes" },
  { src: "/Bali_APC.jpg", caption: "Asia Pacific Conference (APC) in Bali" },
];

function PhotoCarousel({ photos = journeyPhotos, auto = true, interval = 4500 }) {
  const [i, setI] = useState(0);
  function prev() { setI((p) => (p - 1 + photos.length) % photos.length); }
  function next() { setI((p) => (p + 1) % photos.length); }
  useEffect(() => {
    function onKey(e) { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); }
    window.addEventListener("keydown", onKey);
    let t; if (auto) t = setInterval(next, interval);
    return () => { window.removeEventListener("keydown", onKey); if (t) clearInterval(t); };
  }, [auto, interval]);
  const current = photos[i];
  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 shadow">
        <motion.img key={current.src} src={current.src} alt={current.caption || "Journey photo"} initial={{ opacity: 0.0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="w-full h-72 md:h-96 object-cover" />
        {current.caption && (<div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm px-4 py-2">{current.caption}</div>)}
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-gray-800/80 px-3 py-2 text-sm shadow hover:bg-white" aria-label="Previous photo">‹</button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-gray-800/80 px-3 py-2 text-sm shadow hover:bg-white" aria-label="Next photo">›</button>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {photos.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`h-2 w-2 rounded-full ${i === idx ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-700"}`} aria-label={`Go to slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="selection:bg-fuchsia-200 selection:text-gray-900">
      <header id="home" className="relative flex items-center justify-center text-center min-h-[92vh] px-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
          <div className="absolute top-40 -right-16 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300">Software Engineer • President of AIESEC in Kuching 25.26 • Web & Mobile Dev</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-emerald-500">Athira</span></h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-200">I build thoughtful mobile & web apps. Passionate about clean UX, pragmatic tech, and empowering communities.</p>

          {/* NEW: quick skills tag row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <Tag>Flutter</Tag><Tag>Dart</Tag><Tag>Firebase</Tag>
            <Tag>React</Tag><Tag>Tailwind</Tag><Tag>Framer Motion</Tag>
            <Tag>PHP</Tag><Tag>MySQL/MariaDB</Tag><Tag>Chart.js</Tag>
            <Tag>Java (Swing)</Tag><Tag>Git/GitHub</Tag><Tag>Vercel/Netlify</Tag>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/wanderwise" className="rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white font-semibold shadow hover:opacity-90">Explore WanderWise ✨</Link>
            <a href="#journey" className="rounded-2xl px-5 py-3 border border-gray-300 dark:border-white/10">See my AIESEC journey</a>
          </div>
        </motion.div>
      </header>

      <Section id="about" title="About Me" subtitle="A little context and a few fun facts.">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl bg-white dark:bg-gray-900 p-6 shadow border border-black/5 dark:border-white/10">
              <p className="text-gray-700 dark:text-gray-200">
                Graduating Software Engineering student (November 2025) with a passion for crafting thoughtful mobile and web experiences using Flutter, React, and AI-enhanced features. I’ve created products like WanderWise (a smart travel companion), e-commerce platforms, and budgeting tools, each blending clean UX with real-world utility. Beyond building, I lead community-driven initiatives, mentor young coders, and dive into books to fuel my curiosity and growth.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <li className="rounded-xl px-3 py-2 bg-gray-100 dark:bg-gray-800">🎶 Red Velvet & RnB</li>
                <li className="rounded-xl px-3 py-2 bg-gray-100 dark:bg-gray-800">🎮 ML player</li>
                <li className="rounded-xl px-3 py-2 bg-gray-100 dark:bg-gray-800">📚 Ebook lover</li>
                <li className="rounded-xl px-3 py-2 bg-gray-100 dark:bg-gray-800">🌿 Sustainability</li>
              </ul>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src="/GL.jpg" alt="Athira smiling" className="rounded-3xl h-64 sm:h-80 w-full object-cover shadow-md border border-black/5 dark:border-white/10" />
          </motion.div>
        </div>
      </Section>

      {/* NEW: My Tech Toolkit */}
      <Section
        id="skills"
        title="My Tech Toolkit"
        subtitle="What I’m strongest at and comfortable shipping with."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mobile (Flutter) */}
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
            <h3 className="text-lg font-semibold">Mobile — Flutter</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Production-ready UI, state mgmt, Firebase integration.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>Flutter</Tag><Tag>Dart</Tag><Tag>Firebase (Auth/Firestore/Storage)</Tag>
              <Tag>Google Maps API</Tag><Tag>OpenRouter AI</Tag>
            </div>
            <LevelBar level={90} />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Strength: Strong</p>
          </div>

          {/* Frontend (React) */}
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
            <h3 className="text-lg font-semibold">Frontend — React</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              SPA routing, motion, responsive design, accessibility basics.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>React</Tag><Tag>Vite</Tag><Tag>React Router</Tag>
              <Tag>Tailwind CSS</Tag><Tag>Framer Motion</Tag>
            </div>
            <LevelBar level={85} />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Strength: Strong</p>
          </div>

          {/* Backend/Web (PHP) */}
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
            <h3 className="text-lg font-semibold">Backend / Web</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Reservation/checkout flows, admin dashboards, auth.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>PHP</Tag><Tag>MySQL / MariaDB</Tag><Tag>Sessions</Tag>
              <Tag>Bootstrap 5</Tag><Tag>Chart.js</Tag><Tag>PHPMailer</Tag>
            </div>
            <LevelBar level={78} />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Strength: Comfortable</p>
          </div>

          {/* Desktop (Java) */}
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
            <h3 className="text-lg font-semibold">Desktop — Java</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Lightweight finance tools with simple storage & charts.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>Java</Tag><Tag>Swing + AWT</Tag><Tag>NetBeans</Tag><Tag>JFreeChart</Tag>
            </div>
            <LevelBar level={70} />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Strength: Comfortable</p>
          </div>

          {/* Collaboration & Ops */}
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
            <h3 className="text-lg font-semibold">Collab & Ops</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Delivery with design thinking and pragmatic tooling.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>Git / GitHub</Tag><Tag>Figma</Tag><Tag>XAMPP</Tag>
              <Tag>Vercel</Tag><Tag>Netlify</Tag>
            </div>
            <LevelBar level={80} />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Strength: Strong</p>
          </div>

          {/* Currently Learning */}
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 p-5">
            <h3 className="text-lg font-semibold">Currently Learning</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Deepening full-stack and cloud skills.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>TypeScript</Tag><Tag>Next.js</Tag><Tag>Cloud Functions</Tag>
            </div>
            <LevelBar level={55} />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Strength: Exploring</p>
          </div>
        </div>
      </Section>

      <FeaturedProject />

      <Section id="projects" title="More Projects" subtitle="Other things I’ve built and shipped.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="AS Seafood Supplier — E-commerce Website"
            role="Project Manager • Full-stack (PHP/MySQL)"
            desc="Digital storefront with catalog, cart (pay at shop), and admin CMS with best-seller analytics."
            tech={[
              "PHP",
              "MySQL (mysqli)",
              "Bootstrap 5",
              "Chart.js",
              "PHPMailer",
              "HTML/CSS/JS",
              "Group Project",
            ]}
            to="/projects/seafood"
            hrefCode="https://github.com/yantingling/AUV-AS-Seafood-Supplier-Ecommerce"
            hrefDemo="https://youtu.be/q5MBZtiSGZ4"
          />

          <ProjectCard
            title="CarMe — Car Rental Platform"
            role="Full-stack • Web (PHP/MySQL)"
            desc="Customer + admin portals: search/reserve, cart/checkout, invoices, fleet & transactions."
            tech={[
              "PHP",
              "MySQL/MariaDB (mysqli)",
              "PEAR Mail",
              "Vanilla JS",
              "Custom CSS",
              "Group Project",
            ]}
            to="/projects/carme"
          />

          <ProjectCard
            title="Money Budget App"
            role="Desktop Java (Swing)"
            desc="Track expenses & income, simple budgets, and lightweight charts. Built in Year 2."
            tech={[
              "Java",
              "Swing + AWT",
              "NetBeans (GUI Builder)",
              "JFreeChart",
              "Local files (CSV-like)",
            ]}
            to="/projects/money-budget"
          />
        </div>
      </Section>

      <Section id="journey" title="My AIESEC Journey" subtitle="Moments that shaped me as a leader.">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ol className="relative border-l border-gray-200 dark:border-white/10">
            {journey.map((j, idx) => (
              <motion.li key={j.title + idx} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="mb-10 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 ring-8 ring-white dark:ring-gray-950" />
                <time className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{j.when}</time>
                <h4 className="text-lg font-semibold mt-1">{j.title}</h4>
                {j.location && (<p className="text-xs text-gray-500 dark:text-gray-400">{j.location}</p>)}
                <ul className="mt-2 list-disc ml-5 text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  {j.details.map((d) => (<li key={d}>{d}</li>))}
                </ul>
                {!!j.tags?.length && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {j.tags.map((t) => (<span key={t} className="px-2 py-1 rounded-full border border-gray-200 dark:border-white/10">{t}</span>))}
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
          <PhotoCarousel photos={journeyPhotos} />
        </div>
      </Section>

      <Section id="contact" title="Let’s Connect" subtitle="Open to jobs, freelancing, and coffee chats.">
        <div className="mx-auto max-w-xl rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 sm:p-8 text-center shadow">
          <p className="text-gray-700 dark:text-gray-200">Email me and let's connect:</p>
          <a href="mailto:nrathirazmn@gmail.com" className="mt-3 inline-block rounded-2xl px-5 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white font-semibold shadow hover:opacity-90">nrathirazmn@gmail.com</a>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <a href="https://github.com/nrathirazmn" target="_blank" rel="noreferrer" className="underline decoration-indigo-400 underline-offset-4 hover:decoration-2">GitHub</a>
            <a href="https://www.linkedin.com/in/nur-athira-azman-194b36227/" target="_blank" rel="noreferrer" className="underline decoration-emerald-400 underline-offset-4 hover:decoration-2">LinkedIn</a>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-gray-500 dark:text-gray-400">Built with ❤️ — React • Tailwind • Framer Motion</footer>
    </div>
  );
}
