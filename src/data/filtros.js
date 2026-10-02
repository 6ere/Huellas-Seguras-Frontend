// data/filtros.js
// Opciones de filtro de cada categoría. Más adelante pueden venir del backend.

// tipo: "checkbox" (varias opciones), "radio" (una opción) o "texto" (campo libre)
export const FILTROS = {
  adopcion: {
    titulo: "Filtros",
    grupos: [
      { clave: "especie", titulo: "Especie", tipo: "checkbox", opciones: ["Perros", "Gatos", "Otros"] },
      {
        clave: "edad",
        titulo: "Edad",
        tipo: "checkbox",
        opciones: ["Cachorro (0-1 año)", "Joven (1-3 años)", "Adulto (3-7 años)", "Senior (7+ años)"],
      },
      { clave: "tamano", titulo: "Tamaño", tipo: "checkbox", opciones: ["Pequeño", "Mediano", "Grande"] },
      { clave: "sexo", titulo: "Sexo", tipo: "checkbox", opciones: ["Macho", "Hembra"] },
      {
        clave: "caracteristicas",
        titulo: "Características",
        tipo: "checkbox",
        opciones: [
          "Castrado/a",
          "Vacunado/a",
          "Desparasitado/a",
          "Convive con otros animales",
          "Convive con niños",
          "Necesita cuidados especiales",
        ],
      },
      {
        clave: "raza",
        titulo: "Raza",
        tipo: "checkbox",
        opciones: ["Mestizo", "Labrador", "Caniche", "Ovejero alemán", "Otras razas"],
      },
    ],
  },
  perdidos: {
    titulo: "Filtros de animales perdidos",
    grupos: [
      { clave: "especie", titulo: "Especie", tipo: "checkbox", opciones: ["Perros", "Gatos"] },
      {
        clave: "fecha",
        titulo: "Fecha de desaparición",
        tipo: "radio",
        opciones: ["Cualquier fecha", "Hoy", "Últimos 7 días", "Últimos 30 días"],
      },
      {
        clave: "caracteristicas",
        titulo: "Características",
        tipo: "checkbox",
        opciones: ["Macho", "Hembra", "Con collar", "Con identificación"],
      },
      {
        clave: "ubicacion",
        titulo: "Ubicación",
        tipo: "texto",
        placeholder: "Ciudad, barrio o zona",
        ayuda: "Donde fue visto por última vez.",
      },
      {
        clave: "estado",
        titulo: "Estado",
        tipo: "radio",
        opciones: ["Sigue perdido", "Encontrado", "Todos"],
      },
    ],
  },
};

// Valores iniciales: radio = primera opción, checkbox = [], texto = ""
export function valoresIniciales(categoria) {
  const iniciales = {};
  FILTROS[categoria].grupos.forEach((g) => {
    if (g.tipo === "radio") iniciales[g.clave] = g.opciones[0];
    else if (g.tipo === "checkbox") iniciales[g.clave] = [];
    else iniciales[g.clave] = "";
  });
  return iniciales;
}