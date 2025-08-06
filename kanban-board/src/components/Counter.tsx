import { useState } from "react";

type CounterProps = {
  initial: number;
};
function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState(initial);

  return (
    <div className="border-4">
      <button onClick={() => setCount(count + 1)}> {count}</button>
    </div>
  );
}

export default Counter;
