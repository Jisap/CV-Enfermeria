interface ExperienceItemProps {
  title: string;
  period: string;
  center: string;
  units: string[];
  highlights: string[];
}

export function ExperienceItem({
  title,
  period,
  center,
  units,
  highlights,
}: ExperienceItemProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-baseline">
        <h4 className="font-bold text-[#1e293b] text-sm">{title}</h4>
        <span className="text-xs font-semibold text-medical-700">{period}</span>
      </div>
      <div className="text-xs text-[#475569] mb-1.5 italic">{center}</div>

      <div className="text-[11px] font-bold text-medical-700 uppercase mb-1">Unidades / Áreas:</div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 mb-2">
        {units.map((unit) => (
          <div key={unit} className="flex items-center gap-1.5 text-xs text-[#334155]">
            <span className="w-1.5 h-1.5 rounded-full bg-medical-500 shrink-0" aria-hidden="true" />
            <span className="truncate">{unit}</span>
          </div>
        ))}
      </div>

      <div className="text-[11px] font-bold text-medical-700 uppercase mb-1">Actividades destacadas:</div>
      <ul className="list-disc list-inside text-xs text-[#334155] space-y-0.5 ml-1">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}