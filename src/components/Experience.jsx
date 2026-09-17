import React from "react";
import RevealText from "./RevealText";
import { profileData } from "../data/profile";

export default function Experience() {
  const { experience } = profileData;

  return (
    <section id="experience" className="section" style={{ position: "relative", zIndex: 2, background: "var(--bg)" }}>
      <RevealText elementType="div">
        <p className="section-label reveal-target">05 — EXPERIENCE</p>
        <h2 className="reveal-target" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "30px 0 60px", letterSpacing: "-2px" }}>
          Career<br />
          <span>Timeline.</span>
        </h2>
        
        <div className="experience-timeline" style={{ borderLeft: "1px solid var(--border)", paddingLeft: "40px", marginLeft: "10px", display: "flex", flexDirection: "column", gap: "60px" }}>
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item reveal-target" style={{ position: "relative" }}>
              {/* Timeline Dot */}
              <div style={{ position: "absolute", left: "-45px", top: "5px", width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg)", boxSizing: "content-box" }}></div>
              
              <div className="exp-period" style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 700, letterSpacing: "2px", marginBottom: "15px" }}>
                {exp.period}
              </div>
              <h3 className="exp-role" style={{ fontSize: "28px", margin: "0 0 10px 0", lineHeight: 1.2 }}>{exp.role}</h3>
              <h4 className="exp-company" style={{ fontSize: "18px", color: "var(--muted)", margin: "0 0 20px 0", fontWeight: 400 }}>{exp.company}</h4>
              <p className="exp-description" style={{ fontSize: "16px", color: "var(--text)", marginBottom: "20px", maxWidth: "700px" }}>
                {exp.description}
              </p>
              
              <ul className="exp-tasks" style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", opacity: 0.8 }}>
                {exp.responsibilities.map((task, i) => (
                  <li key={i} style={{ position: "relative", paddingLeft: "20px", fontSize: "15px" }}>
                    <span style={{ position: "absolute", left: 0, top: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "var(--text)" }}></span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealText>
    </section>
  );
}
