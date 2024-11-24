import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Kahoot Clone</h1>
      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Quiz</Link></li>
        <li><Link to="/join">Join Game</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
