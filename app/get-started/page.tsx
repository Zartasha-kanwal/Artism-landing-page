"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div
      className="min-h-screen bg-[#414A37]"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
    >
      <Header />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-6"
        data-scroll
        data-scroll-section
        data-scroll-speed="-.3"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-8 animate-scale-in animation-delay-200 hover-glow border border-secondary/30">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary cursor-default">
                Ready to Transform Your Vision?
              </span>
              <Star className="w-3 h-3 text-primary animate-pulse animation-delay-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#DBC2A6] mb-6 animate-fade-in-up animation-delay-200">
              Let's Build Something
              <span className="block text-gradient bg-gradient-to-r from-[#DBC2A6] to-[#99744A] bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl text-[#DBC2A6]/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Join thousands of creators who have transformed their ideas into
              reality. Start your journey with our premium tools and expert
              guidance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#99744A] mb-2">
                10K+
              </div>
              <div className="text-[#DBC2A6]/70">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#99744A] mb-2">
                99%
              </div>
              <div className="text-[#DBC2A6]/70">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#99744A] mb-2">
                24/7
              </div>
              <div className="text-[#DBC2A6]/70">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#99744A] mb-2">
                5
              </div>
              <div className="text-[#DBC2A6]/70">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-20 px-6"
        data-scroll
        data-scroll-section
        data-scroll-speed="-.5"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-[#DBC2A6] mb-6">
                  Why Choose Our Platform?
                </h2>
                <p className="text-[#DBC2A6]/80 text-lg mb-8">
                  Experience the perfect blend of innovation, reliability, and
                  performance that sets us apart from the competition.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#99744A]/20 rounded-lg flex items-center justify-center group-hover:bg-[#99744A]/30 transition-colors">
                    <Zap className="w-6 h-6 text-[#99744A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#DBC2A6] mb-2">
                      Lightning Fast
                    </h3>
                    <p className="text-[#DBC2A6]/70">
                      Experience blazing-fast performance with our optimized
                      infrastructure and cutting-edge technology stack.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#99744A]/20 rounded-lg flex items-center justify-center group-hover:bg-[#99744A]/30 transition-colors">
                    <Shield className="w-6 h-6 text-[#99744A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#DBC2A6] mb-2">
                      Enterprise Security
                    </h3>
                    <p className="text-[#DBC2A6]/70">
                      Your data is protected with bank-level security,
                      end-to-end encryption, and compliance with industry
                      standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#99744A]/20 rounded-lg flex items-center justify-center group-hover:bg-[#99744A]/30 transition-colors">
                    <Users className="w-6 h-6 text-[#99744A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#DBC2A6] mb-2">
                      Expert Support
                    </h3>
                    <p className="text-[#DBC2A6]/70">
                      Get help from our team of experts who are available 24/7
                      to assist you with any questions or challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#99744A]/20 rounded-lg flex items-center justify-center group-hover:bg-[#99744A]/30 transition-colors">
                    <Clock className="w-6 h-6 text-[#99744A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#DBC2A6] mb-2">
                      Quick Setup
                    </h3>
                    <p className="text-[#DBC2A6]/70">
                      Get up and running in minutes with our streamlined
                      onboarding process and intuitive interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="bg-[#99744A]/10 border-[#99744A]/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#DBC2A6]">
                  Start Your Journey
                </CardTitle>
                <CardDescription className="text-[#DBC2A6]/70">
                  Fill out the form below and we'll get you started with a
                  personalized setup.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#DBC2A6] mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-[#414A37]/50 border-[#99744A]/30 text-[#DBC2A6] placeholder:text-[#DBC2A6]/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#DBC2A6] mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="bg-[#414A37]/50 border-[#99744A]/30 text-[#DBC2A6] placeholder:text-[#DBC2A6]/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#DBC2A6] mb-2 block">
                      Company/Organization
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="bg-[#414A37]/50 border-[#99744A]/30 text-[#DBC2A6] placeholder:text-[#DBC2A6]/50"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#DBC2A6] mb-2 block">
                      Project Type
                    </label>
                    <Input
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="Web App, Mobile App, E-commerce, etc."
                      className="bg-[#414A37]/50 border-[#99744A]/30 text-[#DBC2A6] placeholder:text-[#DBC2A6]/50"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#DBC2A6] mb-2 block">
                      Tell us about your project
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project goals, timeline, and any specific requirements..."
                      rows={4}
                      className="bg-[#414A37]/50 border-[#99744A]/30 text-[#DBC2A6] placeholder:text-[#DBC2A6]/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#99744A] hover:bg-[#99744A]/80 text-[#DBC2A6] font-semibold py-3 group"
                  >
                    Start My Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-[#DBC2A6]/60 text-center">
                    By submitting this form, you agree to our Terms of Service
                    and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 px-6"
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#DBC2A6] text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#99744A]/10 border-[#99744A]/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#99744A] fill-current"
                    />
                  ))}
                </div>
                <p className="text-[#DBC2A6]/80 mb-4">
                  "Absolutely incredible experience! The team delivered beyond
                  our expectations and the results speak for themselves."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#99744A]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#DBC2A6] font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="text-[#DBC2A6] font-semibold">
                      Sarah Mitchell
                    </div>
                    <div className="text-[#DBC2A6]/60 text-sm">
                      CEO, TechStart
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#99744A]/10 border-[#99744A]/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#99744A] fill-current"
                    />
                  ))}
                </div>
                <p className="text-[#DBC2A6]/80 mb-4">
                  "The attention to detail and professional approach made all
                  the difference. Highly recommend for any serious project."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#99744A]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#DBC2A6] font-semibold">MJ</span>
                  </div>
                  <div>
                    <div className="text-[#DBC2A6] font-semibold">
                      Michael Johnson
                    </div>
                    <div className="text-[#DBC2A6]/60 text-sm">
                      Founder, InnovateCorp
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#99744A]/10 border-[#99744A]/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#99744A] fill-current"
                    />
                  ))}
                </div>
                <p className="text-[#DBC2A6]/80 mb-4">
                  "Fast, reliable, and exactly what we needed. The support team
                  is fantastic and always ready to help."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#99744A]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#DBC2A6] font-semibold">ER</span>
                  </div>
                  <div>
                    <div className="text-[#DBC2A6] font-semibold">
                      Emily Rodriguez
                    </div>
                    <div className="text-[#DBC2A6]/60 text-sm">
                      Director, CreativeStudio
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
