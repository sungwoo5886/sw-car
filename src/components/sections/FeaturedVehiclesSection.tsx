"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const vehicles = [
  {
    name: "SW Phantom",
    tag: "Grand Sedan",
    description:
      "최고급 세단의 새로운 기준. 완벽한 정적과 역동성의 조화 속에서 탄생한 플래그십 모델.",
    price: "From ₩ 250,000,000",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=85",
  },
  {
    name: "SW Genesis",
    tag: "Sport Coupe",
    description:
      "미래를 향한 혁신. 첨단 기술과 감성적인 디자인이 만나 새로운 스포츠 쿠페의 역사를 씁니다.",
    price: "From ₩ 180,000,000",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=85",
  },
  {
    name: "SW Black Edition",
    tag: "Limited Edition",
    description:
      "한정판 블랙 에디션. 극도의 럭셔리와 희소성이 결합된 S.W CAR의 최고봉. 단 50대 한정 생산.",
    price: "From ₩ 350,000,000",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] },
  },
};

export default function FeaturedVehiclesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="vehicles" ref={ref} className="py-24 lg:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-5">
            Our Collection
          </p>
          <h2
            className="font-playfair font-light text-white tracking-wide"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Featured Vehicles
          </h2>
          <div className="w-14 h-px bg-white/25 mx-auto mt-8" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.name}
              variants={cardVariants}
              className="group relative bg-zinc-950 border border-white/5 hover:border-white/18 transition-all duration-600 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-800 group-hover:scale-108"
                  style={{ transitionTimingFunction: "cubic-bezier(0.19,1,0.22,1)" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/55 bg-black/70 backdrop-blur-sm border border-white/8 px-3 py-1.5">
                    {vehicle.tag}
                  </span>
                </div>

                {/* Hover tint */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <h3 className="font-playfair text-xl lg:text-2xl text-white font-light tracking-wider mb-3">
                  {vehicle.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {vehicle.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <p className="text-white/60 text-xs tracking-[0.12em] font-light">
                    {vehicle.price}
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full border border-white/20 text-white/60 text-[10px] tracking-[0.25em] uppercase py-3 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group-hover:border-white/40 group-hover:text-white/80"
                >
                  View Details
                </button>
              </div>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white/50 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-white/40 text-[11px] tracking-[0.25em] uppercase border-b border-white/15 pb-1 hover:text-white/70 hover:border-white/35 transition-all duration-300"
          >
            View All Vehicles &nbsp;→
          </a>
        </motion.div>
      </div>
    </section>
  );
}
