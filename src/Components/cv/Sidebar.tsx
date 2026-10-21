import { ContactInfo } from './sidebar/ContactInfo';
import { DigitalSkills } from './sidebar/DigitalSkills';
import { Languages } from './sidebar/Languages';
import { OtherData } from './sidebar/OtherData';
import { ProfilePhoto } from './sidebar/ProfilePhoto';
import { SidebarSection } from './sidebar/SidebarSection';
import { SkillTags } from './sidebar/SkillTags';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = 'md:col-span-4 print:col-span-4 bg-medical-900 text-white p-8 print:bg-medical-900 print:text-white print:break-inside-avoid' }: SidebarProps) {
  return (
    <aside className={className}>
      <ProfilePhoto src="/Raul.jpg" alt="Raúl Matos Guzmán" />

      <SidebarSection title="Contacto">
        <ContactInfo />
      </SidebarSection>

      <SidebarSection title="Competencias">
        <SkillTags />
      </SidebarSection>

      <SidebarSection title="Digitales">
        <DigitalSkills />
      </SidebarSection>

      <SidebarSection title="Idiomas">
        <Languages />
      </SidebarSection>

      <div>
        <SidebarSection title="Otros Datos">
          <OtherData />
        </SidebarSection>
      </div>
    </aside>
  );
}