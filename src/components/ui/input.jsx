export function Input({ label, ...props }) {
  return (
    <div className="mb-2">
      <label className="block mb-1 font-medium">{label}</label>
      <input className="border px-3 py-2 rounded-xl w-full" {...props} />
    </div>
  );
}