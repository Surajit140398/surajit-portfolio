import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ isLoaded, onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoaded) return;

    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    // Smooth quick progress counter (approx 1.6s total)
    const startTime = performance.now();
    const duration = 1500;

    let frameId;
    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    // Keyboard shortcut (Escape) to skip instantly
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        cancelAnimationFrame(frameId);
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLoaded, onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="cinematic-preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          role="status"
          aria-live="polite"
        >
          <div className="preloader-content">
            {/* Minimal Identity Header */}
            <div className="preloader-identity">
              <span className="preloader-brand">SURAJIT MONDAL</span>
              <span className="preloader-tag">PORTFOLIO · 2026</span>
            </div>

            {/* Signature Crimson Progress Line */}
            <div className="preloader-progress-track">
              <motion.div
                className="preloader-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress Counter & Skip Trigger */}
            <div className="preloader-footer">
              <span className="preloader-counter">{progress.toString().padStart(2, "0")}%</span>
              <button
                type="button"
                className="preloader-skip-btn"
                onClick={onComplete}
                aria-label="Skip introduction"
              >
                SKIP INTRO [ESC] &rarr;
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
