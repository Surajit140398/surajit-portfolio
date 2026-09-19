import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import { media } from "../data/media";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
  })
};

const PROJECTS = [
  {
    num: "01",
    title: "Ostaagaar",
    sub: "B2B Wholesale Marketplace",
    stack: "Flutter · Firebase · Dart",
    img: "/images/project/ostaagar/manufacturer-app/dashboard.jpeg",
    link: "/projects/ostaagaar",
    tag: "Mobile Ecosystem"
  },
  {
    num: "02",
    title: "Ambition Aqua Biotech",
    sub: "Website & Digital Experience",
    stack: "React · CSS · JavaScript",
    img: "/images/project/ambition-aqua-biotech/home.png",
    link: "/projects/ambition-aqua-biotech",
    tag: "Web Platform"
  },
  {
    num: "03",
    title: "Ostaagaar Web",
    sub: "B2B Platform Website",
    stack: "React · Firebase",
    img: "/images/project/ostaagar/website/home.png",
    link: "/projects/ostaagaar",
    tag: "Web Design"
  }
];

export default function Projects() {
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
    <section className="scene scene-projects" id="projects">
      {/* ── LAYER 1 & 2: WORK BACKGROUND IMAGE & ATMOSPHERIC DEPTH ── */}
      <div
        className="scene-bg projects-bg"
        style={{
          transform: isReducedMotion ? "none" : `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px) scale(1.03)`,
          transition: "transform 0.15s ease-out"
        }}
      >
        {/* Primary Cloudinary Work Background Image */}
        <img
          src={media.work.backgroundImage}
          alt=""
          aria-hidden="true"
          className="work-cloudinary-bg"
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

        <div className="projects-floor-ring" />
        <div className="bg-grid" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-particle" style={{ "--i": i + 2 }} />
        ))}
      </div>

      <div className="scene-layout projects-master-layout">
        {/* ── LAYER 4 & 5: LEFT COL - HEADING & PROJECT CARDS LIST ── */}
        <div className="projects-left-col">
          <motion.div
            className="projects-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isReducedMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tracker-inline">
              <span className="tracker-n">03</span>
              <span className="tracker-label">FEATURED WORK</span>
            </div>

            <h2 className="scene-heading">
              Projects<br />
              That <span className="h-red">Speak</span>
            </h2>
          </motion.div>

          {/* Project rows */}
          <div className="project-list">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.num}
                className="project-row"
                custom={i}
                variants={isReducedMotion ? {} : cardVariants}
                initial={isReducedMotion ? false : "hidden"}
                whileInView={isReducedMotion ? undefined : "show"}
                viewport={{ once: true }}
                whileHover={isReducedMotion ? {} : { x: 6 }}
              >
                <Link to={p.link} className="project-row-inner">
                  <div className="project-row-img">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div className="project-row-info">
                    <div className="project-row-top">
                      <span className="project-row-num">{p.num}</span>
                      <span className="project-row-tag">{p.tag}</span>
                    </div>
                    <h3 className="project-row-title">{p.title}</h3>
                    <p className="project-row-stack">{p.stack}</p>
                  </div>
                  <span className="project-row-arrow">↗</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── LAYER 3: RIGHT COL - FLOATING ACCENTS ── */}
        <div className="projects-right-col">
          {/* Floating red cubes */}
          <div className="float-cube projects-cube-1" />
          <div className="float-cube projects-cube-2" />
        </div>
      </div>

      {/* ── CHARACTER CENTERED ON SCREEN ── */}
      <motion.div
        className="projects-char-wrap"
        initial={{ opacity: 0, scale: 0.93 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: isReducedMotion ? 0.01 : 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          pointerEvents: "none"
        }}
      >
        {/* Contact shadow beneath work character */}
        <div
          className="work-char-contact-shadow"
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
          src={media.work.character}
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

