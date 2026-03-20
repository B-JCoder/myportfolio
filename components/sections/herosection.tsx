"use client";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function HeroSection() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-32">
      <div className="flex flex-col items-center text-center space-y-12 relative z-10">
        <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
          <Text className="text-sm font-medium tracking-widest uppercase text-blue-400">
            Creative Portfolio 2026
          </Text>
        </div>

        <div className="space-y-6">
          <Heading as="h1" className="text-white">
            <span className="text-blue-400">Full Stack</span> Developer & <br />
            Digital{" "}
            <span className="text-[#1A14A5] drop-shadow-[0_0_15px_rgba(26,20,165,0.4)]">
              Architect
            </span>
          </Heading>

          <Text className="max-w-2xl mx-auto text-lg md:text-xl text-white/60">
            I'm Bilal Jadi, a Full Stack Developer specialized in building
            high-end digital products with modern technologies and visionary
            design.
          </Text>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
          <Link
            href="#contact"
            className="btn-premium text-white w-full sm:w-auto text-center min-w-[180px]"
          >
            Start a Project
          </Link>
          <Link
            href="#projects"
            className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <span className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500" />
            View My Work
          </Link>
        </div>
      </div>

      {/* Creative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-10 left-10 w-[calc(100%-80px)] h-[calc(100%-80px)] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      {/* Floating Parallax Text */}
      <div className="absolute -bottom-20 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
        <span
          className="text-[20vw] font-bold font-heading parallax-text inline-block"
          data-speed="2"
        >
          CREATIVITY INNOVATION DESIGN ENGINEERING
        </span>
      </div>
    </Section>
  );
}
