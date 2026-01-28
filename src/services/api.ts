import type { ApiResponse, Question, CategoryResponse, Category } from "../types/api-response";

function getErrorMessage(code: number): string {
    switch (code) {
        case 1:
            return "Not enough questions available for this category. Try with fewer questions.";
        case 2:
            return "Invalid parameter. Please check your selections.";
        case 3:
            return "Session error. Please try again.";
        case 4:
            return "All questions have been used. Please try again.";
        case 5:
            return "Too many requests. Please wait a few seconds.";
        default:
            return "An unexpected error occurred.";
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

export function fetchCategories(): Promise<Category[]> {
    const baseUrl = "https://opentdb.com/api_category.php";
    return fetch(baseUrl)
        .then(response => response.json())
        .then((data: CategoryResponse) => data.trivia_categories);
}