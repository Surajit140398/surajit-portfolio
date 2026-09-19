import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillSet = [
    "Flutter", "Dart", "React 19", "Three.js", "React Three Fiber", 
    "GSAP Motion", "Node.js", "Firebase", "Android SDK", "REST APIs", 
    "System Design", "UI/UX Prototyping"
  ];

  return (
    <section className="skills-ticker-section" aria-label="Core competencies list">
      <div className="skills-ticker-track">
        <motion.div
          className="skills-ticker-inner"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Double items for seamless infinite loop */}
          {[...skillSet, ...skillSet].map((skill, idx) => (
            <span key={idx} className="skills-ticker-item">
              <span className="ticker-dot" />
              <span className="ticker-text">{skill}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
