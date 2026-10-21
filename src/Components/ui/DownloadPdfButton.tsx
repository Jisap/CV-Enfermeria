import { Download } from 'lucide-react';

interface DownloadPdfButtonProps {
  isGenerating: boolean;
  onClick: () => void;
}

/**
 * Botón flotante para descargar el CV en PDF.
 * Muestra un spinner mientras se genera. Se oculta al imprimir (clase `no-print`).
 */
export function DownloadPdfButton({ isGenerating, onClick }: DownloadPdfButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isGenerating}
      aria-label="Descargar CV en PDF"
      className="no-print fixed bottom-8 right-8 bg-medical-700 hover:bg-medical-900 active:bg-medical-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 z-50 font-semibold cursor-pointer touch-manipulation"
    >
      {isGenerating ? <Spinner label="Generando..." /> : <ReadyState />}
    </button>
  );
}

function Spinner({ label }: { label: string }) {
  return (
    <>
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {label}
    </>
  );
}

function ReadyState() {
  return (
    <>
      <Download size={20} aria-hidden="true" />
      Descargar PDF
    </>
  );
}