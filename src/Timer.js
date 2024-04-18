import { useState, useEffect } from "react";
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [isStart, setIsStart] = useState(true);
  const [isGoblinMode, setIsGoblinMode] = useState(false);
  const [isMouseHovered, setIsMouseHovered] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [value, setValue] = useState(0);

  //create timer that counts down to zero
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

  useEffect (() => {
    if (value === '9') {
      resetState()
    } 
    return;
  })


  //prompts user to type integer to count down from. Sets isStart to true to proceed with countdown
  const handleStartClick = () => {
    if (!isStart) {
      const userInput = prompt("Please type how long you want to count down");
      setSeconds(userInput);
      setIsStart(true);
    }
  }

  const continueStartClick = () => {
    setIsStart(true);
  }

  const moveRandomPosition = () => {
    setPosition({
      x: position.x + (Math.random() * 150),
      y: position.y + (Math.random() * 150)
    })
    console.log(position);
  }

  const resetState = () => {
    setIsMouseHovered(false);
    setPosition({
      x: 0,
      y: 0
    })
  }

  return (
    <div className={`counter-container ${isGoblinMode ? 'goblinMode' : ''}`}>
      <h1>Timer: {seconds}</h1>
      <button
        className={`start-button ${isMouseHovered ? 'startTroll' : ''}`}
        onClick={seconds > 0 ? continueStartClick : handleStartClick}
        onMouseEnter={() => setIsMouseHovered(!isMouseHovered)}
      >START</button>
      <button
        className="stop-button"
        onClick={() => setIsStart(false)}
        onMouseLeave={() => moveRandomPosition()}
        style={{
          position: 'relative',
          top: position.y,
          left: position.x
        }}
      >STOP</button>
      <button onClick={() => setIsGoblinMode(!isGoblinMode)}>ENTER GOBLIN MODE</button>
      <div>
        <label for="phoneNumber">{value}</label>
        <div>
          <input type="range" min="0" max="10" class="slider" value={value} onChange={(e) => setValue(e.target.value)} id="phoneNumber" />
        </div>
      </div>
    </div>
  );
}

export default Timer;
