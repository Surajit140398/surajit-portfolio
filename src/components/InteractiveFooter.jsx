import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveFooter() {
  const footerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, 
        { scale: 0.5, opacity: 0, y: 100 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ position: "relative", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", background: "var(--bg)", overflow: "hidden", zIndex: 1 }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", textAlign: "center" }}>
        <h2 ref={textRef} style={{ fontSize: "clamp(60px, 15vw, 250px)", margin: 0, lineHeight: 1, letterSpacing: "-5px", color: "var(--text)", whiteSpace: "nowrap" }}>
          LET'S TALK
        </h2>
      </div>
      
      <div style={{ position: "absolute", bottom: "40px", left: "0", width: "100%", display: "flex", justifyContent: "space-between", padding: "0 5%", boxSizing: "border-box", fontSize: "14px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "2px" }}>
        <span>© 2026 Surajit Mondal</span>
        <span>Designed & Built with curiosity.</span>
      </div>
    </footer>
  );
}
