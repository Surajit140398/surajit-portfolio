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
    
    // We can use a loading toast
    const toastId = toast.loading('Sending message...');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/surajit140398@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New Message from Portfolio!"
        })
      });

      if (response.ok) {
        toast.success('Message sent successfully!', { id: toastId });
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          onClose();
        }, 3000);
      } else {
        throw new Error('Response not ok');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(5px)", zIndex: 9999 }}
          />
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000, pointerEvents: "none" }}>
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              style={{ pointerEvents: "auto", width: "90%", maxWidth: "500px", maxHeight: "90vh", overflowY: "auto", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "40px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", position: "relative" }}
            >
              <button onClick={onClose} style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "20px" }}>✕</button>
            
            <h2 style={{ fontSize: "32px", marginBottom: "10px", letterSpacing: "-1px" }}>Let's talk.</h2>
            <p style={{ color: "var(--muted)", marginBottom: "30px", fontSize: "14px" }}>Fill out the form below and I'll get back to you shortly.</p>

            {isSuccess ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: "40px 0", textAlign: "center", color: "var(--accent)" }}>
                <h3>Message Sent!</h3>
                <p style={{ color: "var(--text)" }}>Thank you for reaching out.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: "100%", padding: "15px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "10px", color: "var(--text)", outline: "none", boxSizing: "border-box" }} />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: "100%", padding: "15px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "10px", color: "var(--text)", outline: "none", boxSizing: "border-box" }} />
                </div>
                <div>
                  <input type="tel" placeholder="Mobile No" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: "100%", padding: "15px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "10px", color: "var(--text)", outline: "none", boxSizing: "border-box" }} />
                </div>
                <div>
                  <textarea placeholder="Tell me about your project..." required rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ width: "100%", padding: "15px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "10px", color: "var(--text)", outline: "none", resize: "none", boxSizing: "border-box" }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ padding: "15px", background: "var(--text)", color: "var(--bg)", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer", transition: "opacity 0.3s", marginTop: "10px" }}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
