const SKILLS = [
  'Trabajo en equipo',
  'Empatía',
  'Gestión del estrés',
  'Comunicación asertiva',
  'Adaptabilidad',
];

export function SkillTags() {
  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <span
          key={skill}
          className="bg-medical-700/50 text-xs px-3 py-1.5 rounded-md border border-medical-700"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}