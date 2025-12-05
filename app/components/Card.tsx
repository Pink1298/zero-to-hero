import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlighted' | 'gradient' | 'minimal';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
}: CardProps) {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variantStyles = {
    default: 'bg-white border-2 border-slate-200 hover:shadow-lg hover:border-slate-300',
    highlighted: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-lg',
    gradient: 'bg-gradient-to-br from-slate-800 to-slate-900 text-white border-2 border-slate-700',
    minimal: 'bg-transparent border-0',
  };

  const paddingStyles = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}
