import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome ,IconCertificate,IconBrandDatabricks,IconAt } from "@tabler/icons-react";
import { ModeToggle } from "@/components/ui/thememode_toggle";
import { GradientMagicButton, ShimmerButton } from "@/components/ui/my-button";
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
  // {
  //   title: "Contact",
  //   icon: (
  //     <IconAt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //   ),
  //   href: "/contact",
  // },
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
              mobileClassName="w-screen z-10 ml-5"
            />
          </div>
          {/* <div className="absolute left-4 top-4 h-16 w-16">
            <ModeToggle />
          </div> */}
          <div className="absolute top-4 right-4">
            <Link href="/cv.pdf" passHref>
            <ShimmerButton text="Download CV"/>
            </Link>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
