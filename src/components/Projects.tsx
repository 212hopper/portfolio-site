"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#141414]">
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
            What I've Worked On
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0]">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 flex flex-col gap-4 hover:border-[#3b82f6] transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-[#3b82f6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="text-[#f0f0f0] font-bold text-lg mb-1 group-hover:text-[#3b82f6] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#3b82f6] text-xs font-medium tracking-wider uppercase">
                  {project.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-[#888888] text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}