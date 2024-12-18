import { BackgroundLines } from "@/components/ui/background-lines";
  

export default function Home() {
  return (
         <main className="flex flex-col items-center justify-center w-screen h-screen bg-white dark:bg-black">
      <BackgroundLines>
        <div className="flex flex-col items-center justify-center w-full h-full p-5">
          Certificates
        </div>
      </BackgroundLines>
    </main>
  );
}

