import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'relative overflow-hidden rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105 disabled:opacity-60',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 disabled:opacity-60',
    tertiary: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 disabled:opacity-60',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:scale-105 disabled:opacity-60',
    success: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:scale-105 disabled:opacity-60',
    warning: 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-lg hover:scale-105 disabled:opacity-60',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
