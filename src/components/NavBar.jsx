import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className="fixed top-5 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/#home" className="text-lg sm:text-xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-emerald-500">
            Athira Azman
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="/#about" className="hover:text-indigo-500">About</a>
          <a href="/#featured" className="hover:text-indigo-500">WanderWise</a>
          <a href="/#projects" className="hover:text-indigo-500">Projects</a>
          <a href="/#journey" className="hover:text-indigo-500">Journey</a>
          <a href="/#contact" className="hover:text-indigo-500">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
