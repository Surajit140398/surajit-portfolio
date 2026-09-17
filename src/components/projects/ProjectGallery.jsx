import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageViewer from "./ImageViewer";

export default function ProjectGallery({ screens = [], type = "phone" }) {
  const [selectedImg, setSelectedImg] = useState(null);

  // We'll prepare empty slots if no screens are provided yet.
  const displayScreens = screens.length > 0 ? screens : Array(6).fill(null);

  return (
    <>
      <div className="project-gallery">
        {displayScreens.map((src, idx) => (
          <motion.div 
            key={idx} 
            className={`gallery-item gallery-${type} ${src ? 'has-image' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => src && setSelectedImg(src)}
          >
            {src ? (
              <>
                <img src={src} alt={`Screen ${idx + 1}`} loading="lazy" decoding="async" />
                <div className="gallery-hover-overlay">
                  <span>VIEW</span>
                </div>
              </>
            ) : (
              <div className="gallery-placeholder">
                <span>MEDIA PENDING</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <ImageViewer 
        src={selectedImg} 
        isOpen={!!selectedImg} 
        onClose={() => setSelectedImg(null)} 
      />
    </>
  );
}
