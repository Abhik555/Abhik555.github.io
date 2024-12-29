import ProjectComponentCard from "@/components/ui/project-component";
import { Chakra_Petch } from "next/font/google";
import proj from "../data/projects.json";

const url = "https://raw.githubusercontent.com/Abhik555/Hand-Gesture-Recognition-System-And-Survey-Application/main/README.md";

const chakrafont = Chakra_Petch({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const projectCardList = [
    proj.map((project) => {
      return (
        <ProjectComponentCard
          key={project.id}
          title={project.title}
          desciption={project.description}
          skills={project.skills}
          link={project.projectUrl}
          isImage={project.isImage}
        />
      );
    }),
  ];
  

  return (
    <main className=" items-center justify-center w-[100%] h-screen z-10 bg-white dark:bg-black">
      <div className="absolute hidden lg:hidden w-fit h-fit top-7 text-3xl">
        <p className={chakrafont.className}>Abhik Ghosh</p>
      </div>
      <div className="flex flex-col -space-y-28 pt-5 w-full  bg-white dark:bg-black">
      <div className="mt-32 mb-32 md:mt-16 lg:mt-16">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          My Projects
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            A Collections of all my work from various computer science domains.
          </p>
      </div>
      {/* {...projectCardList} */}
      <div className="flex flex-col p-3 h-auto w-[100%] -space-y-28 items-center justify-center">
        {...projectCardList}
      </div>
      </div>
    </main>
  );
}
