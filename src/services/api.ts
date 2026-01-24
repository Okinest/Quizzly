import type { ApiResponse } from "../types/api-response";

export function fetchQuestions(amount: string, difficulty: string, category: string): Promise<ApiResponse> {
    const baseUrl = "https://opentdb.com/api.php";
    const url = category === "0" 
        ? `${baseUrl}?amount=${amount}&difficulty=${difficulty}`
        : `${baseUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
    return fetch(url)
      .then(response => response.json())
}