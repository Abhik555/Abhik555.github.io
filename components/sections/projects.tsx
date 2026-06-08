// "use client"
// import { Radio } from "lucide-react";
// import { TextReveal } from "../ui/text-reveal";
// import { DiaTextReveal } from "../ui/dia-text-reveal";
// import { ProjectCard } from "../ui/project-card";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function ProjectsSection() {
//   const { scrollY } = useScroll();

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);
//   const y = useTransform(scrollY, [0, 500], [0, 100]);

//   return (
//     // <motion.section
//     //   style={{ opacity, y }}
//     //   className="min-h-screen flex items-center justify-center"
//     // >
//     <section>
//       <div className="flex flex-col items-center">
//         <div
//           className="flex flex-col items-center text-center mb-4"
//         >
//           <h1 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
//             <DiaTextReveal
//               repeat
//               repeatDelay={0.4}
//               text={["Projects"]}
//               colors={["#1e40af", "#2563eb", "#0891b2", "#38bdf8"]}
//             />
//           </h1>
//         </div>
//         <p className="text-sm md:text-base font-medium text-slate-300/90 tracking-wide pb-4 text-center">
//           What I've Built
//         </p>
//         <div className="flex flex-row p-3">
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//           <ProjectCard />
//         </div>
//       </div>
//     </section>
//     // </motion.section>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import projects from "@/app/projects.json";
import { DiaTextReveal } from "../ui/dia-text-reveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            <DiaTextReveal
              repeat
              repeatDelay={0.4}
              text={["Projects"]}
              colors={[
                "#1e40af",
                "#2563eb",
                "#0891b2",
                "#38bdf8",
              ]}
            />
          </h1>

          <p className="mt-4 text-neutral-400">
            Selected work across AI, Full Stack Development,
            Mobile Applications, Automation, and Cloud Technologies.
          </p>
        </div>

        {/* Projects Grid */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <article
                className="
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-neutral-800
                  bg-neutral-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/30
                  hover:shadow-[0_12px_50px_rgba(6,182,212,0.08)]
                "
              >
                {/* Project Image */}

                <div
                  className="
                    relative
                    h-52
                    overflow-hidden
                    border-b
                    border-neutral-800
                    bg-neutral-900
                  "
                >
                  <Image
                    src={project.imgurl}
                    alt={project.title}
                    fill
                    unoptimized
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                    "
                  />
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex-1">
                    <h3
                      className="
                        line-clamp-2
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        line-clamp-3
                        text-sm
                        leading-relaxed
                        text-neutral-400
                      "
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Skills */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-cyan-500/15
                          bg-cyan-500/5
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-cyan-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      border-neutral-800
                      pt-4
                    "
                  >
                    <div className="flex items-center gap-2 text-neutral-400">
                      <FaGithub className="h-4 w-4" />

                      <span className="text-sm">
                        View Project
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="
                        text-neutral-400
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}