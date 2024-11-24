import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import JoinGame from "./pages/JoinGame";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/join" element={<JoinGame />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
