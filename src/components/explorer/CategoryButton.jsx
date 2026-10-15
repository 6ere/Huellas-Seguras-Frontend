export default function CategoryButton({ icon: Icon, label, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left text-sm font-semibold transition-colors ${
        active ? "border-arena bg-arena text-cafe-oscuro" : "border-borde bg-white text-cafe hover:bg-crema"
      }`}
    >
      <Icon size={22} aria-hidden="true" />
      <span className="flex-1">{label}</span>
      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${active ? "bg-oliva text-white" : "bg-arena text-cafe"}`}>
        {count}
      </span>
    </button>
  );
}