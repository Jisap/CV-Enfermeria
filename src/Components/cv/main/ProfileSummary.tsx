import { CheckCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

interface ProfileSummaryProps {
  text: string;
}

export function ProfileSummary({ text }: ProfileSummaryProps) {
  return (
    <section className="mb-4">
      <SectionTitle icon={CheckCircle}>Perfil Profesional</SectionTitle>
      <p className="text-[#334155] leading-relaxed text-[13px] text-justify">{text}</p>
    </section>
  );
}