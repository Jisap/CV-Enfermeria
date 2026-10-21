import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  icon: LucideIcon;
  children: ReactNode;
}

/**
 * Título de sección de la columna principal: icono + texto uppercase.
 */
export function SectionTitle({ icon: Icon, children }: SectionTitleProps) {
  return (
    <h3 className="flex items-center gap-2 text-medical-700 font-bold uppercase tracking-wider text-sm mb-3">
      <Icon size={18} aria-hidden="true" />
      {children}
    </h3>
  );
}