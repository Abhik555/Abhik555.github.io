"use client";
import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from "next/image";

interface TimelineContentProps {
  title: string;
  imgUrl: string;
  url: string;
}

const TimelineContent: React.FC<TimelineContentProps> = ({
  title,
  imgUrl,
  url,
}) => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-fit">
      <div className="flex flex-col items-center justify-between ">
        <TextGenerateEffect words={title} />
      </div>
      <div onClick={() => window.open(url, "_blank")}>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit  h-fit rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <Image
                priority
                src={imgUrl}
                alt="certificate"
                width={500}
                height={500}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default TimelineContent;
