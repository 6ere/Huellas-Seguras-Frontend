import { useMemo, useState,useEffect } from "react";
import Swal from "sweetalert2";
import {obtenerFotosPerros} from "../../services/dogService"

import Sidebar from "../../components/navbar/Sidebar"
import FilterPanel from "../../components/navbar/FilterPanel"
import TopBar from "../../components/navbar/TopBar"
import HeroBanner from "../../components/hero/HeroBanner"
import ActiveFilters from "../../components/navbar/ActiveFilter"
import ResultsToolbar from "../../components/navbar/ResultsToolbar"
import AnimalGrid from "../../components/hero/AnimalGrid"
import {ANIMALES,ANIMALES_PERDIDOS} from "../../data/Animals"
import { FILTROS_VACIOS,etiquetaDe } from "../../data/Filter";


const CAMPO = { especie: "especie", edad: "edad", tamano: "tamano", sexo: "sexo", raza: "raza", color: "color" };
 
function coincide(animal, filtros, busqueda) {
  const texto = `${animal.nombre} ${animal.raza} ${animal.etiquetas.join(" ")}`.toLowerCase();
  if (busqueda && !texto.includes(busqueda.toLowerCase())) return false;
  for (const [grupo, campo] of Object.entries(CAMPO)) {
    if (filtros[grupo].length && !filtros[grupo].includes(animal[campo])) return false;
  }
  return filtros.caracteristicas.every((c) => animal.caracteristicas.includes(c));
}
 
export default function AnimalesPage() {
  const [panelAbierto, setPanelAbierto] = useState(false); 
  const [categoria, setCategoria] = useState("adopcion");
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("cercanos");
  const [vista, setVista] = useState("grilla");
  const [borrador, setBorrador] = useState(FILTROS_VACIOS); 
  const [aplicados, setAplicados] = useState(FILTROS_VACIOS); 
  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const fotos = await obtenerFotosPerros(ANIMALES.length);
        setImagenes(fotos);
      } catch {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar las fotos de los perros.",
        });
      } finally {
        setCargando(false);
      }
    };
    obtenerImagenes();
  }, []);
 
  
  const conteos = {
    adopcion: ANIMALES.length,
    perdidos: ANIMALES_PERDIDOS.length,
  };
 
  const toggle = (grupo, value) =>
    setBorrador((f) => ({
      ...f,
      [grupo]: f[grupo].includes(value) ? f[grupo].filter((v) => v !== value) : [...f[grupo], value],
    }));
 
  const quitarChip = (grupo, value) => {
    const quitar = (f) => ({ ...f, [grupo]: f[grupo].filter((v) => v !== value) });
    setBorrador(quitar);
    setAplicados(quitar);
  };
 
  const limpiar = () => {
    setBorrador(FILTROS_VACIOS);
    setAplicados(FILTROS_VACIOS);
    setBusqueda("");
  };
 
  const chips = Object.entries(aplicados).flatMap(([grupo, valores]) =>
    valores.map((value) => ({ grupo, value, label: etiquetaDe(grupo, value) }))
  );
 
  const animales = useMemo(() => {
    const conFotos = ANIMALES.map((a, i) => ({ ...a, foto: imagenes[i] ?? a.foto }));
    const lista = conFotos.filter((a) => coincide(a, aplicados, busqueda));
    return lista.sort((a, b) => (orden === "nombre" ? a.nombre.localeCompare(b.nombre) : a.km - b.km));
  }, [aplicados, busqueda, orden, imagenes]);
 
  return (
    <div className="flex h-dvh bg-white font-sans">
      <Sidebar panelAbierto={panelAbierto} onToggleAnimales={() => setPanelAbierto(!panelAbierto)} />
 
      {panelAbierto && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={() => setPanelAbierto(false)} />
          <FilterPanel
            onCerrar={() => setPanelAbierto(false)}
            conteos={conteos}
            busqueda={busqueda} onBusqueda={setBusqueda}
            categoria={categoria} onCategoria={setCategoria}
            filtros={borrador} onToggle={toggle}
            orden={orden} onOrden={setOrden}
            onAplicar={() => setAplicados(borrador)} onLimpiar={limpiar}
          />
        </>
      )}
 
      <main className="@container flex min-w-0 flex-1 flex-col gap-5 overflow-y-auto p-4 pb-24 md:p-6 md:pb-6">
        <TopBar />
        <HeroBanner />
        <ActiveFilters chips={chips} onRemove={quitarChip} onLimpiar={limpiar} />
        <ResultsToolbar total={animales.length} orden={orden} onOrden={setOrden} vista={vista} onVista={setVista} />
        {cargando ? (
          <p className="py-16 text-center text-cafe">Cargando perros...</p>
        ) : (
          <AnimalGrid animales={animales} vista={vista} />
        )}
      </main>
    </div>
  );
}