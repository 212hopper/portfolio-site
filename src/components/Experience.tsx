"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
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
            Where I've Been
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0]">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#2a2a2a] -translate-x-1/2" />

          {/* Experience Items */}
          <div className="flex flex-col gap-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-[#3b82f6] -translate-x-1/2 z-10 ring-4 ring-[#0a0a0a]" />

                {/* Even items — content left, empty right */}
                {index % 2 === 0 ? (
                  <>
                    <div className="pl-8 md:pl-0 md:pr-12">
                      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#3b82f6] transition-colors duration-300">
                        
                        {/* Current Badge */}
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-medium mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                            Current Role
                          </span>
                        )}

                        <h3 className="text-[#f0f0f0] font-bold text-lg mb-1">
                          {item.role}
                        </h3>
                        <p className="text-[#3b82f6] font-medium text-sm mb-1">
                          {item.company}
                        </p>
                        <p className="text-[#888888] text-xs mb-4 tracking-wider">
                          {item.period}
                        </p>
                        <p className="text-[#888888] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    {/* Odd items — empty left, content right */}
                    <div className="hidden md:block" />
                    <div className="pl-8 md:pl-12">
                      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#3b82f6] transition-colors duration-300">

                        {/* Current Badge */}
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-medium mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                            Current Role
                          </span>
                        )}

                        <h3 className="text-[#f0f0f0] font-bold text-lg mb-1">
                          {item.role}
                        </h3>
                        <p className="text-[#3b82f6] font-medium text-sm mb-1">
                          {item.company}
                        </p>
                        <p className="text-[#888888] text-xs mb-4 tracking-wider">
                          {item.period}
                        </p>
                        <p className="text-[#888888] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}