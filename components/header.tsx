"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-secondary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold text-primary animate-slide-in-left group">
            <Sparkles className="w-6 h-6 text-secondary animate-pulse group-hover:rotate-12 transition-transform" />
            <span className="text-gradient">ARTISAN</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in-up animation-delay-200">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Features
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          <Button className="hidden md:block animate-slide-in-right animation-delay-400 hover-lift animate-pulse-glow cursor-pointer">
            Get Started
          </Button>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2 hover:bg-secondary/20 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="animate-rotate-in" /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-secondary/20">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-secondary/10 rounded"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-secondary/10 rounded"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-secondary/10 rounded"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-secondary/10 rounded"
              >
                Contact
              </a>
              <Button className="w-full mt-4 animate-pulse-glow">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
