import type { ModalProps } from "../../types/modal";

export default function Modal({ message, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="card p-6 max-w-sm mx-4 border-error">
                <p className="text-center mb-4 text-error">{message}</p>
                <button
                    onClick={onClose}
                    className="
                        w-full py-2
                        px-4
                        bg-error
                        hover:bg-error-hover
                        text-white
                        rounded-lg
                        cursor-pointer
                        hover:opacity-90
                    "
                >
                    OK
                </button>
            </div>
        </div>
    );
}