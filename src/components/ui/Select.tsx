import type { SelectProps } from "../../types/select";

export default function Select({ label, options, value, onChange, placeholder }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-text-muted text-sm font-medium">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          bg-surface 
          text-text 
          border border-border 
          rounded-lg 
          px-4 py-3
          focus:outline-none 
          focus:ring-2 
          focus:ring-primary
          cursor-pointer
        "
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
