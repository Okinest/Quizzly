import { useEffect, useState } from "react";
import type { TimerProps } from "../../types/timer";

export default function Timer({ duration, onTimeUp }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration);

    // Calcul du pourcentage de temps restant
    const percentage = (timeLeft / duration) * 100;
    // Calcul du périmètre du cercle
    const circumference = 2 * Math.PI * 28;
    // Décalage du trait pour créer l'effet de "vidage". 
    const strokeDashoffset = circumference - (circumference * percentage) / 100;

    const color = percentage > 50 ? "var(--timer-safe)" : percentage > 25 ? "var(--timer-warning)" : "var(--timer-danger)";

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((currentTime: number) => {
                if (currentTime <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return currentTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, onTimeUp]);

    // Réinitialise le timer si duration change 
    useEffect(() => {
        setTimeLeft(duration);
    }, [duration]);

    return (
        <div className="relative w-16 h-16">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                {/* Cercle de fond (gris) */}
                <circle cx="32" cy="32" r="28" className="fill-none stroke-surface-hover" strokeWidth="4" />
                
                {/* Cercle de progression (coloré) */}
                <circle
                    cx="32" cy="32" r="28"
                    className="fill-none transition-all duration-1000"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>

            {/* Nombre au centre */}
            <span 
                className="absolute inset-0 flex items-center justify-center text-lg font-bold"
                style={{ color }}
            >
                {timeLeft}
            </span>
        </div>
    );
}
