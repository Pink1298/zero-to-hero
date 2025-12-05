import React from 'react';

export interface ProgressProps {
  value: number;
  max?: number;
  color?: 'blue' | 'emerald' | 'orange' | 'red' | 'purple';
  showLabel?: boolean;
  animated?: boolean;
  className?: string;
}

export function Progress({
  value,
  max = 100,
  color = 'blue',
  showLabel = true,
  animated = true,
  className = '',
}: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const colorStyles = {
    blue: 'bg-blue-600',
    emerald: 'bg-emerald-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600',
  };

  return (
    <div className={className}>
      <div className="rounded-full bg-slate-200 h-3 overflow-hidden">
        <div
          className={`h-full ${colorStyles[color]} transition-all duration-500 ${animated ? 'animate-pulse' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <p className="text-xs font-semibold text-slate-600 mt-1">
          {Math.round(percentage)}%
        </p>
      )}
    </div>
  );
}
