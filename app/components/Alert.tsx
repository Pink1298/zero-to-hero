import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  onClose?: () => void;
  className?: string;
}

export function Alert({
  children,
  type = 'info',
  title,
  onClose,
  className = '',
}: AlertProps) {
  const typeConfig = {
    info: {
      bg: 'bg-blue-50 border-blue-200',
      icon: 'text-blue-600',
      title: 'text-blue-900',
      text: 'text-blue-800',
    },
    success: {
      bg: 'bg-emerald-50 border-emerald-200',
      icon: 'text-emerald-600',
      title: 'text-emerald-900',
      text: 'text-emerald-800',
    },
    warning: {
      bg: 'bg-orange-50 border-orange-200',
      icon: 'text-orange-600',
      title: 'text-orange-900',
      text: 'text-orange-800',
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      icon: 'text-red-600',
      title: 'text-red-900',
      text: 'text-red-800',
    },
  };

  const config = typeConfig[type];

  const icons = {
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    warning: 'M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    error: 'M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  };

  return (
    <div className={`rounded-lg border-2 ${config.bg} p-4 ${className}`}>
      <div className="flex gap-3">
        <svg className={`h-6 w-6 flex-shrink-0 ${config.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[type]} />
        </svg>
        <div className="flex-1">
          {title && <h3 className={`font-bold ${config.title}`}>{title}</h3>}
          <p className={`text-sm ${config.text}`}>{children}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`flex-shrink-0 font-bold ${config.icon} hover:opacity-75 transition-opacity`}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
