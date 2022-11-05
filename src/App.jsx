import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import ContactPage from "./pages";
import Home, { ContactPage } from "./pages";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log("app.jslogged");
  }, []);

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
