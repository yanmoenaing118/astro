import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <div className={styles.counter}>
      <button onClick={() => setCounter(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCounter(count - 1)}>-</button>
    </div>
  );
}
