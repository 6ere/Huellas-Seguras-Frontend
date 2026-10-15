# Huellas Seguras – Frontend

**Proyecto Final – Tecnicatura Universitaria en Programación – UTN FRT**

Frontend de **Huellas Seguras**, una plataforma para reportar perros perdidos o maltratados, contactar con veterinarias y refugios aliados y encontrar animales en adopción. Se desarrolla con **React + Vite** y **Tailwind CSS**, a partir de una primera versión hecha con Bootstrap.

Huellas Seguras busca centralizar en un solo lugar los reportes que hoy se dispersan en redes sociales y grupos de mensajería, para que cada caso tenga seguimiento y una respuesta.

🔗 **Demo en vivo:** [https://huellas-seguras-frontend.vercel.app](https://huellas-seguras-frontend.vercel.app)

## Integrantes
- Amado, Facundo
- Pereyra, Geremias

## Funcionalidades
- Navegación entre páginas con **React Router**, sin recargar el sitio.
- Inicio con video de fondo, llamados a la acción y una sección "Cómo funciona" con cuatro tarjetas.
- Navbar con menú hamburguesa en celulares, que se cierra al elegir una sección.
- Footer con columnas de enlaces, contacto y año calculado automáticamente.
- **Veterinarias asociadas:** grilla de tarjetas con estado Abierto/Cerrado, ubicación, servicios y botón "Ver información".
- **Nosotros:** presentación del proyecto, misión y preguntas frecuentes en un acordeón, con animación de aparición al hacer scroll.
- **Login y registro** en la misma pantalla (se alterna con un botón), con opción de mostrar u ocultar la contraseña. Al enviar el formulario se navega a la zona del usuario.
- **Explorar animales** (zona del usuario):
  - Sidebar de navegación (en celulares pasa a ser una barra inferior) y panel de filtros que se despliega al tocar "Animales".
  - Buscador por nombre, raza o palabra clave.
  - Categorías (adopción y perdidos) con su contador.
  - Filtros por especie, edad, tamaño, sexo, características, raza y color, con los botones "Aplicar filtros" y "Limpiar filtros".
  - Chips de filtros activos que se pueden quitar de a uno.
  - Orden por cercanía o por nombre, y vista en grilla o en lista.
  - Mensaje cuando ningún animal coincide con los filtros.
  - Fotos de los perros cargadas desde una **API externa** con Axios: se muestra "Cargando perros..." mientras llegan y una alerta (SweetAlert2) si el pedido falla.
- Página 404 temática, con huellas animadas.
- Diseño responsive con Tailwind CSS.

Los datos de los animales (nombre, edad, tamaño, etiquetas, etc.) son **de ejemplo** y están en `src/data`. Las fotos de los perros vienen de una API externa.

## Tecnologías
- **React 19** + **Vite**
- **React Router** (`react-router-dom` 7)
- **Tailwind CSS 4** (con el plugin `@tailwindcss/vite`)
- **lucide-react** para los íconos
- **Axios** para consumir la API de fotos de perros
- **SweetAlert2** (`sweetalert2` y `sweetalert2-react-content`) para las alertas
- **ESLint** con las reglas de hooks de React
- JavaScript (JSX)
- Git y GitHub, con deploy en **Vercel** (ramas `dev` → `main`)

## Cómo correrlo
```bash
npm install
npm run dev
```
Abrir `http://localhost:5173`.

### Variables de entorno
Crear un archivo `.env` en la raíz del proyecto (ya está en `.gitignore`, no se sube a GitHub):
```
VITE_API_URL=<URL base de la API de fotos de perros>
```
En Vercel se carga en *Settings → Environment Variables*; sin esta variable las fotos no se cargan.

Otros scripts: `npm run build` genera la versión de producción, `npm run preview` la sirve localmente y `npm run lint` revisa el código.

## Estructura
```
public/                imágenes, video de portada, favicon.svg y og-image.png
src/
├── components/        componentes reutilizables
│   ├── cards/
│   │   ├── AnimalCard.jsx
│   │   ├── HomeCards.jsx
│   │   └── VeterinaCards.jsx
│   ├── explorer/
│   │   ├── CategoryButton.jsx
│   │   ├── FilterGroup.jsx
│   │   ├── FilterOption.jsx
│   │   └── SearchInput.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── hero/
│   │   ├── Hero.jsx
│   │   ├── HeroBanner.jsx
│   │   └── AnimalGrid.jsx
│   └── navbar/
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       ├── FilterPanel.jsx
│       ├── TopBar.jsx
│       ├── ActiveFilter.jsx
│       ├── ResultsToolbar.jsx
│       └── Logo.jsx
├── layouts/
│   └── MainLayout/    navbar + contenido + footer
├── pages/             una carpeta por página
│   ├── Home/
│   ├── Veterinaria/
│   ├── Nosotros/
│   ├── Login/
│   ├── UserPage/
│   └── Errors/404-NotFound/
├── data/              datos de ejemplo
│   ├── Animals.js
│   ├── Filter.js
│   └── socios.js
├── routes/
│   └── AppRouter.jsx  definición de las rutas
├── services/
│   └── dogService.js  pedido de fotos a la API con Axios
├── App.jsx
├── index.css          Tailwind y variables del tema
└── main.jsx
index.html             metadatos base para SEO
```

## Rutas (React Router)
`AppRouter.jsx` envuelve la app en `BrowserRouter` y define las rutas con `Routes` y `Route`. Las páginas públicas cuelgan de una ruta padre que usa `MainLayout`, así el navbar y el footer se escriben una sola vez y solo cambia lo del medio (`Outlet`). El login y la zona del usuario quedan fuera de ese layout porque tienen su propia estructura.

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/veterinarias` | Veterinarias asociadas |
| `/nosotros` | Nosotros |
| `/login` | Iniciar sesión / Crear cuenta |
| `/login/user` | Explorar animales (`UserPage`) |
| `*` | Página no encontrada |

El logo del navbar y los enlaces del menú usan `Link`. El sidebar de la zona del usuario usa `NavLink`, que informa si el enlace está activo (`isActive`) para resaltarlo. Después de iniciar sesión o registrarse, `Login` usa `useNavigate` para llevar al usuario a `/login/user`.

## Componentes y props

### Estructura general
- **`MainLayout`** arma la estructura común (`Navbar`, `Outlet` y `Footer`). No recibe props.
- **`Navbar`** es la barra superior. Guarda en su estado si el menú hamburguesa está abierto y genera los enlaces a partir de la lista `NAV_ITEMS`.
- **`Footer`** recibe `columns` (las columnas de enlaces) y `className`. Si no recibe columnas, usa unas por defecto.

### Inicio
- **`Hero`** muestra el video de fondo, el título y los botones de "Reportar un caso" y "Ver perros en adopción".
- **`HomeCards`** recibe `items` y `className` y dibuja la sección "Cómo funciona" con las primeras cuatro tarjetas.
- **`HomeCard`** (dentro de `HomeCards.jsx`) recibe `item` con `title`, `description`, `image` e `imageAlt`.

### Veterinarias
- **`VeterinariaCard`** recibe `nombre`, `ubicacion`, `descripcion`, `servicios`, `imagen`, `abierto` y `onVerInfo`. Si no hay imagen, muestra un degradado con una descripción accesible.

### Zona del usuario (Explorar animales)
- **`Sidebar`** recibe `panelAbierto` y `onToggleAnimales`. Al tocar "Animales" avisa a la página para abrir o cerrar el panel de filtros.
- **`FilterPanel`** recibe `conteos`, `onCerrar`, `busqueda`, `onBusqueda`, `categoria`, `onCategoria`, `filtros`, `onToggle`, `orden`, `onOrden`, `onAplicar` y `onLimpiar`. No guarda los filtros: los recibe de la página.
- **`SearchInput`** recibe `value`, `onChange` y `placeholder`.
- **`CategoryButton`** recibe `icon`, `label`, `count`, `active` y `onClick`.
- **`FilterGroup`** recibe `titulo` y `children`, y guarda si el grupo está desplegado.
- **`FilterOption`** recibe `label`, `checked`, `onChange` y `swatch` (muestra de color opcional).
- **`TopBar`** recibe `ubicacion` (por defecto, San Miguel de Tucumán).
- **`HeroBanner`** recibe `imagen`.
- **`ActiveFilters`** recibe `chips`, `onRemove` y `onLimpiar`; no dibuja nada si no hay filtros aplicados.
- **`ResultsToolbar`** recibe `total`, `orden`, `onOrden`, `vista` y `onVista`.
- **`AnimalGrid`** recibe `animales`, `vista` y `onVerMas`. Cambia la cantidad de columnas según la vista y muestra un mensaje si la lista está vacía.
- **`AnimalCard`** recibe `animal`, `onVerMas` y `onFavorito`, y dibuja la ficha de un animal.
- **`Logo`** se usa en el sidebar y no recibe props.

### Páginas
- **`Login`** alterna entre iniciar sesión y crear cuenta con un solo estado. Define internamente `Huella`, un ícono SVG reutilizado en la decoración.
- **`Nosotros`** define internamente `Aparecer` (animación al hacer scroll; recibe `children`, `className` y `delay`), `Pregunta` (acordeón; recibe `pregunta` y `respuesta`) e `Icono`.
- **`NotFound`** define internamente `Paw`, la huella animada del error 404.

## Uso de `map()`
Casi ninguna lista está escrita a mano en el JSX: los datos viven en una constante o en `src/data/` y se recorren con `map()`.
- Enlaces del navbar → `NAV_ITEMS` (`Navbar.jsx`)
- Enlaces del sidebar → `ITEMS` (`Sidebar.jsx`)
- Columnas y enlaces del footer → `defaultColumns` (`Footer.jsx`)
- Tarjetas de "Cómo funciona" → `defaultItems` (`HomeCards.jsx`)
- Veterinarias → `veterinarias` en `data/socios.js`, y sus servicios dentro de `VeterinariaCard`
- Animales de la grilla → `ANIMALES` en `data/Animals.js`, y sus etiquetas dentro de `AnimalCard`
- Categorías, grupos de filtros, opciones y órdenes → `data/Filter.js`
- Chips de filtros activos → se calculan a partir de los filtros aplicados
- Huellas decorativas del login y del 404 → listas pequeñas dentro de cada página

Los contadores de animales en adopción y perdidos salen de la cantidad de elementos de sus listas (`ANIMALES.length` y `ANIMALES_PERDIDOS.length`).

## Hooks

### `useState`
| Componente | Estado que guarda | Cuándo cambia |
|---|---|---|
| `Navbar` | `isOpen`: si el menú hamburguesa está desplegado | Al tocar el botón y al elegir una sección |
| `Login` | `registro`: si se muestra el formulario de registro | Al tocar "Registrarme" o "Iniciar sesión" |
| `Login` | `nombre`, `email`, `password`: lo que escribe el usuario | Con cada tecla |
| `Login` | `verClave`: si la contraseña se ve en texto | Al tocar "Ver" u "Ocultar" |
| `UserPage` | `panelAbierto`: si el panel de filtros está desplegado | Al tocar "Animales" en el sidebar o cerrar el panel |
| `UserPage` | `categoria`: categoría activa (adopción o perdidos) | Al elegir una categoría |
| `UserPage` | `busqueda`: texto del buscador | Con cada tecla |
| `UserPage` | `orden`: criterio de orden | Al elegir otro orden |
| `UserPage` | `vista`: grilla o lista | Al tocar los botones de vista |
| `UserPage` | `borrador`: filtros tildados en el panel | Al tildar o destildar una opción |
| `UserPage` | `aplicados`: filtros que realmente se usan | Al tocar "Aplicar filtros", al quitar un chip y al limpiar |
| `UserPage` | `imagenes`: fotos de perros que devuelve la API | Una vez, cuando llega la respuesta |
| `UserPage` | `cargando`: si todavía se esperan las fotos | Empieza en `true` y pasa a `false` al terminar el pedido, con o sin error |
| `FilterGroup` | `abierto`: si el grupo de filtros está desplegado | Al tocar el título del grupo |
| `Aparecer` (Nosotros) | `visible`: si el bloque ya apareció en pantalla | Una sola vez, cuando entra en la vista |

Los filtros usan dos estados a propósito: las opciones se tildan sobre `borrador` y recién pasan a `aplicados` cuando el usuario toca "Aplicar filtros". Los chips y la grilla leen siempre `aplicados`.

### `useEffect` y `useRef`
| Componente | Qué hace | Dependencias |
|---|---|---|
| `Aparecer` | Crea un `IntersectionObserver` que marca el bloque como visible cuando entra en pantalla y se desconecta | `[]`: se ejecuta una vez al montar, y su limpieza desconecta el observador al desmontar |
| `UserPage` | Pide las fotos de los perros a la API al cargar la página | `[]`: se ejecuta una sola vez al montar |

`useRef` guarda la referencia al elemento que observa el `IntersectionObserver`.

### `useMemo`
En `UserPage`, `useMemo` calcula la lista de animales filtrados y ordenados. Solo se vuelve a calcular cuando cambian `aplicados`, `busqueda` u `orden`, y no con cada tecla que se escribe en otros estados. La función `coincide` revisa que el animal cumpla con el texto de búsqueda y con cada grupo de filtros.

### Consumo de API (Axios)
`src/services/dogService.js` exporta `obtenerFotosPerros(cantidad)`, que hace un `axios.get` a la URL de `VITE_API_URL` agregando la cantidad de fotos pedidas y devuelve la lista de imágenes (`response.data.message`). `UserPage` la llama dentro de un `useEffect` pidiendo una foto por cada animal de `ANIMALES`.

- Mientras llega la respuesta se muestra "Cargando perros...".
- Si el pedido falla, se muestra una alerta con SweetAlert2 y las tarjetas quedan sin foto.
- Las fotos se asignan por posición: el animal `i` recibe la imagen `i` de la API. Los datos de `ANIMALES` ya no tienen el campo `foto`.

### Hooks de React Router
- **`useNavigate`** lleva al usuario de `/login` a `/login/user` al enviar el formulario.
- **`NavLink`** marca la página actual en el sidebar.

## SEO

### En `index.html`
- **`<title>` y `meta description`:** nombre del proyecto y resumen de lo que ofrece, que es lo que muestran los buscadores en los resultados.
- **Metadatos base:** `lang="es-AR"`, `robots` (`index, follow`), `author`, `viewport` y `theme-color` (el terracota de la marca).
- **Open Graph y Twitter Cards:** título, descripción e imagen de vista previa al compartir el enlace. La imagen es `public/og-image.png` (1200 x 630 px).
- **Datos estructurados:** bloque JSON-LD de schema.org con `Organization` y `WebSite`.
- **Favicon** del sitio (`public/favicon.svg`, una huella sobre fondo crema).

### En el código
- **URLs semánticas y legibles:** rutas cortas y en español (`/veterinarias`, `/nosotros`, `/login`).
- **Etiquetas semánticas:** `<nav>` en el menú y en los enlaces del footer, `<main>` en el contenido de cada página, `<section>`, `<article>` en cada tarjeta, `<aside>` en el sidebar y en el panel de filtros, `<header>`, `<footer>` y `<details>`/`<summary>` en las preguntas frecuentes.
- **Un solo `<h1>` por página:** en el título de portada, de veterinarias, de nosotros, del login, del 404 y del banner de la zona del usuario.
- **Imágenes:** `alt` descriptivo en las fotos de animales, las tarjetas de inicio y las veterinarias, y `loading="lazy"` en todas ellas. Los íconos decorativos usan `aria-hidden="true"`.
- **Accesibilidad:** `aria-label` en los botones que solo tienen ícono, `aria-expanded` en el menú y en el panel de filtros, `aria-pressed` en las categorías y en la vista grilla/lista, estilos `focus-visible` y `motion-reduce` para quienes desactivan las animaciones.
- **Responsive (mobile first)** con Tailwind CSS.

### Verificación
- Auditoría con **Lighthouse** (secciones SEO, Rendimiento y Accesibilidad) desde Chrome DevTools.
- Validación de los datos estructurados con el [Rich Results Test](https://search.google.com/test/rich-results) de Google.
- Alta del sitio en **Google Search Console**.

## Estado de la migración (Bootstrap → React + Tailwind)
- [x] Navbar con menú hamburguesa
- [x] Inicio (portada y "Cómo funciona")
- [x] Footer
- [x] Veterinarias asociadas
- [x] Nosotros, con preguntas frecuentes
- [x] Login y registro
- [x] Explorar animales (sidebar, filtros, buscador y tarjetas)
- [x] Fotos de perros desde una API externa (Axios)
- [x] Página 404
- [ ] Formulario de "Reportar un caso"
- [ ] Refugios asociados
- [ ] Animales perdidos (datos y vista)
- [ ] Privacidad y términos
- [ ] Conectar el resto de la interfaz con datos reales (los datos de los animales siguen siendo de ejemplo)

## Roadmap
- Título y descripción únicos para cada página.
- Prerenderizado de las páginas públicas para mejorar la indexación.
- Integrar una API externa para ubicaciones (por ejemplo, Georef Argentina).
- Monitoreo de Core Web Vitals y seguimiento en Search Console.
