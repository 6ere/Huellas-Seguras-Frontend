import { PawPrint } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 px-2 lg:justify-start">
      <PawPrint size={40} className="text-cafe" fill="currentColor" aria-hidden="true" />
      <span className="hidden text-xl font-extrabold leading-5 text-cafe-oscuro lg:inline">
        Huellas<br />Seguras
      </span>
    </div>
  );
}