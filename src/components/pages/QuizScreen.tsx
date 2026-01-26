import { useLocation, useNavigate } from "react-router";
import type { Question } from "../../types/api-response";
import { useState } from "react";
import { ButtonAnswer } from "../ui/Button";
import { decodeHtml } from "../../utils/format";
import ProgressBar from "../ui/ProgressBar";
import Timer from "../ui/Timer";

export default function QuizScreen() {
    const location = useLocation();
    const navigate = useNavigate();

    const [score, setScore] = useState<number>(0);

    // Question à poser : Pourquoi le useState doit toujours être appelé avant tout return conditionnel ?
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
    const questions: Question[] = location.state?.questions ?? [];
    
    if (questions.length === 0) {
        navigate("/");
        return null;
    }
    
    const currentQuestion = questions[currentIndex];
    const isLastQuestion = questions[questions.length - 1] === currentQuestion;

    if (!currentQuestion) {
        navigate("/");
        return null;
    }

    const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];

    // Methode la plus simple pour mélanger les réponses (sinon algorithme de Fisher-Yates)
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    const handleTimeUp = () => {
        if (isLastQuestion) {
            navigate("/results", { state: { score, totalQuestions: questions.length } });
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleAnswer = (answer: string) => {
        const isCorrect = answer === currentQuestion.correct_answer;
        const newScore = isCorrect ? score + 1 : score;

        if (isCorrect) {
            setScore(newScore);
        }

        if (isLastQuestion) {
            navigate("/results", { state: { score: newScore, totalQuestions: questions.length } });
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    return (
        <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                        <span className="text-sm text-text-muted mb-2 block">
                            Question {currentIndex + 1} of {questions.length}
                        </span>
                        <ProgressBar current={currentIndex + 1} total={questions.length} showIndicator={false} />
                    </div>
                    <Timer 
                        key={currentIndex}
                        duration={15} 
                        onTimeUp={handleTimeUp}
                    />
                </div>
                <h2 className="text-xl font-bold text-center mb-6">
                    {currentQuestion?.question ? decodeHtml(currentQuestion.question) : ""}
                </h2>

                <div className="flex flex-col gap-4">
                    {shuffledAnswers.map((answer) => (
                        <ButtonAnswer
                            key={answer}
                            label={decodeHtml(answer)}
                            onClick={() => handleAnswer(answer)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}