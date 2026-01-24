import { useState } from "react";
import { LuBrain } from "react-icons/lu";
import Button from "../ui/Button";
import Select from "../ui/Select";
import type { Option } from "../../types/select";
import { fetchQuestions } from "../../services/api";

export default function StartScreen() {

    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    const amountOptions: Option[] = [
        { value: "3", label: "3" },
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "15", label: "15" },
        { value: "20", label: "20" },
    ];

    const categoryOptions: Option[] = [
        { value: "0", label: "Any Category" },
        { value: "9", label: "General Knowledge" },
        { value: "11", label: "Entertainment: Film" },
        { value: "15", label: "Entertainment: Video Games" },
        { value: "18", label: "Science: Computers" },
        { value: "21", label: "Sports" },
        { value: "28", label: "Vehicles" },
        { value: "31", label: "Entertainment: Japanese Anime & Manga" },
    ];

    const difficultyOptions: Option[] = [
        { value: "easy", label: "Facile" },
        { value: "medium", label: "Moyen" },
        { value: "hard", label: "Difficile" },
    ];

    return (
        <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-md p-8">
                {/* Header */}
                <div className="text-center">
                    <div className="flex flex-col items-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4">
                            <span className="text-3xl"><LuBrain /></span>
                        </div>
                        <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Quizzly
                        </h1>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-5">
                    <Select
                        label="Nombre de questions"
                        options={amountOptions}
                        value={amount}
                        onChange={setAmount}
                        placeholder="Sélectionnez"
                    />
                    <Select
                        label="Catégorie"
                        options={categoryOptions}
                        value={category}
                        onChange={setCategory}
                        placeholder="Sélectionnez"
                    />
                    <Select
                        label="Difficulté"
                        options={difficultyOptions}
                        value={difficulty}
                        onChange={setDifficulty}
                        placeholder="Sélectionnez"
                    />
                </div>

                <div className="mt-8">
                    <Button
                        label="Commencer le quiz"
                        onClick={() => fetchQuestions(amount, difficulty, category)}
                        disabled={!amount || !difficulty || !category}
                    />
                </div>
            </div>
        </div>
    );
}