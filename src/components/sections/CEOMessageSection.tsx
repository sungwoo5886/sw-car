"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

export default function CEOMessageSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-44 bg-black overflow-hidden"
    >
      {/* Subtle background texture lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-12"
        >
          Message from CEO
        </motion.p>

        {/* Quote icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center mb-10"
        >
          <Quote className="text-white/12" size={52} strokeWidth={1} />
        </motion.div>

        {/* Quote text */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="font-playfair font-light text-white/85 leading-relaxed italic mb-14"
          style={{ fontSize: "clamp(1.3rem, 3vw, 2.2rem)" }}
        >
          "S.W CAR는 고객에게 단순한 이동 수단이 아닌,
          <br className="hidden sm:block" />
          품격 있는 라이프스타일을 제공합니다."
        </motion.blockquote>

        {/* Animated divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "3.5rem" } : { width: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="h-px bg-white/25 mx-auto mb-8"
        />

        {/* CEO signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <p className="text-white text-sm tracking-[0.35em] uppercase mb-1.5 font-light">
            Sung Woo
          </p>
          <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase">
            Founder &amp; CEO, S.W CAR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
