"use client";

import { useState } from "react";
import CertificateSection from "@/components/sections/certificates";
import ContactSection from "@/components/sections/contact";
import ExperianceSection from "@/components/sections/experiance";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";

import {
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

import { motion } from "framer-motion";

const sectionAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Certificates",
      link: "#certificates",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <main className="scroll-smooth">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="https://raw.githubusercontent.com/Abhik555/datarepo/refs/heads/main/cv.pdf" variant="primary">Download CV</NavbarButton>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col gap-4 w-full px-2">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-600 dark:text-neutral-300 font-medium text-lg hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <NavbarButton
                href="https://raw.githubusercontent.com/Abhik555/datarepo/refs/heads/main/cv.pdf"
                variant="primary"
                className="w-full text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div id="top" />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <HeroSection />
        </motion.div>
      </section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="scroll-mt-40 py-24"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <ProjectsSection />
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        className="scroll-mt-40 py-24"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.03,
          margin: "-100px",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <ExperianceSection />
      </motion.section>

      {/* Certificates */}
      <motion.section
        id="certificates"
        className="scroll-mt-40 py-24"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.03,
          margin: "-100px",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <CertificateSection />
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="scroll-mt-40 py-32"
        initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <ContactSection />
      </motion.section>
    </main>
  );
}
