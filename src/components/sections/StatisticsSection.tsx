"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 10000,
    suffix: "+",
    label: "Satisfied Clients",
    description: "전 세계 만족 고객",
  },
  {
    value: 500,
    suffix: "+",
    label: "Premium Vehicles",
    description: "프리미엄 차량 보유",
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Excellence",
    description: "브랜드 탁월함의 역사",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  // Subscribe to motion value changes
  useEffect(() => {
    const unsubscribe = count.on("change", (v) => {
      const rounded = Math.round(v);
      if (value >= 1000) {
        setDisplay(`${Math.round(rounded / 1000)}K`);
      } else {
        setDisplay(rounded.toString());
      }
    });
    return unsubscribe;
  }, [count, value]);

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.4,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref}>
      <span className="font-playfair font-light text-white" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
        {display}
        <span className="text-white/30 ml-0.5">{suffix}</span>
      </span>
    </div>
  );
}

export default function StatisticsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-[#060606] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 lg:gap-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: i * 0.18 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="w-8 h-px bg-white/18 mx-auto my-4" />
              <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-1">
                {stat.label}
              </p>
              <p className="text-white/20 text-xs tracking-wide">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
