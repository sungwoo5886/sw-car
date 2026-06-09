"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactInfo = [
  { Icon: MapPin, label: "Location", value: "Seoul, South Korea" },
  { Icon: Phone, label: "Phone", value: "+82 02-1234-5678" },
  { Icon: Mail, label: "Email", value: "contact@swcar.kr" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputBase =
    "w-full bg-transparent border border-white/18 text-white text-sm placeholder-white/25 px-5 py-4 tracking-wider focus:outline-none focus:border-white/50 transition-colors duration-300 appearance-none";

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-36 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-5">
            Get in Touch
          </p>
          <h2
            className="font-playfair font-light text-white tracking-wide"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Contact Us
          </h2>
          <div className="w-14 h-px bg-white/25 mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 max-w-5xl mx-auto">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-xl text-white font-light tracking-wider mb-4">
                Visit Us
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                S.W CAR의 프리미엄 쇼룸에서 직접 경험해보세요.
                전문 컨설턴트가 최고의 서비스를 제공합니다.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="text-white/35" size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-1">
                      {label}
                    </p>
                    <p className="text-white/60 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-16 text-center border border-white/10"
              >
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-6">
                  <Send className="text-white/60" size={20} />
                </div>
                <h4 className="font-playfair text-xl text-white font-light tracking-wider mb-3">
                  Thank You
                </h4>
                <p className="text-white/40 text-sm">
                  문의가 접수되었습니다. 곧 연락드리겠습니다.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={inputBase}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={inputBase}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className={inputBase}
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className={`${inputBase} resize-none`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full border border-white text-white text-[11px] tracking-[0.28em] uppercase py-4 hover:bg-white hover:text-black transition-all duration-350 flex items-center justify-center gap-3"
                >
                  <Send size={13} />
                  Send Inquiry
                </motion.button>

                <p className="text-white/20 text-[10px] text-center tracking-wider">
                  빠른 시일 내에 답변 드리겠습니다
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
