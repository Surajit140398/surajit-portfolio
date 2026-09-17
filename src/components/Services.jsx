import React from "react";
import RevealText from "./RevealText";
import { profileData } from "../data/profile";

export default function Services() {
  const { services } = profileData;

  return (
    <section id="services" className="section" style={{ position: "relative", zIndex: 2, background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <RevealText elementType="div">
        <p className="section-label reveal-target">06 — SERVICES</p>
        <h2 className="reveal-target" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "30px 0 60px", letterSpacing: "-2px" }}>
          What I<br />
          <span>Do.</span>
        </h2>
        
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {services.map((service) => (
            <div key={service.id} className="service-card reveal-target" style={{ padding: "40px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", transition: "transform 0.3s ease, background 0.3s ease" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)", marginBottom: "20px" }}>{service.id}</div>
              <h3 style={{ fontSize: "24px", marginBottom: "15px", lineHeight: 1.2 }}>{service.title}</h3>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "var(--muted)", marginBottom: "20px", textTransform: "uppercase" }}>{service.tech}</div>
              <p style={{ fontSize: "15px", color: "var(--text)", opacity: 0.8, lineHeight: 1.6, margin: 0 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </RevealText>
    </section>
  );
}
