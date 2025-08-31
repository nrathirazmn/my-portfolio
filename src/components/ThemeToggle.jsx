import React from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === "undefined") return "light";
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2 text-sm shadow hover:bg-white/70 dark:hover:bg-white/10 transition"
      aria-label="Toggle theme"
    >
      <span className="h-4 w-4 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-400 to-emerald-400" />
      <span className="font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
