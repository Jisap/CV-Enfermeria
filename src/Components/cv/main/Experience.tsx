import { Briefcase } from 'lucide-react';
import { ExperienceItem } from './ExperienceItem';
import { SectionTitle } from './SectionTitle';

const ROTATION_UNITS = [
  'Urgencias Hospitalarias',
  'Cirugía Cardiovascular',
  'Neurocirugía',
  'Quirófano de especialidades',
  'Planta de Oncología',
  'Digestivo y Endoscopia',
  'UCI / Cuidados Intensivos',
  '061 – Emergencias',
  'Neonatología (H. Materno Infantil)',
  'Atención Primaria (C.S. Capuchinos / USMC)',
];

const ROTATION_HIGHLIGHTS = [
  'Cuidados pre y postoperatorios integrales.',
  'Administración de medicación IV/IM y control de constantes vitales.',
  'Manejo seguro de catéteres, sondajes y dispositivos médicos.',
  'Educación sanitaria y acompañamiento al paciente y su familia.',
];

const TOCOLOGIA_UNITS = [
  'Quirófano de Cesáreas de Urgencia y Programadas',
  'Área Quirúrgica Ginecológica',
  'Unidad de Recuperación Postanestésica (URPA Obstétrica)',
  'Paritorio y Dilatación',
];

const TOCOLOGIA_HIGHLIGHTS = [
  'Instrumentación y asistencia circulante en cesáreas e intervenciones ginecológicas.',
  'Preparación del campo quirúrgico, control de esterilidad y conteo de material/gasas.',
  'Recepción inmediata, valoración y estabilización inicial del recién nacido junto al equipo.',
  'Monitorización hemodinámica materna intraoperatoria y vigilancia postanestésica inmediata.',
];

export function Experience() {
  return (
    <section className="space-y-3">
      <div>
        <SectionTitle icon={Briefcase}>Experiencia Laboral</SectionTitle>
        <ExperienceItem
          title="Quirófano de Tocología / Ginecología"
          period="Julio 2026 – Septiembre 2026"
          center="Hospital Materno Infantil de Málaga"
          units={TOCOLOGIA_UNITS}
          highlights={TOCOLOGIA_HIGHLIGHTS}
        />
      </div>

      <div>
        <SectionTitle icon={Briefcase}>Prácticum Clínico · Formación Práctica</SectionTitle>
        <ExperienceItem
          title="Prácticas Clínicas Rotatorias"
          period="2024 – 2026"
          center="Hospital Regional Universitario & Centros de Salud, Málaga"
          units={ROTATION_UNITS}
          highlights={ROTATION_HIGHLIGHTS}
        />
      </div>
    </section>
  );
}