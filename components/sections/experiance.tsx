"use client";

import Image from "next/image";
import work from "@/app/work.json";
import { Timeline } from "../ui/timeline";
import { DiaTextReveal } from "../ui/dia-text-reveal";
import { Building2, MapPin, Briefcase } from "lucide-react";

export default function ExperianceSection() {
  const timelineData = work.map((entry) => ({
    title: entry.title,
    content: (
      <div className="flex justify-center">
        <div className="grid w-full max-w-4xl gap-6">
          {entry.content.map((job) => (
            <a
              key={job.id}
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-neutral-800
                  bg-neutral-900/50
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-cyan-500/40
                  hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                "
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="relative h-12 w-12 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
                      <Image
                        src={job.imgUrl}
                        alt={job.company}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white break-words">
                        {job.role}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400">
                        <div className="flex items-center gap-2 min-w-0">
                          <Building2 className="h-4 w-4 shrink-0" />
                          <span className="break-words">{job.company}</span>
                        </div>

                        <div className="flex items-center gap-2 min-w-0">
                          <Briefcase className="h-4 w-4 shrink-0" />
                          <span className="break-words">{job.type}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-start gap-2 text-sm text-neutral-400">
                        <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                        <span className="break-words">{job.location}</span>
                      </div>

                      <div className="mt-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        {job.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="w-full">
      <div className="flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center text-center">
          <h1 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            <DiaTextReveal
              repeat
              repeatDelay={0.4}
              text={["Experience"]}
              colors={["#1e40af", "#2563eb", "#0891b2", "#38bdf8"]}
            />
          </h1>
        </div>

        <div className="w-full">
          <Timeline
            data={timelineData}
          />
        </div>
      </div>
    </section>
  );
}
