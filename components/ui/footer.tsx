"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-neutral-800/60">
      {/* Gradient accent line */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-px
          w-1/2
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-500/60
          to-transparent
        "
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10 text-center">
        {/* Name */}
        <h3 className="text-lg font-semibold text-white">
          Abhik Ghosh
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm text-neutral-400">
          AI Engineer • Mobile Developer •
          +91 8150059228
        </p>

        {/* Social Links */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://github.com/Abhik555"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              rounded-full
              border
              border-neutral-800
              p-2.5
              text-neutral-400
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:text-cyan-400
              hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]
            "
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/abthedev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              rounded-full
              border
              border-neutral-800
              p-2.5
              text-neutral-400
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:text-cyan-400
              hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]
            "
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:abhikghosh.dev@gmail.com"
            aria-label="Email"
            className="
              rounded-full
              border
              border-neutral-800
              p-2.5
              text-neutral-400
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:text-cyan-400
              hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]
            "
          >
            <MdEmail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 space-y-1">
          <p className="text-sm text-neutral-500">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>

          <p className="text-xs text-neutral-600">
            © {year} Abhik Ghosh.
          </p>
        </div>
      </div>
    </footer>
  );
}