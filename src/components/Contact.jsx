import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import { media } from "../data/media";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
      <section className="scene scene-contact" id="contact">
        {/* ── LAYER 1 & 2: CONTACT BACKGROUND IMAGE & ATMOSPHERIC DEPTH ── */}
        <div
          className="scene-bg contact-bg"
          style={{
            transform: isReducedMotion ? "none" : `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px) scale(1.03)`,
            transition: "transform 0.15s ease-out"
          }}
        >
          {/* Primary Cloudinary Contact Background Image */}
          <img
            src={media.contact.backgroundImage}
            alt=""
            aria-hidden="true"
            className="contact-cloudinary-bg"
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

          <div className="contact-rim-light" />
          <div className="bg-grid" />
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-particle" style={{ "--i": i + 2 }} />
          ))}
        </div>

        <div className="scene-layout two-col contact-layout">
          {/* ── LAYER 4 & 5: LEFT EDITORIAL CONTENT & CTA BUTTON ── */}
          <motion.div
            className="scene-col-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isReducedMotion ? 0.01 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tracker-inline">
              <span className="tracker-n">05</span>
              <span className="tracker-label">LET'S CONNECT</span>
            </div>

            <h2 className="scene-heading">
              Let's Build<br />
              Something<br />
              <span className="h-red">Amazing</span>
            </h2>

            <p className="scene-body">
              Have a project in mind or just want to say hi? I'm always open
              to new opportunities and interesting conversations.
            </p>

            <button
              className="btn-red"
              onClick={() => setIsModalOpen(true)}
              aria-haspopup="dialog"
            >
              Get In Touch <span className="btn-arrow">↗</span>
            </button>
          </motion.div>

          {/* ── LAYER 3: RIGHT VISUAL SCENE ── */}
          <div className="scene-col-right contact-visual">
            {/* Handwritten script */}
            <div className="scene-script contact-script">
              Good<br />
              <span>Ideas</span><br />
              Start<br />
              <span>Here</span>
            </div>
          </div>
        </div>

        {/* ── CHARACTER CENTERED ON SCREEN ── */}
        <motion.div
          className="contact-char-wrap"
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isReducedMotion ? 0.01 : 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            pointerEvents: "none"
          }}
        >
          {/* Contact shadow beneath contact character */}
          <div
            className="contact-char-contact-shadow"
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
            src={media.contact.character}
            alt="Surajit Mondal"
            className={`char-img ${isReducedMotion ? "" : "char-float-contact"}`}
            draggable="false"
            style={{
              position: "relative",
              zIndex: 2,
              pointerEvents: "none",
              transform: isReducedMotion ? "none" : `translate(${mousePos.x * -26}px, ${mousePos.y * -18}px) rotate(${mousePos.x * 4}deg)`,
              transition: "transform 0.1s ease-out"
            }}
          />
        </motion.div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

