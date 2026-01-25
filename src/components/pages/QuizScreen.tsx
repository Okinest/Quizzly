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

    const handleTimeUp = () => {
        if (isLastQuestion) {
            // TODO: naviguer vers l'écran de résultats
            return;
        }
        setCurrentIndex(prev => prev + 1);
    };

    return (
        <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                        <span className="text-sm text-text-muted mb-2 block">
                            Question {currentIndex + 1} sur {questions.length}
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
                            onClick={() => {
                                if (answer === currentQuestion.correct_answer) {
                                    setScore(prev => prev + 1);
                                }
                                setCurrentIndex(prev => isLastQuestion ? prev : prev + 1);
                            }}
                        />
                    ))}
                </div>
                <p className="text-center text-muted mt-4">Score: {score}</p>
            </div>
        </div>
    );
}