import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Ostaagaar from "./pages/Ostaagaar";
import AmbitionAqua from "./pages/AmbitionAqua";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import WhatsAppButton from "./components/WhatsAppButton";
import MailButton from "./components/MailButton";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import "./App.css";
import "./CaseStudy.css";

function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: 'var(--surface)',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            fontFamily: 'monospace'
          }
        }} 
      />
      <Preloader isLoaded={isLoaded} onComplete={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <>
          <Cursor />
          <Navigation />
          <WhatsAppButton />
          <MailButton />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects/ostaagaar" element={<Ostaagaar />} />
              <Route path="/projects/ambition-aqua-biotech" element={<AmbitionAqua />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;