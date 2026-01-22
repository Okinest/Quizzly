import Button from "../ui/Button";

export default function StartScreen() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-2">Quizzly</h1>
            <Button label="Commencer le quiz" />
        </div>
    )
}