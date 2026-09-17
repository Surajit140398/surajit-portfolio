import RevealText from "./RevealText";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Flutter", "Dart", "React", "JavaScript", 
    "Three.js", "GSAP", "Git", "Android"
  ];

  return (
    <section id="skills" className="section">
      <RevealText elementType="div">
        <p className="section-label reveal-target">03 — TECHNOLOGY</p>
        <h2 className="reveal-target">
          Tools I use to<br />
          <span>build.</span>
        </h2>
      </RevealText>

      <div className="skills">
        {skills.map((skill, index) => (
          <motion.span 
            key={skill}
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
