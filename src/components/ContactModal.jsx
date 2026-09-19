import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Transmitting message...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/surajit140398@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New Direct Inquiry — Surajit Portfolio"
        })
      });

      if (response.ok) {
        toast.success("Message delivered successfully!", { id: toastId });
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          onClose();
        }, 2500);
      } else {
        throw new Error("Form submission error");
      }
    } catch (error) {
      console.error(error);
      toast.error("Transmission failed. Please try again or reach out directly.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <motion.div
            className="modal-backdrop-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="modal-positioner">
            <motion.div
              className="modal-card-editorial"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={onClose}
                className="modal-close-btn"
                aria-label="Close dialog"
              >
                ✕
              </button>

              <div className="modal-header">
                <span className="modal-badge">DIRECT INQUIRY</span>
                <h2 id="modal-title" className="modal-title">
                  Let's start a <span className="crimson-text">conversation.</span>
                </h2>
                <p className="modal-sub">
                  Fill out your project requirements and I will respond within 24 hours.
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="modal-success-box"
                >
                  <div className="success-icon">✓</div>
                  <h3>Transmission Received</h3>
                  <p>Thank you for reaching out. I'll review your details promptly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label htmlFor="inquiry-name" className="form-label">NAME *</label>
                    <input
                      id="inquiry-name"
                      type="text"
                      placeholder="Surajit Mondal"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label htmlFor="inquiry-email" className="form-label">EMAIL *</label>
                      <input
                        id="inquiry-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group flex-1">
                      <label htmlFor="inquiry-phone" className="form-label">PHONE / WHATSAPP</label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-msg" className="form-label">PROJECT SCOPE & TIMELINE *</label>
                    <textarea
                      id="inquiry-msg"
                      placeholder="Briefly describe your objectives, deliverables, and targets..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="modal-submit-btn"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                    <span className="btn-arrow">&rarr;</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
