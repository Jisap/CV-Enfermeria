import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Badge verde para destacar logros (ej. "Nota media: 9,98 / 10").
 * Diseñado para fondos blancos de la columna principal del CV.
 */
export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 bg-[#f0fdf4] text-[#15803d] text-xs font-bold px-3 py-1 rounded-full border border-[#bbf7d0] ${className}`}
    >
      {children}
    </span>
  );
}