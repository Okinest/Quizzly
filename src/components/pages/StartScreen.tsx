import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { LuBrain } from "react-icons/lu";
import type { Option } from "../../types/select";
import type { Category } from "../../types/api-response";
import { fetchQuestions, fetchCategories } from "../../services/api";
import { ButtonMenu } from "../ui/Button";
import Select from "../ui/Select";
import Loader from "../ui/Loader";
import Modal from "../ui/Modal";

export default function StartScreen() {
    // utilisation de useNavigate car navigation pas immediate
    const navigate = useNavigate();

    const [amount, setAmount] = useState<string>("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryId, setCategoryId] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const amountOptions: Option[] = [
        { value: "3", label: "3" },
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "15", label: "15" },
        { value: "20", label: "20" },
        { value: "50", label: "50" },
    ];

    const categoryOptions: Option[] = [
        { value: 0, label: "Any Category" },
        ...categories.map((category) => ({
            value: category.id,
            label: category.name,
        })),
    ];

    const difficultyOptions: Option[] = [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
    ];

    useEffect(() => {
        fetchCategories()
            .then((categories) => {
                setCategories(categories);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    const handleStartQuiz = () => {
        setIsLoading(true);
        fetchQuestions(amount, difficulty, categoryId)
            .then((questions) => {
                navigate("/quiz", { state: { questions } });
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-md p-8">
                {/* Header */}
                <div className="text-center">
                    <div className="flex flex-col items-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-secondary mb-4">
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
                        label="Number of questions"
                        options={amountOptions}
                        value={amount}
                        onChange={setAmount}
                        placeholder="Select"
                    />
                    <Select
                        label="Category"
                        options={categoryOptions}
                        value={categoryId}
                        onChange={setCategoryId}
                        placeholder="Select"
                    />
                    <Select
                        label="Difficulty"
                        options={difficultyOptions}
                        value={difficulty}
                        onChange={setDifficulty}
                        placeholder="Select"
                    />
                </div>

                {/* Button */}
                <div className="mt-8">
                    <ButtonMenu
                        label="Start quiz"
                        onClick={handleStartQuiz}
                        disabled={!amount || !difficulty || !categoryId}
                    />
                </div>
                {isLoading && (
                    <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
                        <Loader />
                    </div>
                )}
                {error && (
                    <Modal message={error} onClose={() => setError(null)} />
                )}
            </div>
        </div>
    );
}