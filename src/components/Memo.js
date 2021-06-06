import { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [number, setNumber] = useState(0);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(number), [number]);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {number} is {fib}
      </h2>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
};

export default MemoComponent;
