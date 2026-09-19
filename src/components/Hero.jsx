import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { media } from "../data/media";

export default function Hero() {
    const stageRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };

        const checkMotion = () => {
            const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setIsReducedMotion(motionQuery.matches);
        };

        checkMotion();
        window.addEventListener("resize", checkMotion, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("resize", checkMotion);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
    };

    return (
        <section className="scene scene-hero" id="hero" ref={stageRef}>
            {/* ── LAYER 1 & 2: CLOUDINARY CINEMATIC BACKGROUND & ATMOSPHERIC DEPTH ── */}
            <div
                className="scene-bg"
                style={{
                    transform: isReducedMotion ? "none" : `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px) scale(1.03)`
                }}
            >
                {/* Primary Cloudinary Hero Background Image */}
                <img
                    src={media.hero.backgroundImage}
                    alt=""
                    aria-hidden="true"
                    className="hero-cloudinary-bg"
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

                <div className="bg-ambient-glow" />
                <div className="bg-grid" />

                {/* Soft atmospheric cloud fog floating at bottom corners */}
                <div className="hero-fog hero-fog-left" />
                <div className="hero-fog hero-fog-right" />

                {/* Floating particles */}
                {[...Array(14)].map((_, i) => (
                    <div key={i} className="bg-particle" style={{ "--i": i }} />
                ))}
            </div>

            {/* ── MIDGROUND: HUDS, ROCK TEXT & NEON ACCENTS ── */}
            <div
                className="scene-mid"
                style={{
                    transform: isReducedMotion ? "none" : `translate(${mousePos.x * -12}px, ${mousePos.y * -8}px)`
                }}
            >
                {/* Subtle glowing floor rings behind/under rock */}
                <div className="neon-rings-group">
                    <div className="neon-ring ring-1" />
                    <div className="neon-ring ring-2" />
                    <div className="neon-ring-glow" />
                </div>

                {/* 3D Carved Text on Rock Face */}
                <div className="rock-text-overlay">
                    <span>CREATE</span>
                    <span>DEVELOP</span>
                    <span>INNOVATE</span>
                </div>

                {/* HUD glass panel: IDEAS TO IMPACT */}
                <div className="hud-panel hud-ideas">
                    <div className="hud-inner">
                        <span className="hud-line">IDEAS</span>
                        <span className="hud-line">TO</span>
                        <span className="hud-line hud-big">IMPACT</span>
                    </div>
                </div>

                {/* HUD code badge: </> */}
                <div className="hud-panel hud-code">
                    <span className="hud-code-sym">&lt;/&gt;</span>
                </div>
            </div>

            {/* ── LAYER 3: FOREGROUND TRANSPARENT CHARACTER ── */}
            <div
                className="scene-char"
                style={{
                    transform: isReducedMotion ? "none" : `translate(${mousePos.x * -24}px, ${mousePos.y * -16}px)`
                }}
            >
                {/* Subtle realistic contact shadow beneath character */}
                <div
                    className="char-contact-shadow"
                    style={{
                        position: "absolute",
                        bottom: "8%",
                        width: "65%",
                        height: "18px",
                        background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                        borderRadius: "50%",
                        zIndex: 1,
                        pointerEvents: "none"
                    }}
                />
                <img
                    src={media.hero.character}
                    alt="Surajit Mondal 3D Character"
                    className="char-img char-float"
                    draggable="false"
                    style={{
                        position: "relative",
                        zIndex: 2,
                        maxHeight: "80vh",
                        objectFit: "contain"
                    }}
                />
            </div>

            {/* ── LAYER 4 & 5: TYPOGRAPHY & CONTENT LAYER ── */}
            <div className="scene-text">
                {/* Far left tracker 01 */}
                <div className="section-tracker" aria-hidden="true">
                    <span className="tracker-n">01</span>
                    <div className="tracker-dots">
                        <span /><span /><span className="dot-colon">:</span><span /><span />
                    </div>
                </div>

                {/* Left editorial content block */}
                <motion.div
                    className="hero-content"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div className="hero-eyebrow" variants={item}>
                        <span className="eyebrow-pip" />
                        <span>CREATIVE DEVELOPER</span>
                    </motion.div>

                    <motion.h1 className="hero-heading" variants={item}>
                        <span className="h-black">SURAJIT</span>
                        <span className="h-red">MONDAL.</span>
                    </motion.h1>

                    <motion.p className="hero-sub" variants={item}>
                        Building digital experiences that feel real.
                    </motion.p>

                    <motion.div className="hero-actions" variants={item}>
                        <a href="#projects" className="btn-red">
                            View My Work <span className="btn-arrow">↗</span>
                        </a>
                        <span className="hero-sig">Surajit</span>
                    </motion.div>

                    <motion.div className="hero-stats" variants={item}>
                        <div className="stat">
                            <span className="stat-val">3+</span>
                            <span className="stat-lbl">Years Experience</span>
                        </div>
                        <div className="stat-div" />
                        <div className="stat">
                            <span className="stat-val">20+</span>
                            <span className="stat-lbl">Projects Completed</span>
                        </div>
                        <div className="stat-div" />
                        <div className="stat">
                            <span className="stat-val">∞</span>
                            <span className="stat-lbl">Ideas in Progress</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}



