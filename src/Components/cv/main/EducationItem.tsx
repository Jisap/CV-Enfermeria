import type { ReactNode } from 'react';

interface EducationItemProps {
  title: string;
  period: string;
  institution: string;
  /** Badge opcional (ej. "Nota media: 9,98 / 10"). */
  badge?: ReactNode;
}

export function EducationItem({ title, period, institution, badge }: EducationItemProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <h4 className="font-bold text-[#1e293b]">{title}</h4>
        <span className="text-sm font-semibold text-medical-700">{period}</span>
      </div>
      <div className="text-sm text-[#475569] mb-2">{institution}</div>
      {badge}
    </div>
  );
}