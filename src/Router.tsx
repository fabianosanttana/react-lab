import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = React.lazy(() => import("./components/Navbar"));

const RenderingPage = React.lazy(() => import("./pages/rendering.page"));
const HooksPage = React.lazy(() => import("./pages/hooks.page"));

export const AppRoutes = () => {
  console.count("Router rendered");
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<RenderingPage />} />
            <Route path="/hooks" element={<HooksPage />} />
          </Routes>
        </div>
      </Router>
    </React.Suspense>
  );
};
