import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const getBootLogs = () => {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  const dateStr = `${pad(now.getMonth() + 1)}/${pad(now.getDate())}/${now.getFullYear().toString().slice(-2)} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  
  return [
    `BIOS Date ${dateStr} Ver 1.00`,
    "CPU: Intel(R) Core(TM) i9-13900K @ 3.00GHz",
    "Memory: 65536MB OK",
    "Initializing USB Controllers .. Done.",
    "Booting from hard disk...",
    "Loading Kernel...",
    "Mounting root filesystem...",
    "Initializing network interfaces... [OK]",
    "Starting security protocols... [OK]",
    "Bypassing firewall... [OK]",
    "Establishing secure connection...",
    "Access Granted."
  ];
};

const TypewriterLog = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let timeout;
    let i = 0;
    const typeChar = () => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        timeout = setTimeout(typeChar, 15 + Math.random() * 20);
      }
    };
    typeChar();
    return () => clearTimeout(timeout);
  }, [text]);

  return <div className="boot-log-line">{displayedText}</div>;
};

export default function Preloader({ isLoaded, onComplete }) {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoaded) return;
    
    document.body.style.overflow = "hidden";

    const t2 = setTimeout(() => setStep(2), 500); // Laptop opens
    const t3 = setTimeout(() => setStep(3), 1500); // Zoom

    let logIntervals = [];
    let pInt;
    const tBoot = setTimeout(() => {
      const bootLogs = getBootLogs();
      bootLogs.forEach((log, index) => {
        const id = setTimeout(() => {
          setLogs(prev => [...prev, log]);
        }, index * 600); // Slower speed for coding effect
        logIntervals.push(id);
      });
    }, 2000);

    const t4 = setTimeout(() => {
      setStep(4);
    }, 9500);

    const t5 = setTimeout(() => setStep(5), 12000);
    const t6 = setTimeout(() => setStep(6), 15000);
    
    const tProg = setTimeout(() => {
      setStep(6.5);
      let p = 0;
      pInt = setInterval(() => {
        p += Math.floor(Math.random() * 15) + 5;
        if (p >= 100) {
          p = 100;
          clearInterval(pInt);
        }
        setProgress(p);
      }, 40);
    }, 16500);

    const t7 = setTimeout(() => {
      setStep(7); 
    }, 17500);

    const t8 = setTimeout(() => {
      onComplete();
      document.body.style.overflow = "unset";
    }, 18500);

    return () => {
      clearTimeout(t2); clearTimeout(t3); clearTimeout(tBoot);
      clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); 
      clearTimeout(tProg); clearTimeout(t7); clearTimeout(t8);
      clearInterval(pInt);
      logIntervals.forEach(clearTimeout);
      document.body.style.overflow = "unset";
    };
  }, [isLoaded, onComplete]);

  const renderProgressBar = (pct) => {
    const totalBlocks = 20;
    const filled = Math.floor((pct / 100) * totalBlocks);
    const empty = totalBlocks - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${pct}%`;
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div 
          className="preloader-container"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="crt-scanlines"></div>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: step >= 3 ? 0 : 1, transition: 'opacity 1s ease' }}>
            <ParticlesBackground />
          </div>
          <div className={`laptop-zoom-container ${step >= 3 ? 'zoomed' : ''} ${step === 7 ? 'intense-glitch' : ''}`}>
            <div className="laptop-3d-wrapper">
              <div className={`laptop-lid ${step >= 2 ? 'open' : ''}`}>
                <div className="lid-front">
                  <div className="lid-screen">
                    <div className={`screen-glow ${step >= 3 ? 'active' : ''}`}></div>
                  </div>
                  <div className="lid-bezel-logo">hp</div>
                </div>
                <div className="lid-back">
                  <div className="victus-logo-container">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 85L20 20H40L50 45L60 20H80L50 85Z" fill="silver"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="laptop-base-3d">
                <div className="keyboard-indent"></div>
                <div className="trackpad"></div>
              </div>
            </div>
          </div>

          <div className={`preloader-text-overlay ${step === 7 ? 'rgb-glitch' : ''}`}>
            {step === 3 && (
              <div className="boot-logs-container">
                {logs.map((log, i) => <TypewriterLog key={i} text={log} />)}
              </div>
            )}
            
            {step >= 4 && (
              <div className="text-content-wrapper crt-flicker" style={{ display: step === 3 ? 'none' : 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {step >= 4 && (
                  <div className={`preloader-typing-text typing-1`} style={{ borderRight: step >= 5 ? 'none' : '0.6em solid var(--accent)' }}>
                    {">"} Hello, I'm <span className="highlight">Surajit Mondal</span>.
                  </div>
                )}
                {step >= 5 && (
                  <div className={`preloader-typing-text typing-2`} style={{ borderRight: step >= 6 ? 'none' : '0.6em solid var(--accent)' }}>
                    {">"} Welcome to my <span className="highlight">creative workspace</span>.
                  </div>
                )}
                {step >= 6 && (
                  <div className="preloader-typing-text typing-3" style={{ borderRight: step >= 6.5 ? 'none' : '0.6em solid var(--accent)' }}>
                    {">"} <span className="highlight">Loading portfolio...</span>
                  </div>
                )}
                {step >= 6.5 && (
                  <div className="ascii-progress-bar">
                    {">"} {renderProgressBar(progress)}
                    <span className="blinking-cursor">█</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
