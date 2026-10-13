import AnimalCard from "../cards/AnimalCard";

export default function AnimalGrid({ animales, vista = "grilla", onVerMas }) {
  if (animales.length === 0) {
    return <p className="py-16 text-center text-cafe">No encontramos animales con esos filtros. Probá quitando alguno.</p>;
  }
  const cols = vista === "lista" ? "grid-cols-1" : "grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3";
  return (
    <div className={`grid gap-4 ${cols}`}>
      {animales.map((a) => <AnimalCard key={a.id} animal={a} onVerMas={onVerMas} />)}
    </div>
  );
}
 