import { cn } from "@/lib/utils"

export default function SkeletonMy({ className }: { className: string }) {
  return <div className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`} />;
}

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
  // return (
  //   <div className="space-y-6">
  //     <div className="space-y-2">
  //       <SkeletonMy className="w-[30ch] h-[1.25rem]"/>
  //       <SkeletonMy className="w-[45ch] h-[1rem]"/>
  //     </div>
  //     <div className="space-y-2">
  //       <SkeletonMy className="w-[30ch] h-[1.25rem]"/>
  //       <SkeletonMy className="w-[45ch] h-[1rem]"/>
  //     </div>
  //     <div className="space-y-2">
  //       <SkeletonMy className="w-[30ch] h-[1.25rem]"/>
  //       <SkeletonMy className="w-[45ch] h-[1rem]"/>
  //     </div>
  //   </div>
  // )
}

export { Skeleton }
