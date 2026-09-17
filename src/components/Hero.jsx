import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";
import ParticlesBackground from "./ParticlesBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const visualsRef = useRef(null);

  useEffect(() => {
    // GSAP scroll animation removed to prevent disappearing image bug
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <ParticlesBackground />
      {/* Background Grid */}
      <div className="hero-grid-bg"></div>

      <div className="hero-layout">
        {/* LEFT COLUMN: CONTENT */}
        <div className="hero-col-left" ref={textRef}>
          <motion.p 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            PRODUCT • TECHNOLOGY • DESIGN
          </motion.p>

          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="title-line-1"
              style={{ display: "inline-block", marginBottom: "40px" }}
            >
              SURAJIT
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="title-line-2"
            >
              MONDAL
            </motion.span>
          </h1>
          
          <motion.div 
            className="title-accent-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Building digital products, experiences and ideas that<br/>
            connect technology with real-world problems.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "40px" }}
          >
            <Magnetic>
              <a href="#projects" className="primary-button-new">
                Explore Projects &rarr;
              </a>
            </Magnetic>

            <Magnetic>
              <a href="#contact" className="secondary-button-new">
                Let's Talk &rarr;
              </a>
            </Magnetic>
          </motion.div>

          {/* STATS SECTION */}
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stat-item">
              <span className="stat-number">03+</span>
              <span className="stat-label">PROJECTS</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">B2B</span>
              <span className="stat-label">FOCUS</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">POSSIBILITIES</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: VISUALS */}
        <motion.div 
          className="hero-col-right"
          ref={visualsRef}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-glow-purple"></div>
          
          <img 
            src="/images/profile/surajit mondal.png" 
            alt="Surajit Mondal" 
            className="hero-portrait image-hover-glitch" 
            loading="eager"
            decoding="async"
          />

          <div className="hero-decorations">
            <div className="decor-signature">
              Surajit<br/>Mondal
            </div>
            
            <div className="decor-list">
              <div className="decor-line-vert"></div>
              <ul>
                <li>IDEAS</li>
                <li>PRODUCTS</li>
                <li>PEOPLE</li>
                <li>IMPACT</li>
              </ul>
            </div>
            
            <div className="decor-bottom-right">
              <div className="decor-line-horiz"></div>
              <span>STAY CURIOUS<br/>KEEP BUILDING</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR (Bottom Left) */}
      <motion.div 
        className="scroll-indicator-new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="mouse-icon">
          <motion.div 
            className="mouse-wheel"
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
}
