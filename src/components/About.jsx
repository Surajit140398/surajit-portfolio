import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { media } from "../data/media";

export default function About() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener?.("change", handleChange);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      motionQuery.removeEventListener?.("change", handleChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="scene scene-about" id="about">
      {/* ── LAYER 1 & 2: ABOUT BACKGROUND IMAGE & ATMOSPHERIC DEPTH ── */}
      <div
        className="scene-bg about-bg"
        style={{
          transform: isReducedMotion ? "none" : `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px) scale(1.03)`,
          transition: "transform 0.15s ease-out"
        }}
      >
        {/* Primary Cloudinary About Background Image */}
        <img
          src={media.about.backgroundImage}
          alt=""
          aria-hidden="true"
          className="about-cloudinary-bg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            pointerEvents: "none",
            zIndex: 0
          }}
        />

        <div className="about-arch-ring" />
        <div className="about-arch-ring about-arch-ring-2" />
        
        {/* Orbital shapes placed cleanly in the space between Ring 1 and Ring 2 */}
        <div className="about-orb-shape about-orb-cube-1" />
        <div className="about-orb-shape about-orb-dot-1" />
        <div className="about-orb-shape about-orb-cube-2" />
        <div className="about-orb-shape about-orb-dot-2" />

        <div className="bg-grid" />
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-particle" style={{ "--i": i + 4 }} />
        ))}
      </div>

      {/* ── LAYER 3: CENTER 3D CHARACTER STANDING ON PLATFORM IN MIDDLE OF SCREEN ── */}
      <motion.div
        className="about-char-wrap"
        initial={{ opacity: 0, scale: 0.93 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: isReducedMotion ? 0.01 : 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          pointerEvents: "none"
        }}
      >
        {/* Subtle contact shadow beneath about character */}
        <div
          className="about-char-contact-shadow"
          style={{
            position: "absolute",
            bottom: "4%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "14px",
            background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
        <img
          src={media.about.character}
          alt="Surajit Mondal"
          className={`char-img ${isReducedMotion ? "" : "char-float"}`}
          draggable="false"
          style={{
            position: "relative",
            zIndex: 2,
            transform: isReducedMotion ? "none" : `translate(${mousePos.x * -26}px, ${mousePos.y * -18}px) rotate(${mousePos.x * 4}deg)`,
            transition: "transform 0.1s ease-out"
          }}
        />
      </motion.div>

      <div className="scene-layout two-col">
        {/* ── LAYER 4 & 5: LEFT EDITORIAL CONTENT ── */}
        <motion.div
          className="scene-col-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isReducedMotion ? 0.01 : 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tracker-inline">
            <span className="tracker-n">02</span>
            <span className="tracker-label">ABOUT ME</span>
          </div>

          <h2 className="scene-heading">
            More Than<br />
            A <span className="h-red">Developer.</span>
          </h2>

          <p className="scene-body">
            I'm Surajit Mondal, a passionate developer who loves turning ideas into
            interactive experiences. I blend creativity, technology and design to
            build digital products that make an impact.
          </p>

          <a href="#projects" className="btn-red">
            Know More <span className="btn-arrow">↗</span>
          </a>
        </motion.div>

        {/* ── LAYER 3: RIGHT VISUAL SCENE (SCRIPT & ACCENTS) ── */}
        <div className="scene-col-right about-visual">
          {/* Handwritten script */}
          <div className="scene-script about-script">
            Same Person<br />
            <span>Different Dreams</span>
          </div>
        </div>
      </div>
    </section>
  );
}

