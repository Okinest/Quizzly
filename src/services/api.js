export function fetchQuestions(amount, difficulty, category = 0) {
  try {
    if (category === 0) {
      const response = fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`);
    }
    const response = fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
  } catch (error) {
    console.error(error);
  }
}