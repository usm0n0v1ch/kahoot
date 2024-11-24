import React, { useState } from "react";
import styles from "./style.module.css";

const JoinGame = () => {
  const [gameCode, setGameCode] = useState("");

  const handleJoin = () => {
    console.log("Joining Game:", gameCode);
  };

  return (
    <div className={styles.container}>
      <h2>Join a Game</h2>
      <input
        type="text"
        value={gameCode}
        onChange={(e) => setGameCode(e.target.value)}
        placeholder="Enter game code"
        className={styles.input}
      />
      <button onClick={handleJoin} className={styles.button}>Join</button>
    </div>
  );
};

export default JoinGame;
