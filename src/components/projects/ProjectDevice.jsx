import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageViewer from "./ImageViewer";

export default function ProjectDevice({ type = "phone", src }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const containerClasses = {
    phone: "device-phone",
    tablet: "device-tablet",
    desktop: "device-desktop"
  };

  return (
    <>
      <motion.div 
        className={`device-mockup ${containerClasses[type] || "device-phone"} ${src ? 'has-image' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => src && setIsViewerOpen(true)}
      >
        <div className="device-screen">
          {src ? (
            <img src={src} alt="Project Mockup" className="device-media" loading="lazy" decoding="async" />
          ) : (
            <div className="device-placeholder">
              <span className="placeholder-text">MEDIA PENDING</span>
            </div>
          )}
        </div>
      </motion.div>

      <ImageViewer 
        src={src} 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
      />
    </>
  );
}
