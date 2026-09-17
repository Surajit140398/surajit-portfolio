import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navigation() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tools", href: "#tools" },
    { name: "Contact", href: "#contact" }
  ];

  // Active section tracking for Home page
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: location.pathname !== "/" ? "rgba(10, 10, 10, 0.9)" : undefined }}
      >
        <div className="brand" onClick={(e) => handleNavigation(e, "Home", "/")} style={{cursor: "pointer"}}>
          SM<span>.</span>
        </div>

        <div className="nav-links" onMouseLeave={() => setHoveredLink(null)}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavigation(e, link.name, link.href)}
              onMouseEnter={() => setHoveredLink(link.name)}
              style={{ position: "relative", color: activeSection === link.name ? "var(--text-h)" : undefined }}
            >
              {link.name}
              {(hoveredLink === link.name || activeSection === link.name) && (
                <motion.div
                  layoutId="nav-hover"
                  className="nav-hover-underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--text-h)"
                  }}
                />
              )}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button 
            onClick={toggleTheme} 
            style={{ background: "transparent", color: "var(--text)", display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="menu-button" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.name, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  style={{ color: activeSection === link.name ? "var(--accent)" : undefined }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
