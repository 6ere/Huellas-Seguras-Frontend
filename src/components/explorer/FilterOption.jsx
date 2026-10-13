export default function FilterOption({ label, checked, onChange, swatch }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1 text-sm text-cafe">
      <input type="checkbox" checked={checked} onChange={onChange} className="size-4 accent-cafe" />
      {swatch && (
        <span className="size-3.5 rounded-full border border-borde" style={{ backgroundColor: swatch }} aria-hidden="true" />
      )}
      {label}
    </label>
  );
}