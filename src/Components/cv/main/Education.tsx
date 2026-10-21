import { Award, BookOpen } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { EducationItem } from './EducationItem';
import { SectionTitle } from './SectionTitle';

export function Education() {
  return (
    <section className="mb-4">
      <SectionTitle icon={BookOpen}>Formación Académica</SectionTitle>

      <div className="mb-3">
        <EducationItem
          title="Grado en Enfermería"
          period="2022 – 2026"
          institution="Facultad de Ciencias de la Salud, Málaga"
          badge={
            <Badge>
              <Award size={14} aria-hidden="true" />
              Nota media: 8,64 / 10
            </Badge>
          }
        />
      </div>

      <EducationItem
        title="Bachillerato / Ciclo Formativo"
        period="2022"
        institution="Colegio Salesianos, Málaga"
      />
    </section>
  );
}