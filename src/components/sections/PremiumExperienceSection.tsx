"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Zap, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: Crown,
    title: "Luxury",
    subtitle: "Ultimate Refinement",
    description:
      "모든 디테일에서 느껴지는 최고급 소재와 장인 정신. S.W CAR의 럭셔리는 눈에 보이는 것 그 이상을 선사합니다.",
  },
  {
    Icon: Zap,
    title: "Performance",
    subtitle: "Exceptional Power",
    description:
      "첨단 엔지니어링이 만들어내는 압도적인 퍼포먼스. 도로 위에서 느끼는 순수한 주행의 쾌감과 전율.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    subtitle: "Future Technology",
    description:
      "미래를 향한 끊임없는 혁신. 최신 기술과 지속 가능한 미래를 위한 S.W CAR만의 비전을 담았습니다.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
  },
};

export default function PremiumExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-5">
            The S.W Experience
          </p>
          <h2
            className="font-playfair font-light text-white tracking-wide"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Premium Experience
          </h2>
          <div className="w-14 h-px bg-white/25 mx-auto mt-8" />
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map(({ Icon, title, subtitle, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group text-center p-9 lg:p-12 border border-white/5 hover:border-white/18 transition-all duration-500 bg-black/40"
            >
              {/* Icon circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 border border-white/18 mb-8 group-hover:border-white/50 transition-colors duration-500">
                <Icon
                  className="text-white/50 group-hover:text-white/90 transition-colors duration-500"
                  size={26}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3
                className="font-playfair text-white font-light tracking-wider mb-2"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}
              >
                {title}
              </h3>

              {/* Subtitle */}
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-6">
                {subtitle}
              </p>

              {/* Animated divider */}
              <div className="w-7 h-px bg-white/15 mx-auto mb-6 group-hover:w-16 group-hover:bg-white/35 transition-all duration-500" />

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
