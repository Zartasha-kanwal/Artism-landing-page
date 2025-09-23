"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Zap, Users, Award, Sparkles } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Creative Excellence",
    description: "Innovative designs that capture your unique vision and bring it to life with artistic precision.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Rapid prototyping and development cycles that get your project from concept to reality quickly.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "Work closely with our team throughout the entire journey, ensuring your voice is heard.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Award-winning designs and solutions that exceed expectations and industry standards.",
  },
]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section  id="features" ref={sectionRef} className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float-reverse animation-delay-400"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/15 rounded-full animate-float animation-delay-800 animate-morphing"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-pulse animation-delay-600"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 animate-scale-in">
            <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">Features</span>
            <Sparkles className="w-5 h-5 text-secondary animate-pulse animation-delay-200" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-200">
            Why Choose <span className="text-gradient">Artisan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-400">
            Discover the perfect blend of creativity, technology, and craftsmanship that sets us apart from the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                className={`border-0 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-500 hover-lift group animate-pulse-glow ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-all duration-300 animate-rotate-in animation-delay-200 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-secondary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full hover-glow">
            <span className="text-primary font-medium">Ready to get started?</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
