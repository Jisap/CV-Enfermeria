import { useCallback, useState } from 'react';
import { jsPDF } from 'jspdf';
import { domToPng } from 'modern-screenshot';

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const DEFAULT_FILENAME = 'CV_Raul_Matos.pdf';

interface UseCVPdfOptions {
  /** Nombre del archivo PDF resultante. */
  filename?: string;
}

/**
 * Hook que captura un elemento del DOM y lo exporta a PDF en formato A4.
 * Usa `modern-screenshot` (soporta oklch) y `jsPDF`.
 */
export function useCVPdf(options: UseCVPdfOptions = {}) {
  const { filename = DEFAULT_FILENAME } = options;
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePdf = useCallback(
    async (target: HTMLElement | null): Promise<boolean> => {
      if (!target) {
        console.warn('[useCVPdf] No target element provided');
        return false;
      }

      setIsGenerating(true);

      try {
        const dataUrl = await domToPng(target, {
          scale: 2,
          features: {
            removeControlCharacter: true,
          },
          filter: (node) => {
            if (node instanceof HTMLElement && node.classList.contains('no-print')) {
              return false;
            }
            return true;
          },
        });

        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
          compress: true,
        });

        // Crear una imagen auxiliar para conocer sus dimensiones reales y mantener el aspect ratio exacto
        await new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const aspect = img.naturalHeight / img.naturalWidth;
            const contentHeightMm = A4_WIDTH_MM * aspect;

            // Siempre arrancamos pegados al borde izquierdo (x = 0) y ancho completo (210mm)
            // para que la columna oscura de la izquierda no tenga ningún margen blanco
            if (contentHeightMm <= A4_HEIGHT_MM) {
              pdf.addImage(dataUrl, 'PNG', 0, 0, A4_WIDTH_MM, contentHeightMm);
            } else {
              pdf.addImage(dataUrl, 'PNG', 0, 0, A4_WIDTH_MM, A4_HEIGHT_MM);
            }
            resolve();
          };
          img.onerror = reject;
          img.src = dataUrl;
        });

        pdf.save(filename);

        return true;
      } catch (error) {
        console.error('[useCVPdf] Error al generar el PDF:', error);
        return false;
      } finally {
        setIsGenerating(false);
      }
    },
    [filename],
  );

  return { generatePdf, isGenerating };
}