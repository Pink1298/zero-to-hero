import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'emerald' | 'orange' | 'red' | 'purple' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  color = 'blue',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseStyles = 'rounded-full font-semibold inline-flex items-center justify-center';

  const colorStyles = {
    blue: 'bg-blue-100 text-blue-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700',
    slate: 'bg-slate-200 text-slate-700',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
  };

  return (
    <span className={`${baseStyles} ${colorStyles[color]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
}
