"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo } from "@/data/content";
import { FiMail, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSent(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0]">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p className="text-[#888888] text-lg leading-relaxed">
              Whether you have an opportunity to discuss, a project in mind, 
              or just want to connect — my inbox is always open.
            </p>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-[#141414] border border-[#2a2a2a] rounded-xl hover:border-[#3b82f6] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors duration-300">
                  <FiMail className="text-[#3b82f6]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#888888] mb-0.5">Email</p>
                  <p className="text-[#f0f0f0] text-sm font-medium">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#141414] border border-[#2a2a2a] rounded-xl hover:border-[#3b82f6] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors duration-300">
                  <FiLinkedin className="text-[#3b82f6]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#888888] mb-0.5">LinkedIn</p>
                  <p className="text-[#f0f0f0] text-sm font-medium">
                    {personalInfo.linkedin.replace("https://", "")}
                  </p>
                </div>
              </a>
            </div>

            {/* Availability */}
            {personalInfo.availableForWork && (
              <div className="flex items-center gap-3 p-4 bg-emerald-400/5 border border-emerald-400/20 rounded-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-emerald-400 text-sm">
                  Currently available for new opportunities
                </p>
              </div>
            )}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 p-8 bg-[#141414] border border-[#2a2a2a] rounded-xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                  <FiSend className="text-[#3b82f6]" size={28} />
                </div>
                <h3 className="text-[#f0f0f0] font-bold text-xl">
                  Message Sent!
                </h3>
                <p className="text-[#888888] text-sm">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#3b82f6] text-sm hover:underline mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#888888] text-xs tracking-wider uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[#f0f0f0] text-sm placeholder-[#444444] focus:outline-none focus:border-[#3b82f6] transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#888888] text-xs tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[#f0f0f0] text-sm placeholder-[#444444] focus:outline-none focus:border-[#3b82f6] transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#888888] text-xs tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="What would you like to discuss?"
                    rows={5}
                    className="bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[#f0f0f0] text-sm placeholder-[#444444] focus:outline-none focus:border-[#3b82f6] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try emailing directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 mt-2"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-32 pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-[#888888] text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-[#888888] text-sm">
          Built with Next.js & Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
}