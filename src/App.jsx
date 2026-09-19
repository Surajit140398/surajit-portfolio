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
            background: '#FFFFFF',
            color: '#171717',
            border: '1px solid #E8E8E8',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            fontFamily: 'var(--sans)',
            fontSize: '13px',
            fontWeight: 500
          }
        }} 
      />
      <Preloader isLoaded={isLoaded} onComplete={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <SmoothScroll>
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
        </SmoothScroll>
      )}
    </>
  );
}

export default App;