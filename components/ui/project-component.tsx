"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from "next/image";
import { ShimmerButton } from "./my-button";
import { Badge } from "./badge";

interface ProjectComponentCardProps {
  title: string;
  desciption: string;
  skills: string[];
  link: string;
  isImage: boolean;
  imglink: string;
}

const ProjectComponentCard: React.FC<ProjectComponentCardProps> = ({
  title,
  desciption,
  skills,
  link,
  isImage,
  imglink,
}) => {
  const url =
    "https://api.microlink.io/?url=" +
    link +
    "&screenshot=true&meta=false&embed=screenshot.url";
  return (
    <a href={link}>
      <CardContainer className="inter-var h-fit w-auto ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-fit rounded-xl p-6 border">
          <div className="flex flex-col items-center text-center md:items-start lg:items-start justify-center w-auto h-fit">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {title}
            </CardItem>
            <div className="flex flex-col md:flex-row lg:flex-row items-stretch justify-between w-auto md:w-[50vw] lg:w-[50vw] h-fit mt-10">
              <CardItem translateZ="80">
                <Image
                  width="300"
                  height="300"
                  src={isImage ? imglink : url}
                  alt="project image"
                />
              </CardItem>
              {/* <CardItem translateZ="80" className="flex "> */}
              <div className="flex flex-col w-72 md:text-left lg:text-left items-center mt-10">
                <p>{desciption}</p>
                <CardItem
                  translateZ="120"
                  className="flex flex-row items-center justify-center "
                >
                  <div className="flex flex-row mt-3 ml-5 md:ml-0 lg:ml-0 items-center justify-center overflow-auto">
                    {skills.map((skill, index) => {
                      return (
                        <Badge key={index} className="mr-4 text-base">
                          {" "}
                          {skill}{" "}
                        </Badge>
                      );
                    })}
                  </div>
                </CardItem>
              </div>
              {/* <div className="flex flex-row items-center  justify-end mt-5 md:mr-3 lg:mr-5">
                <ShimmerButton text="View" />
              </div> */}
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </a>
  );
};

export default ProjectComponentCard;
