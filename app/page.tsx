"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import Marquee from "@/components/marquee";

export default function HomePage() {
  useEffect(() => {
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };
    smoothScroll();
  }, []);

  return (
    <main
      data-scroll-container
      className="min-h-screen bg-background overflow-hidden"
    >
      <Header />

      <motion.div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      <div data-scroll data-scroll-section data-scroll-speed="-.07">
        <Marquee />
      </div>

      <motion.div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.35"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.02"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>

      <motion.div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.05"
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
