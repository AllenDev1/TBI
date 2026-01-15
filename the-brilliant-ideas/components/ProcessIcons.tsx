import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const SearchIcon = ({ className = "w-12 h-12", color = "#F97316" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M16 16l5 5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="11" cy="11" r="4" fill={color} opacity="0.2"/>
  </svg>
);

export const PlanningIcon = ({ className = "w-12 h-12", color = "#F97316" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <line x1="8" y1="8" x2="16" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="16" x2="13" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x="4" y="3" width="16" height="5" fill={color} opacity="0.2" rx="2"/>
  </svg>
);

export const DesignIcon = ({ className = "w-12 h-12", color = "#F97316" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} opacity="0.2"/>
    <path d="M2 17l10 5 10-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12l10 5 10-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DevelopmentIcon = ({ className = "w-12 h-12", color = "#F97316" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M8 9l-3 3 3 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 9l3 3-3 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="13" y1="8" x2="11" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x="3" y="3" width="18" height="4" fill={color} opacity="0.2" rx="2"/>
  </svg>
);

export const TestingIcon = ({ className = "w-12 h-12", color = "#F97316" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 3h6v3H9V3z" stroke={color} strokeWidth="2" fill={color} opacity="0.2"/>
    <path d="M8 6h8l2 15H6l2-15z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="14" r="3" fill={color} opacity="0.3"/>
    <path d="M10 6h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const LaunchIcon = ({ className = "w-12 h-12", color = "#F97316" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L12 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2L9 5M12 2L15 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <ellipse cx="12" cy="18" rx="8" ry="4" fill={color} opacity="0.2"/>
    <path d="M8 10c-1 0-2 .5-3 1.5-1 1-1.5 2-1.5 3v3c0 1 .5 2 1.5 3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 10c1 0 2 .5 3 1.5 1 1 1.5 2 1.5 3v3c0 1-.5 2-1.5 3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="14" r="1.5" fill={color}/>
    <circle cx="16" cy="14" r="1.5" fill={color}/>
  </svg>
);
