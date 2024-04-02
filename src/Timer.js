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
              //setSeconds(15);
              setIsStart(false);
            }
          }, 1000);
          return () => clearInterval(timer);
        }
      }, [seconds, isStart]);

    const handleStartClick = () => {
        if(!isStart) {
            const userInput = prompt("Please type how long you want to count down");
            setSeconds(userInput);
            setIsStart(true);
        }
    }

    const continueStartClick = () => {
        setIsStart(true);
    }

    return (
        <div className="counter-container">
            <h1>Timer: {seconds}</h1>
            <button className="start-button" onClick={seconds > 0 ? continueStartClick : handleStartClick}>START</button>
            <button className="stop-button" onClick={() => setIsStart(false)}>STOP</button>
        </div>
    );
}

export default Timer;
