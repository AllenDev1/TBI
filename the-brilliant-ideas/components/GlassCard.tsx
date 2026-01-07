import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div className={`neu ${hover ? 'neu-hover' : ''} p-8 ${className}`}>
      {children}
    </div>
  );
}
