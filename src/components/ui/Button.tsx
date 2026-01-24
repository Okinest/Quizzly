import type { ButtonProps } from "../../types/button";

export default function Button({ label, onClick, disabled }: ButtonProps) {
    return (
        <button className="
            bg-primary
            text-white
            p-4
            rounded-xl
            w-full
            cursor-pointer
            disabled:opacity-50
            disabled:cursor-not-allowed
        "
        onClick={onClick}
        disabled={disabled ?? false}
        >
            {label}
        </button>
  );
}