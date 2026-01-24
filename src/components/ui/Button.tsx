import type { ButtonProps } from "../../types/button";

export function ButtonMenu({ label, onClick, disabled }: ButtonProps) {
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

export function ButtonAnswer({ label, onClick, disabled }: ButtonProps) {
    return (
        <button className="
            bg-secondary
            hover:bg-secondary-hover
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