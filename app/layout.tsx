import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconCertificate,
  IconBrandDatabricks,
} from "@tabler/icons-react";
import { ShimmerButton } from "@/components/ui/my-button";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abhik Ghosh",
  description: "Portfolio of Abhik Ghosh",
};

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Skills and Certificates",
    icon: (
      <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/certificates",
  },
  {
    title: "Projects",
    icon: (
      <IconBrandDatabricks className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <div className="fixed bottom-5 left-0 right-0 z-5">
            <FloatingDock
              items={links}
              desktopClassName="w-fit z-10"
              mobileClassName="w-screen ml-5"
            />
          </div>
          {/* <div className="absolute left-4 top-4 h-16 w-16">
            <ModeToggle />
          </div> */}
          <div className="flex flex-col overflow-hidden">
            <div className="absolute overflow-hidden top-4 right-4">
              <Link
                href="https://raw.githubusercontent.com/Abhik555/datarepo/refs/heads/main/cv.pdf"
                target="_blank"
                passHref
              >
                <ShimmerButton text="Download CV" />
              </Link>
            </div>
            <div className="absolute left-4 top-4">
              <Link href="https://abthedev.substack.com" passHref>
                <ShimmerButton text="Blog" />
              </Link>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
