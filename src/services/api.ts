import type { ApiResponse, Question } from "../types/api-response";

function getErrorMessage(code: number): string {
    switch (code) {
        case 1:
            return "Pas assez de questions disponibles pour cette catégorie. Essayez avec moins de questions.";
        case 2:
            return "Paramètre invalide. Veuillez vérifier vos sélections.";
        case 3:
            return "Erreur de session. Veuillez réessayer.";
        case 4:
            return "Toutes les questions ont été utilisées. Veuillez réessayer.";
        case 5:
            return "Trop de requêtes. Veuillez patienter quelques secondes.";
        default:
            return "Une erreur inattendue s'est produite.";
    }
}

export function fetchQuestions(amount: string, difficulty: string, category: string): Promise<Question[]> {
    const baseUrl = "https://opentdb.com/api.php";
    const url = category === "0" 
        ? `${baseUrl}?amount=${amount}&difficulty=${difficulty}`
        : `${baseUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
    return fetch(url)
        .then(response => response.json())
        .then((data: ApiResponse) => {
        if (data.response_code !== 0) {
            throw new Error(getErrorMessage(data.response_code));
        }
        return data.results;
    });

}