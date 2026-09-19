import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { media } from "../data/media";

const TECH = [
  { icon: "⚛", name: "React", cls: "t-react" },
  { icon: "N", name: "Node", cls: "t-node" },
  { icon: "🔥", name: "Firebase", cls: "t-firebase" },
  { icon: "A", name: "Angular", cls: "t-angular" },
  { icon: "JS", name: "JavaScript", cls: "t-js" },
  { icon: "TS", name: "TypeScript", cls: "t-ts" },
  { icon: "◆", name: "Flutter", cls: "t-flutter" },
  { icon: "≋", name: "Tailwind", cls: "t-tailwind" },
];

export default function Tools() {
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
    <section className="scene scene-tools" id="tools">
      {/* ── LAYER 1 & 2: SKILLS BACKGROUND IMAGE & ATMOSPHERIC DEPTH ── */}
      <div
        className="scene-bg tools-bg"
        style={{
          transform: isReducedMotion ? "none" : `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px) scale(1.03)`,
          transition: "transform 0.15s ease-out"
        }}
      >
        {/* Primary Cloudinary Skills Background Image */}
        <img
          src={media.skills.backgroundImage}
          alt=""
          aria-hidden="true"
          className="skills-cloudinary-bg"
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

        <div className="tools-floor-ring" />
        <div className="bg-grid" />
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-particle" style={{ "--i": i + 1 }} />
        ))}
      </div>

      {/* Full-width centered layout: heading LEFT, character RIGHT, tiles below heading */}
      <div className="scene-layout tools-master-layout">
        {/* ── LAYER 4 & 5: LEFT COL - HEADING & TECH TILES ── */}
        <div className="tools-left-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isReducedMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tracker-inline">
              <span className="tracker-n">04</span>
              <span className="tracker-label">SKILLS &amp; TOOLS</span>
            </div>

            <h2 className="scene-heading">
              Tools<br />
              I Turn Into<br />
              <span className="h-red">Possibilities</span>
            </h2>
          </motion.div>

          {/* ── Tech icon grid — 4 columns × 2 rows ── */}
          <motion.div
            className="tech-icon-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isReducedMotion ? 0.01 : 0.7, delay: isReducedMotion ? 0 : 0.25 }}
          >
            {TECH.map((t, i) => (
              <motion.div
                key={t.name}
                className={`tech-icon-tile ${t.cls}`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: isReducedMotion ? 0.01 : 0.4, delay: isReducedMotion ? 0 : 0.08 * i }}
                whileHover={isReducedMotion ? {} : { y: -6, scale: 1.08 }}
              >
                <span className="tech-icon-sym">{t.icon}</span>
                <span className="tech-icon-name">{t.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── LAYER 3: RIGHT COL - FLOATING ACCENTS & SCRIPT ── */}
        <div className="tools-right-col">
          {/* Floating cubes */}
          <div className="float-cube tools-cube-1" />
          <div className="float-cube tools-cube-2" />

          {/* Handwritten script */}
          <div className="scene-script tools-script">
            Always<br />
            <span>Learning</span><br />
            Always<br />
            <span>Building</span>
          </div>
        </div>
      </div>

      {/* ── CHARACTER CENTERED ON SCREEN ── */}
      <motion.div
        className="tools-char-wrap"
        initial={{ opacity: 0, scale: 0.93 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: isReducedMotion ? 0.01 : 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          pointerEvents: "none"
        }}
      >
        {/* Contact shadow beneath skills character */}
        <div
          className="skills-char-contact-shadow"
          style={{
            position: "absolute",
            bottom: "4%",
            left: "15%",
            width: "70%",
            height: "16px",
            background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 70%)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
        <img
          src={media.skills.character}
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
    </section>
  );
}

