interface HeaderProps {
  name: string;
  title: string;
}

export function Header({ name, title }: HeaderProps) {
  return (
    <header className="mb-4 border-b-2 border-medical-500 pb-3">
      <h1 className="text-3xl font-bold text-medical-900 tracking-tight mb-1">{name}</h1>
      <h2 className="text-base text-[#475569] font-medium uppercase tracking-wider">{title}</h2>
    </header>
  );
}
