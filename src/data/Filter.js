const o = (value, label = value) => ({ value, label });

export const CATEGORIAS = [
  { id: "adopcion", label: "Animales en adopción", count: 0 },
  { id: "perdidos", label: "Animales perdidos", count: 0 },
];

export const GRUPOS_IZQUIERDA = [
  { id: "especie", titulo: "Especie", opciones: [o("Perros"), o("Gatos"), o("Otros")] },
  {
    id: "edad",
    titulo: "Edad",
    opciones: [
      o("cachorro", "Cachorro (0-1 año)"),
      o("joven", "Joven (1-3 años)"),
      o("adulto", "Adulto (3-7 años)"),
      o("senior", "Senior (7+ años)"),
    ],
  },
  { id: "tamano", titulo: "Tamaño", opciones: [o("pequeno", "Pequeño"), o("mediano", "Mediano"), o("grande", "Grande")] },
  { id: "sexo", titulo: "Sexo", opciones: [o("Macho"), o("Hembra")] },
];

export const GRUPOS_DERECHA = [
  {
    id: "caracteristicas",
    titulo: "Características",
    opciones: [
      o("castrado", "Castrado/a"),
      o("vacunado", "Vacunado/a"),
      o("desparasitado", "Desparasitado/a"),
      o("otros-animales", "Convive con otros animales"),
      o("ninos", "Convive con niños"),
      o("cuidados", "Necesita cuidados especiales"),
    ],
  },
  {
    id: "raza",
    titulo: "Raza",
    opciones: [o("Mestizo"), o("Labrador"), o("Caniche"), o("Ovejero alemán"), o("Otras razas")],
  },
  {
    id: "color",
    titulo: "Color del pelaje",
    opciones: [
      { ...o("negro", "Negro"), swatch: "#1f1f1f" },
      { ...o("blanco", "Blanco"), swatch: "#ffffff" },
      { ...o("marron", "Marrón"), swatch: "#8a5a3c" },
      { ...o("gris", "Gris"), swatch: "#8d8d8d" },
      { ...o("atigrado", "Atigrado"), swatch: "#b98a55" },
      { ...o("combinado", "Combinado"), swatch: "#e8dccf" },
    ],
  },
];

export const TODOS_LOS_GRUPOS = [...GRUPOS_IZQUIERDA, ...GRUPOS_DERECHA];

export const FILTROS_VACIOS = Object.fromEntries(TODOS_LOS_GRUPOS.map((g) => [g.id, []]));

export const ORDENES = [
  { value: "cercanos", label: "Más cercanos" },
  { value: "nombre", label: "Nombre (A-Z)" },
];

export const etiquetaDe = (grupoId, value) =>
  TODOS_LOS_GRUPOS.find((g) => g.id === grupoId)?.opciones.find((op) => op.value === value)?.label ?? value;