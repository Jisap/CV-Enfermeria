import { forwardRef } from 'react';
import { MainContent } from './MainContent';
import { Sidebar } from './Sidebar';

// Importaciones individuales para el layout móvil optimizado

import { ContactInfo } from './sidebar/ContactInfo';
import { SkillTags } from './sidebar/SkillTags';
import { DigitalSkills } from './sidebar/DigitalSkills';
import { Languages } from './sidebar/Languages';
import { OtherData } from './sidebar/OtherData';
import { Education } from './main/Education';
import { Experience } from './main/Experience';
import { RgpdFooter } from './main/RgpdFooter';

const PROFILE_TEXT =
  'Recién graduado en Enfermería con sólida formación teórico-práctica adquirida durante el Grado y las prácticas clínicas en distintas unidades hospitalarias y de Atención Primaria. Comprometido con el cuidado integral del paciente, con capacidad de trabajo en equipo interdisciplinar y orientado al aprendizaje continuo. Busco incorporarme a la bolsa de trabajo para iniciar mi trayectoria profesional aportando dedicación, rigor y vocación de servicio en el ámbito sanitario.';

/**
 * Layout principal del CV para visualización en pantalla.
 * En escritorio muestra el formato A4 tradicional de dos columnas.
 * En móvil muestra una versión adaptada con diseño premium y orden óptimo de lectura.
 */
export const CVDocument = forwardRef<HTMLDivElement>(function CVDocument(_props, ref) {
  return (
    <div ref={ref}>
      {/* 1. LAYOUT DE ESCRITORIO (A4 Tradicional) */}
      <div
        className="hidden md:grid max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] grid-cols-12"
        style={{ breakInside: 'avoid' }}
      >
        <Sidebar className="col-span-4 bg-medical-900 text-white p-6 print:bg-medical-900 print:text-white print:break-inside-avoid" />
        <MainContent className="col-span-8 p-6 print:p-6 print:break-inside-avoid" />
      </div>

      {/* 2. LAYOUT MÓVIL OPTIMIZADO (Diseño moderno premium) */}
      <div className="block md:hidden max-w-md mx-auto space-y-6">

        {/* Cabecera / Tarjeta de Presentación */}
        <div className="bg-gradient-to-br from-medical-900 to-medical-700 text-white rounded-3xl p-6 shadow-lg flex flex-col items-center text-center space-y-4">
          <div className="relative w-28 h-28 rounded-full border-4 border-medical-500 overflow-hidden bg-medical-50 shadow-md">
            <img
              src="/Raul.jpg"
              alt="Raúl Matos Guzmán"
              className="w-full h-full object-contain object-center"
              crossOrigin="anonymous"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Raúl Matos Guzmán</h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-medical-100 mt-1">
              Graduado en Enfermería
            </p>
          </div>
        </div>

        {/* Sección de Contacto Rápido */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-widest text-medical-700 mb-3 border-b pb-1">
            Contacto
          </h2>
          <ContactInfo />
        </div>

        {/* Perfil Profesional */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-widest text-medical-700 mb-3 border-b pb-1">
            Perfil Profesional
          </h2>
          <p className="text-[#334155] leading-relaxed text-sm text-justify">
            {PROFILE_TEXT}
          </p>
        </div>

        {/* Experiencia Clínica */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <Experience />
        </div>

        {/* Formación Académica */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <Education />
        </div>

        {/* Competencias e Idiomas */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-5">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-medical-700 mb-3 border-b pb-1">
              Competencias
            </h2>
            <SkillTags />
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-medical-700 mb-3 border-b pb-1">
              Digitales
            </h2>
            <DigitalSkills />
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-medical-700 mb-3 border-b pb-1">
              Idiomas
            </h2>
            <Languages />
          </div>
        </div>

        {/* Otros Datos */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-widest text-medical-700 mb-3 border-b pb-1">
            Otros Datos
          </h2>
          <OtherData />
        </div>

        {/* Footer RGPD */}
        <div className="px-4 text-[10px] text-slate-400 text-center">
          <RgpdFooter />
        </div>
      </div>
    </div>
  );
});