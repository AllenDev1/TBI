import React from 'react';
import Image from 'next/image';
import type { Project } from '@/lib/projects';

/**
 * The project's work shown as itself, on its brand color: a fanned trio of
 * phone screens for app projects (`frame: 'window'`), or a browser-chrome
 * card for web projects (`frame: 'thangka'`). The fan lifts and straightens
 * slightly when a parent `group` link is hovered.
 */
export default function ProjectVisual({
  project,
  priority = false,
  className = '',
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  const { fg } = project.brand;

  if (project.frame === 'window') {
    const shots = project.gallery.slice(0, 3);
    return (
      <div
        className={`relative mx-auto flex w-full items-center justify-center py-2 transition-transform duration-500 group-hover:-translate-y-2 ${className}`}
      >
        {/* grounding shadow — pools the fan onto the card like objects on a desk */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-3 left-1/2 z-0 h-10 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/30 blur-2xl transition-all duration-500 group-hover:w-[64%] group-hover:bg-black/40"
        />
        <div className="relative z-10 -mr-[11%] w-[35%] shrink-0 -rotate-[10deg] translate-y-6 transition-transform duration-500 group-hover:-rotate-[7deg] group-hover:translate-y-4">
          <Image
            src={shots[0]}
            alt={`${project.title} screen`}
            width={1320}
            height={2868}
            priority={priority}
            className="w-full rounded-[1.2rem] shadow-[0_22px_50px_rgba(0,0,0,0.42)] ring-1 ring-white/15"
            sizes="200px"
          />
        </div>
        <div className="relative z-20 w-[46%] shrink-0 transition-transform duration-500 group-hover:-translate-y-1.5">
          <Image
            src={shots[1] ?? shots[0]}
            alt={`${project.title} screen`}
            width={1320}
            height={2868}
            priority={priority}
            className="w-full rounded-[1.4rem] shadow-[0_36px_78px_rgba(0,0,0,0.55)] ring-1 ring-white/25"
            sizes="260px"
          />
        </div>
        <div className="relative z-10 -ml-[11%] w-[35%] shrink-0 rotate-[10deg] translate-y-6 transition-transform duration-500 group-hover:rotate-[7deg] group-hover:translate-y-4">
          <Image
            src={shots[2] ?? shots[0]}
            alt={`${project.title} screen`}
            width={1320}
            height={2868}
            priority={priority}
            className="w-full rounded-[1.2rem] shadow-[0_22px_50px_rgba(0,0,0,0.42)] ring-1 ring-white/15"
            sizes="200px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full rotate-1 transition-transform duration-500 group-hover:rotate-0 ${className}`}>
      {/* grounding shadow — settles the browser card onto the tile */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-4 left-1/2 h-10 w-[82%] -translate-x-1/2 rounded-[50%] bg-black/25 blur-2xl transition-all duration-500 group-hover:bg-black/35"
      />
      <div
        className="relative rounded-2xl p-2 shadow-[0_34px_74px_rgba(0,0,0,0.5)] ring-1 ring-white/15"
        style={{ background: `${fg}14` }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2 w-2 rounded-full" style={{ background: `${fg}4D` }} />
          <span className="h-2 w-2 rounded-full" style={{ background: `${fg}33` }} />
          <span className="h-2 w-2 rounded-full" style={{ background: `${fg}26` }} />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={`${project.title} website`}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </div>
      </div>
    </div>
  );
}
