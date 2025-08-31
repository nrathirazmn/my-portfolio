import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import WanderWise from "./pages/WanderWise";
import Seafood from "./pages/AS_Seafood_Supplier";
import MoneyBudget from "./pages/MoneyBudget";
import CarMe from "./pages/CarMe";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="wanderwise" element={<WanderWise />} />
          <Route path="projects/seafood" element={<Seafood />} />
          <Route path="projects/money-budget" element={<MoneyBudget />} />
          <Route path="projects/carme" element={<CarMe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
