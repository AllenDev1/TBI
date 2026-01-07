import React from 'react';
import Image from 'next/image';
import GlassCard from './GlassCard';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export default function TestimonialCard({ quote, author, role, company, avatar }: TestimonialCardProps) {
  return (
    <GlassCard>
      <div className="flex flex-col h-full">
        <p className="text-lg text-gray-600 mb-6 italic flex-grow">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          {avatar && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={avatar}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-800">{author}</p>
            <p className="text-sm text-gray-600">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
