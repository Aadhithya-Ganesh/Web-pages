import classes from "./Timer.module.css";
import { useState } from "react";

const Timer = () => {
  const duration = (8 * 24 * 60 * 60 + 23 * 60 * 60 + 55 * 60 + 44) * 1000; 

  const targetTime = Date.now() + duration;

  const now = Date.now();
  const difference = targetTime - now;
  console.log(difference);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds);

  return (
    <div className={classes.timerContainer}>
      <div className={classes.numberContainer}>
        <div className={classes.number}>{/* <h1>{days}</h1> */}</div>
        <p>Days</p>
      </div>
      <div className={classes.numberContainer}>
        <div className={classes.number}>{/* <h1>{hours}</h1> */}</div>
        <p>Hours</p>
      </div>
      <div className={classes.numberContainer}>
        <div className={classes.number}>{/* <h1>{minutes}</h1> */}</div>
        <p>Minutes</p>
      </div>
      <div className={classes.numberContainer}>
        <div className={classes.number}>{/* <h1>{seconds}</h1> */}</div>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
