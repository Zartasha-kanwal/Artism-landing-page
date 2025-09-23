"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-10 right-20 w-40 h-40 bg-secondary/10 rounded-full animate-float animation-delay-200 animate-morphing"></div>
      <div className="absolute bottom-20 left-10 w-28 h-28 bg-primary/15 rounded-full animate-float-reverse animation-delay-600"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-accent/10 rounded-full animate-pulse animation-delay-800"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="inline-flex items-center gap-2 mb-6 animate-scale-in">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
              Crafting Digital
              <br />
              <span className="text-gradient">Masterpieces</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              With over a decade of experience in design and development, we've helped hundreds of brands tell their
              stories through exceptional digital experiences. Our passion for perfection drives every pixel, every
              interaction, and every moment of delight we create.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 animate-slide-in-left animation-delay-400">
                <CheckCircle className="w-6 h-6 text-secondary animate-pulse" />
                <span className="text-lg">Award-winning design team</span>
              </div>
              <div className="flex items-center gap-4 animate-slide-in-left animation-delay-600">
                <CheckCircle className="w-6 h-6 text-secondary animate-pulse" />
                <span className="text-lg">500+ successful projects</span>
              </div>
              <div className="flex items-center gap-4 animate-slide-in-left animation-delay-800">
                <CheckCircle className="w-6 h-6 text-secondary animate-pulse" />
                <span className="text-lg">Global client base</span>
              </div>
            </div>

            <Button size="lg" className="group hover-lift animate-pulse-glow animate-fade-in-up animation-delay-1000">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} animation-delay-400`}
          >
            <div className="relative">
              <div className="w-full h-96 bg-secondary/20 rounded-2xl overflow-hidden hover-lift animate-pulse-glow">
                <img
                  src="/modern-design-studio.png"
                  alt="Design Studio Workspace"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full animate-float animation-delay-600 animate-morphing"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full animate-float-reverse animation-delay-200"></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-secondary/25 rounded-full animate-pulse animation-delay-800"></div>

              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-3 animate-scale-in animation-delay-1000">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
