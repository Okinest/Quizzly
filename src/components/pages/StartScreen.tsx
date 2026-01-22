import { useState } from "react";
import Button from "../ui/Button";
import Select from "../ui/Select";
import type { Option } from "../../types/select";

export default function StartScreen() {

    const [difficulty, setDifficulty] = useState<string>("");

    const difficultyOptions: Option[] = [
        { value: "easy", label: "Facile" },
        { value: "medium", label: "Moyen" },
        { value: "hard", label: "Difficile" },
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-2">Quizzly</h1>
            <Button label="Commencer le quiz" />
            <Select
                label="Difficulté"
                options={difficultyOptions}
                value={difficulty}
                onChange={setDifficulty}
                placeholder="Choisissez une difficulté"
            />
            <p>difficulté selectionnée: {difficulty}</p>
        </div>
    )
}