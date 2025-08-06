'use client'; 
import { useState } from "react";

type CounterProps = {
  initial: number;
};

function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState(initial);

  const handleClick = () => {
    console.log("Button clicked!");  // Debug log
    setCount(count + 1);  // Increment count
  };

  return (
    <div className="border-4 testing">
      <button onClick={handleClick} className="bg-blue-500 text-white p-4 w-50 rounded">
        {count}
      </button>
    </div>
  );
}

export default Counter;
