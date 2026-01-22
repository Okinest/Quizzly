export default function Button({ label }: { label: string }) {
    return (
        <button className="bg-primary text-white p-2 rounded-md">
            {label}
        </button>
  );
}