import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "./RevealText";
import { toolsData } from "../data/tools";

gsap.registerPlugin(ScrollTrigger);

export default function Tools() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".tool-item");
      gsap.fromTo(items, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderToolCategory = (title, tools) => (
    <div className="tool-category">
      <h3 className="tool-category-title">{title}</h3>
      <div className="tool-grid">
        {tools.map((tool, index) => (
          <motion.div 
            key={index}
            className="tool-item"
            whileHover={{ y: -5, backgroundColor: "rgba(124, 58, 237, 0.05)", borderColor: "rgba(124, 58, 237, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="tool-info">
              <h4>{tool.name}</h4>
              <p>{tool.description}</p>
            </div>
            <div className="tool-accent" />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tools" className="section tools-section" ref={containerRef}>
      <RevealText elementType="div">
        <p className="section-label reveal-target">03 — TOOLS</p>
        <h2 className="reveal-target">Tools<br/><span>I Use.</span></h2>
      </RevealText>

      <div className="tools-content">
        {renderToolCategory("APP DEVELOPMENT", toolsData.appDevelopment)}
        {renderToolCategory("WEB DEVELOPMENT", toolsData.webDevelopment)}
        {renderToolCategory("DEVELOPMENT WORKFLOW", toolsData.workflow)}
      </div>
    </section>
  );
}
