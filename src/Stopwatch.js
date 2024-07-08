import React, { useState, useEffect } from "react";
const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [TimeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    let TimerId;
    if (isRunning) {
      TimerId = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    } else {
      clearTimeout(TimerId);
    }
    return () => clearTimeout(TimerId);
  }, [isRunning]);

  const DisplayTime = (TimeSpent) => {
    const minutes = Math.floor(TimeSpent / 60);
    const seconds = TimeSpent % 60;
    return `${minutes}::${seconds > 9 ? "" : 0}${seconds}`;
  };

  const StartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const ResetWatch = () => {
    setIsRunning((prev) => !prev);
    setTimeSpent(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{DisplayTime(TimeSpent)}</p>
      <button onClick={StartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={ResetWatch}>Reset</button>
    </div>
  );
};

export {Stopwatch};
