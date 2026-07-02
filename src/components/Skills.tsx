"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#141414]">
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
            What I Know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0]">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#3b82f6] transition-colors duration-300 group"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                </div>
                <h3 className="text-[#f0f0f0] font-semibold text-sm">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: groupIndex * 0.1 + skillIndex * 0.05 + 0.2,
                    }}
                    className="flex items-center gap-2 text-sm text-[#888888] group-hover:text-[#f0f0f0] transition-colors duration-300"
                  >
                    <span className="text-[#3b82f6] text-xs">▹</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}