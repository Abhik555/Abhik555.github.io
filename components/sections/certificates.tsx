// // "use client";

// // import Image from "next/image";
// // import cert from "@/app/certificates.json";
// // import { Timeline } from "../ui/timeline";
// // import { DiaTextReveal } from "../ui/dia-text-reveal";

// // export default function CertificateSection() {
// //   const timelineData = cert.map((entry) => ({
// //     title: entry.title,
// //     content: (
// //       <div className="grid gap-6 md:grid-cols-2">
// //         {entry.content.map((certificate) => (
// //           <a
// //             key={certificate.id}
// //             href={certificate.url}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="group block"
// //           >
// //             <div
// //               className="
// //                 overflow-hidden
// //                 rounded-2xl
// //                 border
// //                 border-neutral-800
// //                 bg-neutral-900/50
// //                 transition-all
// //                 duration-300
// //                 hover:border-cyan-500/40
// //                 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
// //               "
// //             >
// //               <div className="relative aspect-video w-full overflow-hidden">
// //                 <Image
// //                   src={certificate.imgUrl}
// //                   alt={certificate.title}
// //                   fill
// //                   className="object-cover transition-transform duration-500 group-hover:scale-105"
// //                 />
// //               </div>

// //               <div className="p-5">
// //                 <h4 className="text-lg font-semibold text-white">
// //                   {certificate.title}
// //                 </h4>

// //                 <p className="mt-2 text-sm text-cyan-400">
// //                   View Credential →
// //                 </p>
// //               </div>
// //             </div>
// //           </a>
// //         ))}
// //       </div>
// //     ),
// //   }));

// //   return (
// //     <section id="certificates">
// //       <div className="flex flex-col items-center">
// //         <div className="mb-8 flex flex-col items-center text-center">
// //           <h1 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
// //             <DiaTextReveal
// //               repeat
// //               repeatDelay={0.4}
// //               text={["Certificates"]}
// //               colors={["#1e40af", "#2563eb", "#0891b2", "#38bdf8"]}
// //             />
// //           </h1>
// //         </div>

// //         <Timeline data={timelineData} />
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import cert from "@/app/certificates.json";
// import { Timeline } from "../ui/timeline";
// import { DiaTextReveal } from "../ui/dia-text-reveal";

// export default function CertificateSection() {
//   const timelineData = cert.map((entry) => ({
//     title: entry.title,
//     content: (
//       <div className="flex justify-center">
//         <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
//           {entry.content.map((certificate) => (
//             <a
//               key={certificate.id}
//               href={certificate.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group block h-full"
//             >
//               <div
//                 className="
//                   h-full
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-neutral-800
//                   bg-neutral-900/50
//                   transition-all
//                   duration-300
//                   hover:border-cyan-500/40
//                   hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
//                 "
//               >
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={certificate.imgUrl}
//                     alt={certificate.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="p-5">
//                   <h4 className="text-lg font-semibold text-white">
//                     {certificate.title}
//                   </h4>

//                   <p className="mt-2 text-sm text-cyan-400">
//                     View Credential →
//                   </p>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     ),
//   }));

//   return (
//     <section id="certificates" className="w-full">
//       <div className="flex flex-col items-center">
//         <div className="mb-8 flex flex-col items-center text-center">
//           <h1 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
//             <DiaTextReveal
//               repeat
//               repeatDelay={0.4}
//               text={["Certificates"]}
//               colors={["#1e40af", "#2563eb", "#0891b2", "#38bdf8"]}
//             />
//           </h1>
//         </div>

//         <div className="w-full">
//           <Timeline data={timelineData} />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import cert from "@/app/certificates.json";
import { Timeline } from "../ui/timeline";
import { DiaTextReveal } from "../ui/dia-text-reveal";

export default function CertificateSection() {
  const timelineData = cert.map((entry) => ({
    title: entry.title,
    content: (
      <div className="flex justify-center">
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {entry.content.map((certificate) => {
            const isUdemy =
              certificate.url.toLowerCase().includes("udemy") ||
              certificate.imgUrl.toLowerCase().includes("udemy");

            return (
              <a
                key={certificate.id}
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div
                  className="
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-neutral-800
                    bg-neutral-900/50
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-500/40
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                  "
                >
                  {/* Dynamic image height */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                    <Image
                      src={certificate.imgUrl}
                      alt={certificate.title}
                      fill
                      className="
      object-cover
      transition-transform
      duration-500
      group-hover:scale-105
    "
                    />
                  </div>

                  <div className="flex min-h-[120px] flex-col justify-between p-5">
                    <h4 className="line-clamp-2 text-lg font-semibold text-white">
                      {certificate.title}
                    </h4>

                    <p
                      className="
                        mt-4
                        text-sm
                        font-medium
                        text-cyan-400
                        transition-colors
                        duration-300
                        group-hover:text-cyan-300
                      "
                    >
                      View Credential →
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    ),
  }));

  return (
    <section id="certificates" className="w-full">
      <div className="flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center text-center">
          <h1 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            <DiaTextReveal
              repeat
              repeatDelay={0.4}
              text={["Certificates"]}
              colors={["#1e40af", "#2563eb", "#0891b2", "#38bdf8"]}
            />
          </h1>
        </div>

        <div className="w-full">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}
