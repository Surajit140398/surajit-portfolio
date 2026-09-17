import React, { useState } from "react";
import RevealText from "./RevealText";
import ContactModal from "./ContactModal";
import { profileData } from "../data/profile";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="contact-section section" style={{ minHeight: "80vh" }}>
        <RevealText elementType="div">
          <p className="section-label reveal-target">04 — CONTACT</p>
          <h2 className="reveal-target">
            Have an idea?<br />
            <span>Let's build it.</span>
          </h2>
          
          <div className="reveal-target" style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "40px" }}>
            <button onClick={() => setIsModalOpen(true)} className="contact-button" style={{ cursor: "pointer", border: "none", fontFamily: "inherit" }}>
              Send a Message ↗
            </button>
            <a href="tel:+919547086921" className="contact-button" style={{ background: "transparent", color: "var(--text)" }}>
              +91 95470 86921 ↗
            </a>
          </div>
          
          <div className="reveal-target" style={{ marginTop: "60px" }}>
            <p style={{ fontSize: "12px", letterSpacing: "4px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "20px" }}>
              Connect with me
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", textDecoration: "none", fontSize: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "5px" }}>
                LinkedIn ↗
              </a>
              <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", textDecoration: "none", fontSize: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "5px" }}>
                GitHub ↗
              </a>
            </div>
          </div>
        </RevealText>
      </section>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
