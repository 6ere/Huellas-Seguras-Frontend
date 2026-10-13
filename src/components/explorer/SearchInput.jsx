import { Search } from "lucide-react";

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-borde bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-cafe/40">
      <Search size={20} className="text-cafe" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-cafe-oscuro outline-none placeholder:text-cafe/50"
      />
    </label>
  );
}