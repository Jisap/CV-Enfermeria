import { Education } from './main/Education';
import { Experience } from './main/Experience';
import { Header } from './main/Header';
import { ProfileSummary } from './main/ProfileSummary';
import { RgpdFooter } from './main/RgpdFooter';

const PROFILE_TEXT =
  'Recién graduado en Enfermería con sólida formación teórico-práctica adquirida durante el Grado y las prácticas clínicas en distintas unidades hospitalarias y de Atención Primaria. Comprometido con el cuidado integral del paciente, con capacidad de trabajo en equipo interdisciplinar y orientado al aprendizaje continuo. Busco incorporarme a la bolsa de trabajo para iniciar mi trayectoria profesional aportando dedicación, rigor y vocación de servicio en el ámbito sanitario.';

interface MainContentProps {
  className?: string;
}

export function MainContent({ className = 'md:col-span-8 print:col-span-8 p-8 print:p-8 print:break-inside-avoid' }: MainContentProps) {
  return (
    <main className={className}>
      <Header name="Raúl Matos Guzmán" title="Graduado en Enfermería" />

      <ProfileSummary text={PROFILE_TEXT} />
      <Education />
      <Experience />

      <RgpdFooter />
    </main>
  );
}