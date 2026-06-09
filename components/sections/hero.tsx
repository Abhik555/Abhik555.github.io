"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { AuroraText } from "../ui/aurora-text";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import StatusIndicator from "../ui/status";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiDocker,
  SiGo,
  SiGithub,
} from "react-icons/si";

import { FaAws } from "react-icons/fa6";

export default function HeroSection() {
  const skills = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
    { icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: SiGo, name: "Go", color: "#00ADD8" },
    { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  ];

  return (
    /*
      overflow-x-hidden on the section guarantees the marquee strip
      can never cause a horizontal scrollbar or push layout wider
      than the viewport at any breakpoint.
    */
    <section id="hero" className="w-full overflow-x-hidden">
      <div className="pt-6 md:pt-0 md:-mt-14 flex flex-col items-center justify-center w-full">

        {/* ── Availability Badge ── */}
        <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
          <span
            className={cn(
              "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#1d4ed8]/50 via-[#06b6d4]/50 to-[#38bdf8]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          <StatusIndicator />
          <AnimatedGradientText className="text-sm font-medium">
            Available to Work
          </AnimatedGradientText>
        </div>

        {/* ── Hero Text ── */}
        <div className="mt-6 flex w-full flex-col items-center px-5 sm:px-8 md:px-4">
          <h1 className="pb-4 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl">
            Abhik <AuroraText>Ghosh</AuroraText>
          </h1>

          <p className="pb-4 text-center text-sm font-medium tracking-wide text-slate-300/90 md:text-base">
            @Abthedev
          </p>

          <h2
            className="
              w-full
              pt-4
              text-center
              text-[15px]
              font-light
              leading-[1.5]
              tracking-[-0.02em]
              text-slate-300/95
              sm:text-xl
              sm:leading-[1.4]
              md:max-w-5xl
              md:text-[30px]
              md:leading-[1.35]
            "
          >
            AI Engineer and Mobile Developer building intelligent systems,
            production-ready applications, and cloud-native solutions.
          </h2>
        </div>

        {/* ── Skills Marquee ── */}
        {/*
          KEY FIX:
          - max-w-[100vw] hard-caps the container to the viewport width
          - overflow-hidden clips anything that tries to escape it
          - Both together prevent any horizontal bleed at every screen size
        */}
        <div
          className="relative mt-10 md:mt-14 overflow-hidden"
          style={{ width: "100vw", maxWidth: "100vw" }}
        >
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-6 bg-gradient-to-r from-background to-transparent sm:w-14 md:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-6 bg-gradient-to-l from-background to-transparent sm:w-14 md:w-32" />

          {/*
            The motion div is intentionally wider than the screen (it holds
            all skill pills × 2 for the loop). It must NOT be constrained —
            only the parent clips it. width: max-content lets it grow as
            needed while the parent overflow-hidden keeps it invisible outside.
          */}
          <motion.div
            className="flex gap-2 sm:gap-3 md:gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            style={{ width: "max-content" }}
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-500/15
                    bg-neutral-900/60
                    px-3
                    py-2
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-neutral-800/80
                    hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]
                    sm:gap-3
                    sm:px-4
                    sm:py-2.5
                    md:px-5
                  "
                >
                  <Icon size={15} color={skill.color} className="sm:hidden" />
                  <Icon
                    size={20}
                    color={skill.color}
                    className="hidden sm:block"
                  />
                  <span className="whitespace-nowrap text-xs font-medium text-neutral-200 sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Scroll Indicator ── */}
        <div className="mt-10 flex flex-col items-center pb-4 md:mt-14">
          <p className="pb-4 text-center text-sm font-medium tracking-wide text-slate-300/90 md:text-base">
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-6 stroke-cyan-400" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}