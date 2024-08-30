import { useState } from "react";
import Count from "./Count";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count value={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
