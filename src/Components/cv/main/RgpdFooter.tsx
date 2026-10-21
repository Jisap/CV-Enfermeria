const RGPD_TEXT =
  'Autorizo el tratamiento de mis datos personales de acuerdo con la normativa vigente (RGPD) para procesos de selección.';

export function RgpdFooter() {
  return (
    <footer className="mt-3 pt-2 border-t border-[#e2e8f0] text-[9.5px] text-[#94a3b8] text-center print:mt-2">
      {RGPD_TEXT}
    </footer>
  );
}