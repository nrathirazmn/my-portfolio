import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="fixed top-0 left-0 w-full z-[999]">
        <div className="relative w-full h-10">
          <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-indigo-500 via-fuchsia-400 to-emerald-400" />
          <div className="absolute top-[-0.25rem] left-0 animate-slide">
            <img src="/nyan-cat.gif" alt="Nyan Cat" className="h-10" />
          </div>
        </div>
      </div>
      <NavBar />
      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
}
