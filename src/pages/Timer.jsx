import { useState, useEffect } from 'react'
import './timer.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(1200)
  const [isRunning, setIsRunning] = useState(false)
  const [isPressed, setIsPressed] = useState(true)

  useEffect(() => {
    if (!isRunning || seconds <= 0) {
      return
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning])

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60)
      .toString()
      .padStart(2, '0')

    const seconds = (secs % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  const handleTimer = () => {
    setIsRunning(!isRunning)
  }

  const timerAmount = (e, time) => {
    setSeconds(time)
    setIsRunning(false)
  }

  return (
    <>
      <button onClick={(e) => timerAmount(e, 1200)}>Focus</button>
      <button onClick={(e) => timerAmount(e, 300)}>Short Break</button>
      <button onClick={(e) => timerAmount(e, 600)}>Long Break</button>
      <div>{formatTime(seconds)}</div>
      <button onClick={handleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
    </>
  )
}
export default Timer
