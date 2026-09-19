import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tools", href: "#tools" },
    { name: "Contact", href: "#contact" }
  ];

  // Active section observer on scroll
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "tools", "contact"];
      let current = "Home";
      for (const section of sections) {
        const el = document.getElementById(section) || document.querySelector(`.${section}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1);
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Handle ESC to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigation = (e, name, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    } else {
      if (location.pathname === "/") {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="brand"
          onClick={(e) => handleNavigation(e, "Home", "/")}
          role="button"
          tabIndex={0}
          aria-label="Go to top"
          onKeyDown={(e) => e.key === "Enter" && handleNavigation(e, "Home", "/")}
        >
          <span className="brand-dot-lead">●</span>
          <span className="brand-text">SURAJIT</span>
        </div>

        <div className="nav-links-wrapper">
          <div className="nav-links" onMouseLeave={() => setHoveredLink(null)}>
            {[
              { name: "HOME", href: "/" },
              { name: "ABOUT", href: "#about" },
              { name: "WORK", href: "#projects" },
              { name: "SKILLS", href: "#tools" },
              { name: "CONTACT", href: "#contact" }
            ].map((link, idx, arr) => {
              const isActive = activeSection.toUpperCase() === link.name || (link.name === "WORK" && activeSection === "Projects") || (link.name === "SKILLS" && activeSection === "Tools");
              return (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.name, link.href)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    <span className="nav-link-text">{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="nav-active-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                  {idx < arr.length - 1 && <span className="nav-dot-sep">-</span>}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="nav-actions">
          <a
            href="#contact"
            className="nav-cta-pill"
            onClick={(e) => handleNavigation(e, "CONTACT", "#contact")}
          >
            <span>Let's Talk</span>
            <span className="nav-cta-arrow">↗</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="menu-btn-icon">{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.name, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                  className={`mobile-nav-link ${activeSection === link.name ? "active" : ""}`}
                >
                  <span className="mobile-link-index">0{index + 1}</span>
                  <span className="mobile-link-name">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <p className="mobile-footer-tag">SURAJIT MONDAL · 2026</p>
              <a href="mailto:surajit140398@gmail.com" className="mobile-contact-link">
                surajit140398@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
