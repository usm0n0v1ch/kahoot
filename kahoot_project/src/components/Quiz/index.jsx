import React, { useState } from "react";
import styles from "./style.module.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Capital of France?", options: ["Rome", "Paris", "Berlin", "Madrid"], answer: "Paris" }
  ];

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className={styles.container}>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className={styles.option}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <h2>Quiz Over</h2>
      )}
    </div>
  );
};

export default Quiz;
