"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100dvh", minHeight: "600px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85"
          alt="S.W CAR luxury vehicle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for dramatic studio feel */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto w-full">
        {/* Pre-title label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] tracking-[0.55em] uppercase text-white/45 mb-7"
        >
          Premium Automotive Brand · Est. 2006
        </motion.p>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="font-playfair font-light tracking-[0.18em] text-white leading-none mb-5"
          style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
        >
          S.W CAR
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="text-white/70 font-light tracking-[0.3em] uppercase mb-4"
          style={{ fontSize: "clamp(0.85rem, 2.2vw, 1.35rem)" }}
        >
          Luxury Beyond Driving
        </motion.p>

        {/* Korean subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="text-white/35 text-sm tracking-[0.12em] mb-14"
        >
          대표 성우가 만드는 프리미엄 자동차 브랜드
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#vehicles"
            className="group inline-flex items-center justify-center gap-2 border border-white text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-all duration-400"
          >
            Explore Vehicles
          </a>
          <a
            href="#brand"
            className="inline-flex items-center justify-center border border-white/30 text-white/65 text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:border-white/70 hover:text-white transition-all duration-400"
          >
            Discover Excellence
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[9px] tracking-[0.45em] uppercase text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-12 h-px bg-white/15 hidden lg:block" />
      <div className="absolute top-24 left-6 w-px h-12 bg-white/15 hidden lg:block" />
      <div className="absolute top-24 right-6 w-12 h-px bg-white/15 hidden lg:block" />
      <div className="absolute top-24 right-6 w-px h-12 bg-white/15 hidden lg:block" style={{ left: "unset", right: "1.5rem" }} />
    </section>
  );
}
