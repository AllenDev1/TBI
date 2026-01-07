import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date?: string;
  href?: string;
}

export default function ProjectCard({ title, description, image, tags, date, href = '#' }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="neu neu-hover rounded-2xl overflow-hidden transition-all duration-500">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-heading group-hover:text-orange-primary transition-colors">
              {title}
            </h3>
            {date && (
              <span className="text-xs text-muted font-medium">{date}</span>
            )}
          </div>
          <p className="text-body mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full text-orange-primary neu-inset"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
