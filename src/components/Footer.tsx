"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#vehicles", label: "Vehicles" },
  { href: "#brand", label: "Brand" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="py-16 lg:py-20 grid md:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl text-white tracking-[0.35em] font-light mb-3">
              S.W CAR
            </h3>
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-6">
              Luxury Beyond Driving
            </p>
            <p className="text-white/25 text-xs leading-relaxed max-w-xs">
              대표 성우가 만드는 프리미엄 자동차 브랜드.
              최고의 품질과 품격으로 새로운 자동차 문화를 만들어 갑니다.
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-col gap-4 md:items-center"
            aria-label="Footer navigation"
          >
            <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-2">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white/80 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & Contact */}
          <div className="flex flex-col md:items-end">
            <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-6">
              Follow Us
            </p>
            <div className="flex gap-3 mb-8">
              {socialLinks.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
            <p className="text-white/25 text-xs tracking-wider">
              contact@swcar.kr
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs tracking-[0.15em]">
            © 2026 S.W CAR. All Rights Reserved.
          </p>
          <p className="text-white/15 text-xs tracking-[0.1em]">
            Crafted with passion by Sung Woo
          </p>
        </div>
      </div>
    </footer>
  );
}
