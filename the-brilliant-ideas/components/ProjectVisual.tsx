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
        <div className="relative z-0 -mr-[7%] w-[36%] shrink-0 -rotate-[9deg] translate-y-5 transition-transform duration-500 group-hover:-rotate-[6deg]">
          <Image
            src={shots[0]}
            alt={`${project.title} screen`}
            width={1320}
            height={2868}
            priority={priority}
            className="w-full rounded-[1.2rem] shadow-[0_18px_44px_rgba(0,0,0,0.35)] ring-1 ring-white/20"
            sizes="200px"
          />
        </div>
        <div className="relative z-10 w-[42%] shrink-0">
          <Image
            src={shots[1] ?? shots[0]}
            alt={`${project.title} screen`}
            width={1320}
            height={2868}
            priority={priority}
            className="w-full rounded-[1.3rem] shadow-[0_26px_64px_rgba(0,0,0,0.45)] ring-1 ring-white/25"
            sizes="240px"
          />
        </div>
        <div className="relative z-0 -ml-[7%] w-[36%] shrink-0 rotate-[9deg] translate-y-5 transition-transform duration-500 group-hover:rotate-[6deg]">
          <Image
            src={shots[2] ?? shots[0]}
            alt={`${project.title} screen`}
            width={1320}
            height={2868}
            priority={priority}
            className="w-full rounded-[1.2rem] shadow-[0_18px_44px_rgba(0,0,0,0.35)] ring-1 ring-white/20"
            sizes="200px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`mx-auto w-full rotate-1 transition-transform duration-500 group-hover:rotate-0 ${className}`}>
      <div
        className="rounded-2xl p-2 shadow-[0_26px_64px_rgba(0,0,0,0.4)] ring-1 ring-white/15"
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
