import { Car, Clock, Map } from 'lucide-react';

interface OtherItem {
  icon: typeof Car;
  label: string;
  value: string;
}

const ITEMS: OtherItem[] = [
  { icon: Car, label: 'Carné de conducir', value: 'Sí' },
  { icon: Clock, label: 'Disponibilidad', value: 'Completa' },
  { icon: Map, label: 'Movilidad', value: 'Nacional' },
];

export function OtherData() {
  return (
    <div className="space-y-3 text-sm">
      {ITEMS.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon size={16} className="text-medical-500 shrink-0" aria-hidden="true" />
          <span>
            {label}: {value}
          </span>
        </div>
      ))}
    </div>
  );
}