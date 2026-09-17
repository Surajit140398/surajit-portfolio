import React from "react";
import RevealText from "./RevealText";
import { profileData } from "../data/profile";

export default function About() {
  const { about, education } = profileData;

  return (
    <section id="about" className="section" style={{ position: "relative", zIndex: 2, background: "var(--bg)" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "80px" }}>
        
        {/* ABOUT ME */}
        <div className="about-content">
          <RevealText elementType="div">
            <p className="section-label reveal-target">01 — ABOUT</p>
            <h2 className="reveal-target" style={{ fontSize: "clamp(40px, 7vw, 100px)", margin: "30px 0 50px", letterSpacing: "-3px" }}>
              {about.title.split(' ').slice(0, 3).join(' ')}<br />
              <span>{about.title.split(' ').slice(3).join(' ')}</span>
            </h2>
            <p className="section-text reveal-target">
              {about.description}
            </p>
            <p className="section-text reveal-target" style={{ marginTop: "30px", color: "var(--accent)", fontWeight: 500 }}>
              {about.vision}
            </p>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
