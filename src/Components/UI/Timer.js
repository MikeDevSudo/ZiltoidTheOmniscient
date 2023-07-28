import React, { useState, useEffect } from "react";
import classes from "./Timer.module.css";

const Timer = ({ selectedDifficulty, onTimerEnd }) => {
  const getInitialCountdownTime = () => {
    switch (selectedDifficulty) {
      case "easy":
        return 180;
      case "medium":
        return 120;
      case "hard":
        return 60;
      default:
        return 180;
    }
  };

  const initialCountdownTime = getInitialCountdownTime();
  const [timer, setTimer] = useState(initialCountdownTime);
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      onTimerEnd();
    }
  }, [timer, onTimerEnd]);

  useEffect(() => {
    const ratio = 100 / initialCountdownTime;
    const newProgress = timer * ratio;
    setProgress(newProgress);
  }, [timer, initialCountdownTime]);

  return (
    <div className={classes.timerContainer}>
      <div className={classes.timerBar} style={{ width: `${progress}%` }}></div>
      <div className={classes.timerText}>Ziltoid's patience</div>
    </div>
  );
};

export default Timer;
