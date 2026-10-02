import VeterinariaCard from "../../components/cards/VeterinaCards";
import { veterinarias } from "../../data/socios";
export default function Veterinaria() {
  return (
    <main className="min-h-screen bg-[#FBF3EA] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-serif text-3xl font-bold text-[#44352D] md:text-4xl">
          Veterinarias aliadas
        </h1>
        <p className="mt-3 max-w-2xl text-[#6b5c4f]">
          Veterinarias que se suman a Huellas Seguras para atender y dar
          seguimiento a los casos de tu zona.
        </p>
 
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {veterinarias.map((v) => (
            <VeterinariaCard
              key={v.id}
              {...v}
              onVerInfo={() => console.log("Ver info de", v.nombre)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}