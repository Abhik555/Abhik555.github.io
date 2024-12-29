"use client";
import { Timeline } from "@/components/ui/timeline";
import TimelineContent from "@/components/ui/timeline-content";
import cert from "../data/certificates.json";
import { Chakra_Petch } from "next/font/google";

const chakrafont = Chakra_Petch({
  weight:"400",
  style:"normal",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {

  const data = cert.map((c) => ({
    title: c.title,
    content: c.content.map((cc) => (
      <TimelineContent key={cc.id} title={cc.title} url={cc.url} imgUrl={cc.imgUrl} />
    )),
  }));

  return (
    <main className="flex flex-col mt-[110px] mb-0 items-center justify-center w-[100%] h-screen bg-white dark:bg-black">
      <div className="hidden lg:block w-fit h-fit absolute top-7 text-3xl">
        <span className={chakrafont.className}>Abhik Ghosh</span>
      </div>
      <Timeline data={data}></Timeline>
    </main>
  );
}
