import { Code } from 'lucide-react';

const TOOLS = [
  'Historia clínica Diraya',
  'Microsoft Office',
  'Bases de datos científicas',
];

export function DigitalSkills() {
  return (
    <ul className="space-y-2 text-sm">
      {TOOLS.map((tool) => (
        <li key={tool} className="flex items-start gap-2">
          <Code size={16} className="mt-0.5 text-medical-500 shrink-0" aria-hidden="true" />
          <span>{tool}</span>
        </li>
      ))}
    </ul>
  );
}