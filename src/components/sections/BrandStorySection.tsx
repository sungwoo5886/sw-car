"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function BrandStorySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="brand" ref={ref} className="py-24 lg:py-36 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-7">
              Our Story
            </p>
            <h2 className="font-playfair font-light text-white tracking-wide leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              ABOUT<br />
              <em>S.W CAR</em>
            </h2>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "3.5rem" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-white/35 mb-10"
            />

            <div className="space-y-5 text-white/50 leading-relaxed">
              <p className="text-lg text-white/65">
                S.W CAR는 단순히 자동차를 판매하는 브랜드가 아닙니다.
              </p>
              <p className="text-sm">
                우리는 혁신적인 기술과 감성적인 디자인을 통해 새로운 자동차 문화를 만들어 갑니다.
                모든 차량은 최고의 장인 정신으로 제작되며, 고객에게 잊을 수 없는 드라이빙 경험을 선사합니다.
              </p>
              <p className="text-sm">
                대표 성우의 철학 아래 고객에게 최고의 품질과 품격을 제공합니다.
                S.W CAR와 함께하는 모든 순간이 특별한 경험이 되도록 노력합니다.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="#vehicles"
                className="inline-flex items-center gap-3 text-white/70 text-[11px] tracking-[0.25em] uppercase border-b border-white/20 pb-1 hover:text-white hover:border-white/60 transition-all duration-300 group"
              >
                Discover Our Vehicles
                <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=85"
                alt="S.W CAR interior luxury"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Decorative offset border */}
            <div className="absolute -bottom-5 -right-5 w-[70%] h-[70%] border border-white/8 -z-10 pointer-events-none" />

            {/* Small accent badge */}
            <div className="absolute -left-6 top-1/4 bg-black border border-white/10 px-5 py-4 hidden lg:block">
              <p className="text-white text-lg font-playfair font-light">20+</p>
              <p className="text-white/35 text-[9px] tracking-[0.2em] uppercase mt-0.5">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
