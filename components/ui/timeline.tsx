"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      {/* <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-3 text-2xl font-semibold text-white md:text-4xl">
          Certifications Timeline
        </h2>

        <p className="max-w-xl text-sm text-neutral-400 md:text-base">
          A timeline of certifications, specializations, and technical
          achievements throughout my learning journey.
        </p>
      </div> */}

      <div ref={ref} className="relative mx-auto max-w-6xl py-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row justify-start py-8 md:py-12 md:gap-10"
          >
            {/* Mobile dot (non-sticky) */}
            <div className="absolute left-[6px] top-[40px] z-40 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400 bg-neutral-950 md:hidden">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
            </div>

            {/* Left Side Date */}
            <div className="sticky top-24 z-40 hidden md:block w-52 shrink-0 self-start">
              <div className="relative flex items-center">
                <div className="absolute left-[6px] flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400 bg-neutral-950">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                <h3 className="pl-10 text-xl font-bold text-neutral-500">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content & Mobile Date Wrapper */}
            <div className="relative pl-10 pr-4 md:pl-0 w-full md:flex-1 flex flex-col items-start">
              {/* Mobile Date */}
              <div className="mb-4 block md:hidden">
                <h3 className="text-lg font-bold text-neutral-500">
                  {item.title}
                </h3>
              </div>
              <div className="w-full">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Line */}
        <div
          style={{
            height: `${height}px`,
          }}
          className="
            absolute
            left-[13px]
            top-0
            w-[2px]
            overflow-hidden
            bg-gradient-to-b
            from-transparent
            via-neutral-800
            to-transparent
            md:left-[12px]
          "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="
              absolute
              inset-x-0
              top-0
              w-[2px]
              rounded-full
              bg-gradient-to-b
              from-[#1d4ed8]
              via-[#06b6d4]
              to-[#38bdf8]
            "
          />
        </div>
      </div>
    </div>
  );
};
