import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStepDec = function () {
    return setStep((curStep) => curStep - 1);
  };
  const handleStepInc = function () {
    return setStep((curStep) => curStep + 1);
  };

  const countsDec = function () {
    return setCount((curCount) => curCount - step);
  };
  const countsInc = function () {
    return setCount((curCount) => curCount + step);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={handleStepDec}>-</button>
        <span> Step: {step}</span>
        <button onClick={handleStepInc}>+</button>
      </div>
      <div>
        <button onClick={countsDec}>-</button>
        <span> count: {count}</span>
        <button onClick={countsInc}>+</button>
      </div>
      <span>
        {count === 0
          ? "today is"
          : count > 0
          ? `${count} days from today is`
          : `${count} days ago was`}{" "}
        {date.toDateString()}{" "}
      </span>
    </div>
  );
}
