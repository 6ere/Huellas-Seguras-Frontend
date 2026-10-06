import { useState } from "react";

function Huella({ className = "", style }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
      <ellipse cx="32" cy="42" rx="14" ry="11" />
      <circle cx="14" cy="26" r="6" />
      <circle cx="26" cy="16" r="6" />
      <circle cx="40" cy="16" r="6" />
      <circle cx="52" cy="26" r="6" />
    </svg>
  );
}

export default function Login() {
  const [registro, setRegistro] = useState(false); // false = login, true = registro
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verClave, setVerClave] = useState(false);

  const etiqueta = "block text-xs font-semibold text-[#6b5c4f]";
  const campo =
    "mt-1 w-full border-b border-[#e6d9cd] bg-transparent py-2 text-[#44352D] outline-none transition focus:border-[#44352D]";

  const enviar = (e) => {
    e.preventDefault();
    // Acá va la conexión con el backend
    console.log(registro ? { nombre, email, password } : { email, password });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FBF3EA] px-4 pb-16 pt-32">

      {/* Huellas gigantes de fondo */}
      <Huella className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 -rotate-12 text-[#e6d9cd]" />
      <Huella className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 rotate-12 text-[#e6d9cd]" />

      <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl md:flex-row">

        {/* Formulario */}
        <form onSubmit={enviar} className="p-10 md:w-1/2 md:p-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#44352D] text-[#FBF3EA]">
            <Huella className="h-7 w-7" />
          </div>

          <h1 className="mt-6 font-serif text-4xl font-bold text-[#44352D]">
            {registro ? "Crear cuenta" : "Iniciar sesión"}
          </h1>

          {registro && (
            <label className={`${etiqueta} mt-10`}>
              Nombre
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={campo}
              />
            </label>
          )}

          <label className={`${etiqueta} ${registro ? "mt-6" : "mt-10"}`}>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={campo}
            />
          </label>

          <label className={`${etiqueta} relative mt-6`}>
            Contraseña
            <input
              type={verClave ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={campo}
            />
            <button
              type="button"
              onClick={() => setVerClave(!verClave)}
              className="absolute bottom-2 right-0 text-xs font-semibold text-[#6b5c4f] hover:text-[#44352D]"
            >
              {verClave ? "Ocultar" : "Ver"}
            </button>
          </label>

          {!registro && (
            <p className="mt-3 text-right text-xs text-[#6b5c4f] underline">
              ¿Olvidaste tu contraseña?
            </p>
          )}

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#44352D] py-3 text-sm font-semibold text-[#FBF3EA] transition duration-300 hover:scale-105 hover:bg-[#6b5c4f]"
          >
            {registro ? "Registrarme" : "Entrar"}
          </button>
        </form>

        {/* Panel oscuro con corte diagonal */}
        <aside className="flex flex-1 flex-col items-center justify-center bg-[#44352D] px-10 py-14 text-center md:-ml-16 md:pl-24 md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
          <div className="flex gap-4 text-[#e6d9cd]">
            {[0, 1, 2, 3].map((n) => (
              <Huella
                key={n}
                className={`h-6 w-6 animate-pulse ${n % 2 ? "-translate-y-3 rotate-12" : "-rotate-12"}`}
                style={{ animationDelay: `${n * 300}ms` }}
              />
            ))}
          </div>
          <h2 className="mt-8 font-serif text-3xl font-bold text-[#FBF3EA]">
            {registro ? "Bienvenido" : "Hola de nuevo"}
          </h2>
          <p className="mt-3 max-w-xs text-[#e6d9cd]">
            {registro
              ? "¿Ya tenés cuenta? Ingresá y seguí ayudando."
              : "¿Todavía no tenés cuenta? Creala y empezá a ayudar."}
          </p>
          <button
            type="button"
            onClick={() => setRegistro(!registro)}
            className="mt-8 rounded-full border border-[#FBF3EA] px-8 py-3 text-sm font-semibold text-[#FBF3EA] transition duration-300 hover:scale-110 hover:bg-[#FBF3EA] hover:text-[#44352D]"
          >
            {registro ? "Iniciar sesión" : "Registrarme"}
          </button>
        </aside>
      </div>
    </main>
  );
}