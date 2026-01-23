export default function Button({ label }: { label: string }) {
    return (
        <button className="bg-primary text-white p-4 rounded-xl w-full cursor-pointer">
            {label}
        </button>
  );
}