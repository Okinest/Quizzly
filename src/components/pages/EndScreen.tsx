import { useLocation, useNavigate } from "react-router";
import { ButtonMenu } from "../ui/Button";

export default function EndScreen() {
    const location = useLocation();
    const navigate = useNavigate();

    const score: number = location.state?.score ?? 0;
    const totalQuestions: number = location.state?.totalQuestions ?? 0;

    const handleRestart = () => {
        navigate("/");
    };

    const getCustomMessage = () => {
        const percentage = (score / totalQuestions) * 100;

        if (percentage === 100) {
            return "Perfect! You're a true champion!";
        } else if (percentage >= 80) {
            return "Excellent work! You master the subject well!";
        } else if (percentage >= 60) {
            return "Good job! Keep it up!";
        } else if (percentage >= 40) {
            return "Not bad, but you can do better!";
        } else {
            return "Keep training, you'll get there!";
        }
    };

    return (
        <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-2xl p-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    {score} / {totalQuestions}
                </h1>
                <p className="text-center text-muted mb-4">
                    You have scored {score} points out of {totalQuestions} questions.
                </p>
                <p className="text-2xl text-center mb-8">
                    {getCustomMessage()}
                </p>
                <ButtonMenu label="Restart" onClick={handleRestart} />
            </div>
        </div>
    );
}