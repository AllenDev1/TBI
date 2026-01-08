import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function GlassCard({ children, className = '', hover = true, style }: GlassCardProps) {
  return (
    <div className={`neu ${hover ? 'neu-hover' : ''} p-8 ${className}`} style={style}>
      {children}
    </div>
  );
}
