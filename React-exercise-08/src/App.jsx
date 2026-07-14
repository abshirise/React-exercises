import { useEffect } from "react"
import { useState } from "react"


function App(){

  const [initialTime, setInitialTime] = useState(30)
  const [timeLeft, setTimeLeft] = useState(30)
  const [isRunning, setIsRunning] = useState(false)
  
  
  useEffect(()=>{
    let timerId;
    if(isRunning && timeLeft > 0){
      timerId = setInterval(() => {
        setTimeLeft((prev)=> prev - 1)
      }, 1000);

      // clean
      return ()=> clearInterval(timerId)
    }
  },[isRunning, timeLeft])

  const handleTime = (e) =>{
    const value = Number(e.target.value)
    setInitialTime(value)
    setTimeLeft(value)
    isRunning(false)
  }
  
  // onclick functions
  const handleStart = ()=>{
    if(timeLeft > 0){
      setIsRunning(true)
    }
  }

  const handleStop = ()=>{
      setIsRunning(false)
  }

  const handleReset = ()=>{
      setIsRunning(false)
      setTimeLeft(initialTime)
  }

  return(
    <div>
      <h2>Count down timer</h2>
      <label htmlFor="number">Set Timer</label>
      <input type="number" value={initialTime} onChange={handleTime}/>
      <p>Stopwatch : {timeLeft} seconds</p>
      <button disabled = {isRunning || timeLeft === 0} onClick={handleStart}>Start</button>
      <button disabled = {!isRunning} onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App