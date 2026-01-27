export type Question = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export type ApiResponse = {
  response_code: number;
  results: Question[];
};

export type Category = {
  id: number;
  name: string;
};

export type CategoryResponse = {
  trivia_categories: Category[];
};