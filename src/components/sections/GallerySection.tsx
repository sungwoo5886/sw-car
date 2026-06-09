"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=85",
    title: "SW Night Drive",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=85",
    title: "SW Phantom",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=85",
    title: "SW Genesis",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85",
    title: "SW Black Edition",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=85",
    title: "Interior Luxury",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=85",
    title: "SW Sport",
    aspect: "aspect-square",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="gallery" ref={ref} className="py-24 lg:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-5">
            Visual Stories
          </p>
          <h2
            className="font-playfair font-light text-white tracking-wide"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Gallery
          </h2>
          <div className="w-14 h-px bg-white/25 mx-auto mt-8" />
        </motion.div>

        {/* Masonry columns */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.09,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="break-inside-avoid mb-3 md:mb-4 relative overflow-hidden group cursor-pointer"
            >
              <div className={`relative ${item.aspect} overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ transitionTimingFunction: "cubic-bezier(0.19,1,0.22,1)" }}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex items-end p-4">
                  <p className="text-white text-[11px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 font-light">
                    {item.title}
                  </p>
                </div>

                {/* Corner accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-0 border-l-0 group-hover:border-t border-white/40 group-hover:w-8 group-hover:h-8 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
