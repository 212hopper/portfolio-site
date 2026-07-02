"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/content";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "Live", label: "Production Specialist" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
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
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0]">
            The Person Behind The Kit
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Accent border behind image */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#3b82f6] to-transparent opacity-50 blur-sm" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#2a2a2a]">
                <Image
                  src="/images/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[#888888] text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-[#2a2a2a]">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-center"
                >
                  <p className="text-2xl font-bold text-[#3b82f6]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#888888] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#3b82f6]">▹</span>
                <span className="text-[#888888]">Based in</span>
                <span className="text-[#f0f0f0]">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#3b82f6]">▹</span>
                <span className="text-[#888888]">Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#f0f0f0] hover:text-[#3b82f6] transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#3b82f6]">▹</span>
                <span className="text-[#888888]">LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0f0f0] hover:text-[#3b82f6] transition-colors duration-200"
                >
                  {personalInfo.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>

            {/* Download CV Button */}
            <div>
              <a
                href="/files/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                Download CV
                <span>↓</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}