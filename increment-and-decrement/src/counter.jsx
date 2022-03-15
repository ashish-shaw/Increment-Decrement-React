import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    setCount(count - 1);
  };

  const MultNum = () => {
    setCount(count * 2);
  };

  const DivNum = () => {
    setCount((count / 2).toFixed(2));
  };

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={IncNum}>Increment</button>
        <button onClick={DecNum}>Decrement</button>
        <button onClick={MultNum}>Double the Number</button>
        <button onClick={DivNum}> Half the Number</button>
      </div>
    </>
  );
};

export default Counter;
