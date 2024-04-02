import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(10);
    const [isStart, setIsStart] = useState(true);

    useEffect(() => {
        if (isStart) {
          const timer = setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            } else {
              clearInterval(timer);
              setSeconds(15);
              setIsStart(false);
            }
          }, 1000);
          return () => clearInterval(timer);
        }
      }, [seconds, isStart]);

    let currentCount = seconds;

    return (
        <div className="counter-container">
            <h1>Timer: {currentCount}</h1>
            <button className="start-button" onClick={() => setIsStart(true)}>START</button>
            <button className="stop-button">STOP</button>
        </div>
    );
}

export default Timer;
