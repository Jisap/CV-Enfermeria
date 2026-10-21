// import { Phone, Mail, MapPin, Calendar, Award, Briefcase, BookOpen, Code, Car, Clock, Map, CheckCircle, Download } from 'lucide-react';
// import { useRef, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import { domToPng } from 'modern-screenshot';

// export default function App() {
//   const componentRef = useRef<HTMLDivElement>(null);
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleDownloadPDF = async () => {
//     const element = componentRef.current;
//     if (!element) return;

//     setIsGenerating(true);

//     try {
//       // 1. Capturar el DOM como imagen PNG (modern-screenshot SÍ soporta oklch)
//       const dataUrl = await domToPng(element, {
//         scale: 2, // Alta calidad
//         features: {
//           // Ignorar elementos que no queremos en el PDF
//           removeControlCharacter: true,
//         },
//         filter: (node) => {
//           // Excluir el botón de descarga del PDF
//           if (node instanceof HTMLElement && node.classList.contains('no-print')) {
//             return false;
//           }
//           return true;
//         }
//       });

//       // 2. Crear el PDF con jsPDF
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4',
//         compress: true
//       });

//       // 3. Calcular dimensiones para que la imagen ocupe toda la página A4
//       const imgWidth = 210; // A4 width in mm
//       const imgHeight = 297; // A4 height in mm

//       // 4. Añadir la imagen al PDF
//       pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);

//       // 5. Descargar el PDF
//       pdf.save('CV_Raul_Matos.pdf');

//     } catch (error) {
//       console.error('Error al generar el PDF:', error);
//       alert('Hubo un error al generar el PDF. Inténtalo de nuevo.');
//     } finally {
//       setIsGenerating(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#f1f5f9] py-8 px-4 print:p-0 print:bg-white print:min-h-0">

//       {/* Botón flotante con estado de carga */}
//       <button
//         onClick={handleDownloadPDF}
//         disabled={isGenerating}
//         className="no-print fixed bottom-8 right-8 bg-medical-700 hover:bg-medical-900 active:bg-medical-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 z-50 font-semibold cursor-pointer touch-manipulation"
//       >
//         {isGenerating ? (
//           <>
//             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generando...
//           </>
//         ) : (
//           <>
//             <Download size={20} />
//             Descargar PDF
//           </>
//         )}
//       </button>

//       {/* Contenedor principal - Sombra shadow-2xl cambiada a rgba */}
//       <div
//         ref={componentRef}
//         className="max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] print:shadow-none print:max-w-none print:min-h-0 grid grid-cols-1 md:grid-cols-12 print:grid-cols-12"
//         style={{ breakInside: 'avoid' }}
//       >
//         {/* ================= COLUMNA IZQUIERDA (Sidebar) ================= */}
//         <aside className="md:col-span-4 print:col-span-4 bg-medical-900 text-white p-8 print:bg-medical-900 print:text-white print:break-inside-avoid">

//           {/* FOTO DE PERFIL - Sombra shadow-xl cambiada a rgba */}
//           <div className="flex justify-center items-center mb-8">
//             <div className="relative w-36 h-36 rounded-full border-4 border-medical-500 overflow-hidden bg-medical-50 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] flex justify-center items-center">
//               <img
//                 src="/Raul.jpg"
//                 alt="Raúl Matos Guzmán"
//                 className="w-full h-full object-contain object-center"
//                 crossOrigin="anonymous"
//               />
//             </div>
//           </div>

//           {/* Contacto */}
//           <div className="mb-8">
//             <h3 className="text-xs font-bold uppercase tracking-widest text-medical-100 mb-4 border-b border-medical-700 pb-2">Contacto</h3>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center gap-3"><MapPin size={16} className="text-medical-500 shrink-0" /> Málaga, España</div>
//               <div className="flex items-center gap-3"><Phone size={16} className="text-medical-500 shrink-0" /> 619 00 91 18</div>
//               <div className="flex items-center gap-3"><Mail size={16} className="text-medical-500 shrink-0" /> jisapjisap2@gmail.com</div>
//               <div className="flex items-center gap-3"><Calendar size={16} className="text-medical-500 shrink-0" /> 18/08/2004</div>
//               <div className="flex items-center gap-3"><Award size={16} className="text-medical-500 shrink-0" /> Col. Enfermería: [XXXXX]</div>
//             </div>
//           </div>

//           {/* Competencias Personales */}
//           <div className="mb-8">
//             <h3 className="text-xs font-bold uppercase tracking-widest text-medical-100 mb-4 border-b border-medical-700 pb-2">Competencias</h3>
//             <div className="flex flex-wrap gap-2">
//               {['Trabajo en equipo', 'Empatía', 'Gestión del estrés', 'Comunicación asertiva', 'Adaptabilidad'].map((skill) => (
//                 <span key={skill} className="bg-medical-700/50 text-xs px-3 py-1.5 rounded-md border border-medical-700">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Competencias Digitales */}
//           <div className="mb-8">
//             <h3 className="text-xs font-bold uppercase tracking-widest text-medical-100 mb-4 border-b border-medical-700 pb-2">Digitales</h3>
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-start gap-2"><Code size={16} className="mt-0.5 text-medical-500 shrink-0" /> Historia clínica Diraya</li>
//               <li className="flex items-start gap-2"><Code size={16} className="mt-0.5 text-medical-500 shrink-0" /> Microsoft Office</li>
//               <li className="flex items-start gap-2"><Code size={16} className="mt-0.5 text-medical-500 shrink-0" /> Bases de datos científicas</li>
//             </ul>
//           </div>

//           {/* Idiomas */}
//           <div className="mb-8">
//             <h3 className="text-xs font-bold uppercase tracking-widest text-medical-100 mb-4 border-b border-medical-700 pb-2">Idiomas</h3>
//             <div className="space-y-3 text-sm">
//               <div>
//                 <div className="font-semibold">Español</div>
//                 <div className="text-medical-100 text-xs">Lengua materna</div>
//               </div>
//               <div>
//                 <div className="font-semibold">Inglés</div>
//                 <div className="text-medical-100 text-xs">Nivel B1/B2 (Cert. Aptis SOL)</div>
//               </div>
//             </div>
//           </div>

//           {/* Otros Datos */}
//           <div>
//             <h3 className="text-xs font-bold uppercase tracking-widest text-medical-100 mb-4 border-b border-medical-700 pb-2">Otros Datos</h3>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center gap-2"><Car size={16} className="text-medical-500 shrink-0" /> Carné de conducir: Sí</div>
//               <div className="flex items-center gap-2"><Clock size={16} className="text-medical-500 shrink-0" /> Disponibilidad: Completa</div>
//               <div className="flex items-center gap-2"><Map size={16} className="text-medical-500 shrink-0" /> Movilidad: Nacional</div>
//             </div>
//           </div>
//         </aside>

//         {/* ================= COLUMNA DERECHA (Principal) ================= */}
//         <main className="md:col-span-8 print:col-span-8 p-8 print:p-8 print:break-inside-avoid">

//           {/* Header */}
//           <header className="mb-8 border-b-2 border-medical-500 pb-6">
//             <h1 className="text-4xl font-bold text-medical-900 tracking-tight mb-2">Raúl Matos Guzmán</h1>
//             <h2 className="text-xl text-[#475569] font-medium uppercase tracking-wider">Graduado en Enfermería</h2>
//           </header>

//           {/* Perfil */}
//           <section className="mb-8">
//             <h3 className="flex items-center gap-2 text-medical-700 font-bold uppercase tracking-wider text-sm mb-3">
//               <CheckCircle size={18} /> Perfil Profesional
//             </h3>
//             <p className="text-[#334155] leading-relaxed text-sm text-justify">
//               Recién graduado en Enfermería con sólida formación teórico-práctica adquirida durante el Grado y las prácticas clínicas en distintas unidades hospitalarias y de Atención Primaria. Comprometido con el cuidado integral del paciente, con capacidad de trabajo en equipo interdisciplinar y orientado al aprendizaje continuo. Busco incorporarme a la bolsa de trabajo para iniciar mi trayectoria profesional aportando dedicación, rigor y vocación de servicio en el ámbito sanitario.
//             </p>
//           </section>

//           {/* Formación */}
//           <section className="mb-8">
//             <h3 className="flex items-center gap-2 text-medical-700 font-bold uppercase tracking-wider text-sm mb-4">
//               <BookOpen size={18} /> Formación Académica
//             </h3>

//             <div className="mb-5">
//               <div className="flex justify-between items-baseline mb-1">
//                 <h4 className="font-bold text-[#1e293b]">Grado en Enfermería</h4>
//                 <span className="text-sm font-semibold text-medical-700">2022 – 2026</span>
//               </div>
//               <div className="text-sm text-[#475569] mb-2">Facultad de Ciencias de la Salud, Málaga</div>
//               <span className="inline-flex items-center gap-1 bg-[#f0fdf4] text-[#15803d] text-xs font-bold px-3 py-1 rounded-full border border-[#bbf7d0]">
//                 <Award size={14} /> Nota media: 9,98 / 10
//               </span>
//             </div>

//             <div>
//               <div className="flex justify-between items-baseline mb-1">
//                 <h4 className="font-bold text-[#1e293b]">Bachillerato / Ciclo Formativo</h4>
//                 <span className="text-sm font-semibold text-medical-700">2022</span>
//               </div>
//               <div className="text-sm text-[#475569]">Colegio Salesianos, Málaga</div>
//             </div>
//           </section>

//           {/* Experiencia */}
//           <section>
//             <h3 className="flex items-center gap-2 text-medical-700 font-bold uppercase tracking-wider text-sm mb-4">
//               <Briefcase size={18} /> Experiencia Clínica · Practicum
//             </h3>

//             <div className="mb-4">
//               <div className="flex justify-between items-baseline mb-2">
//                 <h4 className="font-bold text-[#1e293b]">Prácticas Clínicas Rotatorias</h4>
//                 <span className="text-sm font-semibold text-medical-700">2023 – 2026</span>
//               </div>
//               <div className="text-sm text-[#475569] mb-3 italic">Hospital Regional Universitario & Centros de Salud, Málaga</div>

//               <div className="text-xs font-bold text-medical-700 uppercase mb-2">Unidades de rotación:</div>
//               <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
//                 {[
//                   'Urgencias Hospitalarias', 'Cirugía Cardiovascular', 'Neurocirugía',
//                   'Quirófano de especialidades', 'Planta de Oncología', 'Digestivo y Endoscopia',
//                   'UCI / Cuidados Intensivos', '061 – Emergencias', 'Neonatología (H. Materno Infantil)',
//                   'Atención Primaria (C.S. Capuchinos / USMC)'
//                 ].map((unit) => (
//                   <div key={unit} className="flex items-center gap-2 text-sm text-[#334155]">
//                     <span className="w-1.5 h-1.5 rounded-full bg-medical-500 shrink-0"></span>
//                     {unit}
//                   </div>
//                 ))}
//               </div>

//               <div className="text-xs font-bold text-medical-700 uppercase mb-2">Actividades destacadas:</div>
//               <ul className="list-disc list-inside text-sm text-[#334155] space-y-1 ml-1">
//                 <li>Cuidados pre y postoperatorios integrales.</li>
//                 <li>Administración de medicación IV/IM y control de constantes vitales.</li>
//                 <li>Manejo seguro de catéteres, sondajes y dispositivos médicos.</li>
//                 <li>Educación sanitaria y acompañamiento al paciente y su familia.</li>
//               </ul>
//             </div>
//           </section>

//           {/* Footer RGPD */}
//           <footer className="mt-8 pt-4 border-t border-[#e2e8f0] text-[10px] text-[#94a3b8] text-center print:mt-4">
//             Autorizo el tratamiento de mis datos personales de acuerdo con la normativa vigente (RGPD) para procesos de selección.
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useRef } from 'react';

import { useCVPdf } from './hooks/useCVPdf';
import { CVDocument } from './Components/cv/CVDocument';
import { CVPdfDocument } from './Components/cv/CVPdfDocument';
import { DownloadPdfButton } from './Components/ui/DownloadPdfButton';

export default function App() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const { generatePdf, isGenerating } = useCVPdf();

  const handleDownloadPDF = async () => {
    const ok = await generatePdf(pdfRef.current);
    if (!ok) {
      alert('Hubo un error al generar el PDF. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-8 px-4 print:p-0 print:bg-white print:min-h-0">
      <DownloadPdfButton
        isGenerating={isGenerating}
        onClick={handleDownloadPDF}
      />
      <CVDocument />
      
      {/* Contenedor oculto con el layout A4 rígido para la exportación a PDF */}
      <div className="fixed left-[-9999px] top-[-9999px] pointer-events-none" aria-hidden="true">
        <CVPdfDocument ref={pdfRef} />
      </div>
    </div>
  );
}