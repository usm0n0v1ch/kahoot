import React, { useState } from "react";
import styles from "./style.module.css";

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const addQuestion = () => {
    if (newQuestion) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
  };

  const handleSubmit = () => {
    console.log("Quiz Created:", questions);
  };

  return (
    <div className={styles.container}>
      <h2>Create a Quiz</h2>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="Enter your question"
        className={styles.input}
      />
      <button onClick={addQuestion} className={styles.button}>Add Question</button>
      <ul className={styles.list}>
        {questions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
      <button onClick={handleSubmit} className={styles.submitButton}>Submit Quiz</button>
    </div>
  );
};

export default CreateQuiz;
