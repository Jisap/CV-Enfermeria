import { Award, Calendar, Mail, MapPin, Phone } from 'lucide-react';

interface ContactItem {
  icon: typeof MapPin;
  value: string;
}

const ITEMS: ContactItem[] = [
  { icon: MapPin, value: 'Málaga, España' },
  { icon: Phone, value: '619 00 91 18' },
  { icon: Mail, value: 'jisapjisap2@gmail.com' },
  { icon: Calendar, value: '18/08/2004' },
  { icon: Award, value: 'Col. Enfermería: [23048]' },
];

export function ContactInfo() {
  return (
    <div className="space-y-3 text-sm">
      {ITEMS.map(({ icon: Icon, value }) => (
        <div key={value} className="flex items-center gap-3">
          <Icon size={16} className="text-medical-500 shrink-0" aria-hidden="true" />
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}