import type { ReactNode } from 'react';

interface SidebarSectionProps {
  title: string;
  children: ReactNode;
}

/**
 * Sección de la sidebar con título uppercase + línea separadora inferior.
 */
export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="mb-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-medical-100 mb-2 border-b border-medical-700 pb-1">
        {title}
      </h3>
      {children}
    </div>
  );
}