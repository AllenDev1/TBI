import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'glass' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-2xl font-semibold transition-all duration-300 inline-block text-center relative overflow-hidden';

  const variantStyles = {
    primary: 'bg-white text-orange-primary shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff] hover:shadow-[12px_12px_20px_#d1d9e6,-12px_-12px_20px_#ffffff] hover:-translate-y-1 active:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] active:translate-y-0',
    glass: 'bg-white text-heading shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff] hover:shadow-[12px_12px_20px_#d1d9e6,-12px_-12px_20px_#ffffff] hover:-translate-y-1 active:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] active:translate-y-0',
    outline: 'bg-white text-body shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] hover:shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff] hover:text-heading',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
