import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home, {Place} from "./pages";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth'
    })
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
