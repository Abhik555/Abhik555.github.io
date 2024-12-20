"use client";
import { Timeline } from "@/components/ui/timeline";
import TimelineContent from "@/components/ui/timeline-content";
import cert from "../data/certificates.json";

export default function Home() {
  //console.log(cert);

  const data = cert.map((c) => ({
    title: c.title,
    content: c.content.map((cc) => (
      <TimelineContent key={cc.id} title={cc.title} url={cc.url} imgUrl={cc.imgUrl} />
    )),
  }));

  // const Data = [
  //   {
  //     title:"2020",
  //     content: (
  //       <TimelineContent title="Flutter and Dart Fundamentals" url="https://www.udemy.com/certificate/UC-9dfc697d-157e-497e-9324-623c50001898/" imgUrl="https://udemy-certificate.s3.amazonaws.com/image/UC-9dfc697d-157e-497e-9324-623c50001898.jpg?v=1705763716000" />
  //     ),
  //   }
  // ];

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-white dark:bg-black">
      <Timeline data={data}></Timeline>
    </main>
  );
}
