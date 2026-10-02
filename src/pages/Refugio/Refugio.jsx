import SocioCard from "../../components/cards/SociosCards";
import { refugios } from "../../data/refugio";

export default function Refugio(){
      return<>
  
 <main className="min-h-screen bg-[#FBF3EA] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-serif text-3xl font-bold text-[#44352D] md:text-4xl">
          Refugios Asociados
        </h1>
        <p className="mt-3 max-w-2xl text-[#6b5c4f]">
          Veterinarias que se suman a Huellas Seguras para atender y dar
          seguimiento a los casos de tu zona.
        </p>
 
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {refugios.map((r) => (
            <SocioCard
              key={r.id}
              {...r}
              onVerInfo={() => console.log("Ver info de", r.nombre)}
            />
          ))}
        </div>
      </div>
    </main>
</>



}