import { useLocation, useNavigate } from "react-router";
import type { Question } from "../../types/api-response";
import { useState } from "react";
import { ButtonAnswer } from "../ui/Button";
import { decodeHtml } from "../../utils/format";

export default function QuizScreen() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const questions: Question[] = location.state?.questions ?? [];
    
    if (questions.length === 0) {
        navigate("/");
        return null;
    }
    
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const currentQuestion = questions[currentIndex];
    const isLastQuestion = questions[questions.length - 1] === currentQuestion;

    if (!currentQuestion) {
        navigate("/");
        return null;
    }

    const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
    console.log(allAnswers);


    return (
        <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-2xl p-8">
                <p className="text-center text-muted mb-4">
                    Question {currentIndex + 1} / {questions.length}
                </p>
                <h2 className="text-xl font-bold text-center mb-6">
                    {currentQuestion?.question ? decodeHtml(currentQuestion.question) : ""}
                </h2>

                <div className="flex flex-col gap-4">
                    {shuffledAnswers.map((answer) => (
                        <ButtonAnswer
                            key={answer}
                            label={decodeHtml(answer)}
                            onClick={() => setCurrentIndex(prev => isLastQuestion ? prev : prev + 1)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}