"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlipWords } from "@/components/ui/flip-words";
import { Skeleton } from "@/components/ui/skeleton";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast"
import Link from "next/link";

export default function Home() {
  const wordst = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Abhik Ghosh 👋",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words = [
    "Software Developer",
    "Tech Enthusiast",
    "Student",
    "Quick Learner",
  ];

  const { toast } = useToast()
  const copylink = () => {
    navigator.clipboard.writeText("abhik555@hotmail.com")
    toast({description:"Email Copied to Clipboard"})

}

  return (
    <main className="z-3 pt-10 flex flex-col items-center justify-evenly h-screen ">
      <div className="flex flex-col items-center justify-start w-screen h-fit">
        <Avatar className="w-[150px] h-[150px] ">
          <AvatarImage src="https://github.com/Abhik555.png" />
          <AvatarFallback>
            <Skeleton className="rounded-full" />
          </AvatarFallback>
        </Avatar>
        <TypewriterEffectSmooth cursorClassName="hidden" words={wordst} />
        <FlipWords
          className="items-center justify-center text-4xl mx-auto font-normal "
          words={["A"]}
        />
        <div className="items-center justify-center mt-10 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          <FlipWords words={words} />
        </div>
      </div>
      <div className="z-7 flex flex-row items-center justify-evenly w-fit p-10 m-8">
        <Link
          className="ml-2 mr-2"
          href="https://github.com/Abhik555"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconBrandGithub size={50} />
        </Link>
        <Link
          className="ml-2 mr-2"
          href="https://www.linkedin.com/in/abthedev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconBrandLinkedin size={50} />
        </Link>
          <IconMail onClick={copylink} className="ml-2 mr-2" size={50} />
      </div>
    </main>
  );
}
