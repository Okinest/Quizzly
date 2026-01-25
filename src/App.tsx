import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import StartScreen from "./components/pages/StartScreen";
import QuizScreen from "./components/pages/QuizScreen";
import EndScreen from "./components/pages/EndScreen";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/results" element={<EndScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
