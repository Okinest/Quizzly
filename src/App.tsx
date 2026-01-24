import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import StartScreen from "./components/pages/StartScreen";
import QuizScreen from "./components/pages/QuizScreen";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
