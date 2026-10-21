import { forwardRef } from 'react';
import { MainContent } from './MainContent';
import { Sidebar } from './Sidebar';

/**
 * Componente exclusivo para la descarga en PDF.
 * Mantiene un formato A4 rígido (210mm x 297mm) con grilla de 12 columnas fija (4 + 8)
 * sin importar el tamaño de pantalla del dispositivo.
 */
export const CVPdfDocument = forwardRef<HTMLDivElement>(function CVPdfDocument(_props, ref) {
  return (
    <div
      ref={ref}
      className="w-[210mm] bg-white grid grid-cols-12 print:shadow-none"
      style={{ breakInside: 'avoid' }}
    >
      <Sidebar className="col-span-4 bg-medical-900 text-white p-5 print:bg-medical-900 print:text-white print:break-inside-avoid" />
      <MainContent className="col-span-8 p-5 print:p-5 print:break-inside-avoid" />
    </div>
  );
});
