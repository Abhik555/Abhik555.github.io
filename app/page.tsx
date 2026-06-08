// "use client";

// import CertificateSection from "@/components/sections/certificates";
// import ExperianceSection from "@/components/sections/experiance";
// import HeroSection from "@/components/sections/hero";
// import ProjectsSection from "@/components/sections/projects";

// import {
//   Navbar,
//   NavbarButton,
//   NavbarLogo,
//   NavBody,
//   NavItems,
// } from "@/components/ui/resizable-navbar";

// import { motion } from "framer-motion";

// export default function Home() {
//   const navItems = [
//     {
//       name: "Projects",
//       link: "#projects",
//     },
//     {
//       name: "Experience",
//       link: "#experience",
//     },
//     {
//       name: "Certificates",
//       link: "#certificates",
//     },
//     {
//       name: "Contact",
//       link: "#contact",
//     },
//   ];

//   return (
//     <main className="scroll-smooth">
//       <Navbar>
//         <NavBody>
//           <NavbarLogo />
//           <NavItems items={navItems} />
//           <NavbarButton variant="primary">Download CV</NavbarButton>
//         </NavBody>
//       </Navbar>

//       <div id="top" />

//       {/* Hero */}
//       <section className="min-h-screen flex items-center justify-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             ease: "easeOut",
//           }}
//         >
//           <HeroSection />
//         </motion.div>
//       </section>

//       {/* Projects */}
//       <motion.section
//         id="projects"
//         className="scroll-mt-40 py-32"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{
//           once: true,
//           amount: 0.2,
//         }}
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//         }}
//       >
//         <ProjectsSection />
//       </motion.section>

//       {/* Projects */}
//       <motion.section
//         id="experiance"
//         className="scroll-mt-40 py-32"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{
//           once: true,
//           amount: 0.2,
//         }}
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//         }}
//       >
//         <ExperianceSection />
//       </motion.section>

//       {/* Certificates */}
//       <motion.section
//         id="certificates"
//         className="scroll-mt-40 py-32"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{
//           once: true,
//           amount: 0.1,
//         }}
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//         }}
//       >
//         <CertificateSection />
//       </motion.section>

//       {/* Contact */}
//       <section id="contact" className="scroll-mt-40 py-32">
//         <div className="mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl font-semibold">Contact</h2>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

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
