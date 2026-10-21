interface Language {
  name: string;
  level: string;
}

const LANGUAGES: Language[] = [
  { name: 'Español', level: 'Lengua materna' },
  { name: 'Inglés', level: 'Nivel B1/B2 (Cert. Aptis SOL)' },
];

export function Languages() {
  return (
    <div className="space-y-3 text-sm">
      {LANGUAGES.map((lang) => (
        <div key={lang.name}>
          <div className="font-semibold">{lang.name}</div>
          <div className="text-medical-500 text-xs">{lang.level}</div>
        </div>
      ))}
    </div>
  );
}