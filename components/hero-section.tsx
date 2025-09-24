"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full animate-float animation-delay-200 animate-morphing"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-float-reverse animation-delay-600 animate-pulse-glow"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-primary/20 rounded-full animate-float-reverse animation-delay-800"></div>
      <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-secondary/25 rounded-full animate-float animation-delay-1000 animate-morphing"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse animation-delay-200"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary/60 rounded-full animate-pulse animation-delay-600"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-accent/30 rounded-full animate-pulse animation-delay-1200"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/50 rounded-full animate-pulse animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-8 animate-scale-in animation-delay-200 hover-glow border border-secondary/30">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary cursor-default">
              Crafted with Excellence
            </span>
            <Star className="w-3 h-3 text-primary animate-pulse animation-delay-400" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-400">
            <motion.span
              className="block text-gradient overflow-hidden"
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Exceptional
            </motion.span>

            {/* 2. Design (Right → Left) */}
            <motion.span
              className="block text-secondary overflow-hidden"
              initial={{
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              }}
              animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            >
              Design
            </motion.span>

            {/* 3. Experience (Center → Outward) */}
            <motion.span
              className="block text-primary overflow-hidden"
              initial={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
            >
              Experience
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-600">
            Transform your vision into stunning reality with our premium design
            solutions. Where creativity meets craftsmanship in perfect harmony.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <Link href="/get-started">
              <Button
                size="lg"
                className="text-lg px-8 py-4 group  animate-pulse-glow cursor-pointer"
              >
                <Zap className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
             <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-transparent  border-secondary/50 hover:border-secondary cursor-pointer"
            >
              View Portfolio
            </Button>
            </Link>
          </div>

          <div className="flex justify-center gap-8 mt-16 animate-fade-in-up animation-delay-1000">
            <div className="text-center animate-scale-in animation-delay-1200">
              <div className="text-3xl font-bold text-primary animate-pulse">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center animate-scale-in animation-delay-1400">
              <div className="text-3xl font-bold text-secondary animate-pulse">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="text-center animate-scale-in animation-delay-1600">
              <div className="text-3xl font-bold text-accent animate-pulse">
                5★
              </div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center animate-pulse-glow">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
