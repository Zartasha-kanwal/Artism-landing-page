"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Eye, Calendar, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      category: "Web Development",
      description: "A modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      image: "/modern-ecommerce-dark.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "AI"],
      year: "2024",
      client: "TechCorp",
      views: "2.5M",
      awards: 3,
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "UI/UX Design",
      description: "Comprehensive financial dashboard with real-time analytics and intuitive data visualization.",
      image: "/fintech-dashboard-dark-interface.jpg",
      technologies: ["React", "D3.js", "WebSocket", "Charts"],
      year: "2024",
      client: "FinanceFlow",
      views: "1.8M",
      awards: 2,
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Patient management system with telemedicine capabilities and health tracking features.",
      image: "/healthcare-mobile-app.png",
      technologies: ["React Native", "Node.js", "MongoDB", "WebRTC"],
      year: "2023",
      client: "MedTech Solutions",
      views: "3.2M",
      awards: 5,
    },
    {
      id: 4,
      title: "AI Content Platform",
      category: "Full Stack",
      description: "Content creation platform powered by AI with collaborative editing and publishing tools.",
      image: "/ai-content-creation-platform-dark.jpg",
      technologies: ["Next.js", "OpenAI", "PostgreSQL", "Redis"],
      year: "2024",
      client: "ContentAI",
      views: "4.1M",
      awards: 4,
    },
    {
      id: 5,
      title: "Smart Home Interface",
      category: "IoT Design",
      description: "Intuitive smart home control system with voice commands and automation features.",
      image: "/smart-home-interface-dark-theme.jpg",
      technologies: ["Vue.js", "IoT", "Voice API", "Automation"],
      year: "2023",
      client: "SmartLiving",
      views: "1.9M",
      awards: 3,
    },
    {
      id: 6,
      title: "Crypto Trading Bot",
      category: "Blockchain",
      description: "Advanced cryptocurrency trading bot with machine learning algorithms and risk management.",
      image: "/crypto-trading-interface-dark.jpg",
      technologies: ["Python", "ML", "Blockchain", "APIs"],
      year: "2024",
      client: "CryptoTrade Pro",
      views: "2.7M",
      awards: 6,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        data-scroll
        data-scroll-section
        data-scroll-speed="-.8"
      >
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-float-reverse animation-delay-600"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float animation-delay-400"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-8 border border-secondary/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Award className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">Award-Winning Projects</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient">Our</span>
              <br />
              <span className="text-secondary">Portfolio</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover our collection of exceptional projects that showcase innovation, creativity, and technical
              excellence across various industries.
            </motion.p>

            <motion.div
              className="flex justify-center gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary animate-pulse">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary animate-pulse">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent animate-pulse">25+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative" data-scroll data-scroll-section data-scroll-speed="-.4">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project represents our commitment to excellence and innovation in digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {project.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {project.awards}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Client: {project.client}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative" data-scroll data-scroll-section data-scroll-speed="-.2">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your vision, our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="text-lg px-8 py-4 group animate-pulse-glow">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-secondary/50 hover:border-secondary bg-transparent"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
