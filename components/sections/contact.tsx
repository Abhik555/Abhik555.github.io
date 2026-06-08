"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Mail, ArrowUpRight, Download } from "lucide-react";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { DiaTextReveal } from "../ui/dia-text-reveal";
import { ShimmerButton } from "../ui/shimmer-button";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import StatusIndicator from "../ui/status";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex justify-center px-6 py-32">
      <div className="w-full max-w-5xl">
        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <DiaTextReveal
              repeat
              repeatDelay={0.4}
              text={["Get In Touch"]}
              colors={["#1e40af", "#2563eb", "#0891b2", "#38bdf8"]}
            />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            I'm always interested in discussing software, AI, startups, and
            interesting opportunities. Whether you have a project, a role, or
            simply want to connect, my inbox is open.
          </p>
        </div>

        {/* Main Card */}

        <BackgroundGradient
          animate
          className="
            rounded-[32px]
            bg-black
            p-[1px]
          "
        >
          <div
            className="
              rounded-[32px]
              border
              border-white/5
              bg-neutral-950/90
              px-8
              py-14
              md:px-14
            "
          >
            <div className="flex flex-col items-center text-center">
              {/* Badge */}

              <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 mb-6 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <span
                  className={cn(
                    "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#1d4ed8]/50 via-[#06b6d4]/50 to-[#38bdf8]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                <StatusIndicator />
                <AnimatedGradientText className="text-sm font-medium">
                  Available for Opportunities
                </AnimatedGradientText>
              </div>

              {/* Heading */}

              <h3 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Let's build something meaningful.
              </h3>

              <p className="mt-6 max-w-2xl text-neutral-400">
                Currently focused on AI engineering, LLM applications, computer
                vision, backend systems, and scalable products.
              </p>

              {/* CTA */}

              <a href="mailto:abhikghosh.dev@gmail.com" className="mt-10">
                <ShimmerButton
                  className="
                    shadow-lg
                    shadow-cyan-500/10
                  "
                >
                  <span className="flex items-center gap-2">
                    <Mail size={18} />
                    Say Hello
                    <ArrowUpRight size={16} />
                  </span>
                </ShimmerButton>
              </a>

              {/* Socials */}

              <div className="mt-12 flex items-center gap-4">
                <Link href="https://github.com/Abhik555" target="_blank">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-800
                      bg-neutral-900
                      transition-all
                      duration-300
                      hover:border-cyan-500/40
                      hover:-translate-y-1
                    "
                  >
                    <FaGithub size={20} className="text-neutral-300" />
                  </div>
                </Link>

                <Link href="https://linkedin.com/in/abthedev" target="_blank">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-800
                      bg-neutral-900
                      transition-all
                      duration-300
                      hover:border-cyan-500/40
                      hover:-translate-y-1
                    "
                  >
                    <FaLinkedin size={20} className="text-neutral-300" />
                  </div>
                </Link>

                <Link href="mailto:abhik555@hotmail.com">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-800
                      bg-neutral-900
                      transition-all
                      duration-300
                      hover:border-cyan-500/40
                      hover:-translate-y-1
                    "
                  >
                    <Mail size={20} className="text-neutral-300" />
                  </div>
                </Link>
              </div>

              {/* Resume */}

              <a
                href="https://raw.githubusercontent.com/Abhik555/datarepo/refs/heads/main/cv.pdf"
                target="_blank"
                className="
                  mt-10
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-neutral-400
                  transition-colors
                  hover:text-cyan-400
                "
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
}
