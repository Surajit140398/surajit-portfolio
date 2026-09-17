import React from "react";
import RevealText from "./RevealText";
import { profileData } from "../data/profile";

export default function Testimonials() {
  const { testimonials } = profileData;

  return (
    <section id="testimonials" className="section" style={{ position: "relative", zIndex: 2, background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <RevealText elementType="div">
        <p className="section-label reveal-target">07 — TESTIMONIALS</p>
        <h2 className="reveal-target" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "30px 0 60px", letterSpacing: "-2px" }}>
          Client<br />
          <span>Feedback.</span>
        </h2>
        
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {testimonials.map((test) => (
            <div key={test.id} className="testimonial-card reveal-target" style={{ padding: "40px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--border)" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "20px" }}>
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
              <p style={{ fontSize: "16px", color: "var(--text)", fontStyle: "italic", lineHeight: 1.6, marginBottom: "30px" }}>
                "{test.text}"
              </p>
              <div>
                {test.author && <h4 style={{ fontSize: "16px", margin: "0 0 5px 0" }}>{test.author}</h4>}
                <p style={{ fontSize: "12px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>{test.position}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealText>
    </section>
  );
}
