import type { ProgressBarProps } from "../../types/progress-bar";

export default function ProgressBar({ current, total, showIndicator = true }: ProgressBarProps) {
    const percentage = (current / total) * 100;

    return (
        <div className={showIndicator ? "mb-6" : ""}>
            {showIndicator && (
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted">
                        Question {current} sur {total}
                    </span>
                </div>
            )}
            <div className="w-full h-2 bg-surface-hover rounded-full overflow-hidden">
                <div 
                    className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}