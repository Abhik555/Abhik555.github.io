// "use client";

// import { ArrowRightIcon, ChevronDown, ChevronRight } from "lucide-react";
// import { AnimatedShinyText } from "../ui/animated-shiny-text";
// import StatusIndicator from "../ui/status";
// import { AnimatedGradientText } from "../ui/animated-gradient-text";
// import { cn } from "@/lib/utils";
// import { AuroraText } from "../ui/aurora-text";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function HeroSection() {
//   const { scrollY } = useScroll();

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);
//   const y = useTransform(scrollY, [0, 500], [0, 100]);

//   return (
//     // <motion.section
//     //   style={{ opacity, y }}
//     //   className="min-h-screen flex items-center justify-center"
//     // >
//       <section id="hero" >
//         <div className="-mt-14 justify-center items-center flex flex-col">
//           <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
//             <span
//               className={cn(
//                 "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#1d4ed8]/50 via-[#06b6d4]/50 to-[#38bdf8]/50 bg-[length:300%_100%] p-[1px]",
//               )}
//               style={{
//                 WebkitMask:
//                   "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                 WebkitMaskComposite: "destination-out",
//                 mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                 maskComposite: "subtract",
//                 WebkitClipPath: "padding-box",
//               }}
//             />
//             <StatusIndicator />
//             <AnimatedGradientText className="text-sm font-medium">
//               Available to Work
//             </AnimatedGradientText>
//           </div>
//           <div className="p-2 mt-6 flex flex-col items-center">
//             <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl pb-4">
//               Abhik <AuroraText>Ghosh</AuroraText>
//             </h1>
//             <p className="text-sm md:text-base font-medium text-slate-300/90 tracking-wide pb-4">
//               @Abthedev
//             </p>
//             <h2
//               className="
//           pt-4
//     max-w-5xl
//     text-center
//     text-[24px]
//     md:text-[30px]
//     font-light
//     leading-[1.35]
//     tracking-[-0.02em]
//     text-slate-300/95
//   "
//             >
//               AI and Mobile engineer building intelligent systems and
//               Crossplatform Applications
//             </h2>
//           </div>
//           <div className="flex flex-col items-center mt-10">
//             <p className="text-sm md:text-base font-medium text-slate-300/90 tracking-wide pb-4">
//               Scroll
//             </p>
//             <ChevronDown className="size-6 stroke-neutral-500 animate-bounce" />
//           </div>
//         </div>
//       </section>
//     // </motion.section>
//   );
// }
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
  SiPostgresql,
  SiDocker,
  SiMongodb,
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
    <section id="hero">
      <div className="-mt-14 flex flex-col items-center justify-center">
        {/* Availability Badge */}

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

        {/* Hero Text */}

        <div className="mt-6 flex flex-col items-center p-2">
          <h1 className="pb-4 text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            Abhik <AuroraText>Ghosh</AuroraText>
          </h1>

          <p className="pb-4 text-sm font-medium tracking-wide text-slate-300/90 md:text-base">
            @Abthedev
          </p>

          <h2
            className="
              max-w-5xl
              pt-4
              text-center
              text-[24px]
              font-light
              leading-[1.35]
              tracking-[-0.02em]
              text-slate-300/95
              md:text-[30px]
            "
          >
            AI Engineer and Mobile Developer building intelligent systems,
            production-ready applications, and cloud-native solutions.
          </h2>
        </div>

        {/* Skills Marquee */}

        <div className="relative mt-14 w-full max-w-6xl overflow-hidden">
          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-background to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex gap-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
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
                    gap-3
                    rounded-full
                    border
                    border-cyan-500/15
                    bg-neutral-900/60
                    px-5
                    py-2.5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-neutral-800/80
                    hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]
                  "
                >
                  <Icon size={20} color={skill.color} />

                  <span className="text-sm font-medium text-neutral-200">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}

        <div className="mt-14 flex flex-col items-center">
          <p className="pb-4 text-sm font-medium tracking-wide text-slate-300/90 md:text-base">
            Scroll
          </p>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="size-6 stroke-cyan-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}