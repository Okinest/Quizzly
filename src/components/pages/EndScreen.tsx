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

    return (
        <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-2xl p-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    {score} / {totalQuestions}
                </h1>
                <p className="text-center text-muted mb-8">
                    Vous avez obtenu {score} points sur {totalQuestions} questions.
                </p>
                <ButtonMenu label="Recommencer" onClick={handleRestart} />
            </div>
        </div>
    );
}