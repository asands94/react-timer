import { useState, useEffect } from 'react'
import './timer.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(1200)
  const [isRunning, setIsRunning] = useState(false)
  const [isFocusedPressed, setIsFocusedPressed] = useState(true)
  const [isShortPressed, setIsShortPressed] = useState(false)
  const [isLongPressed, setIsLongPressed] = useState(false)

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

  const timerAmount = (time) => {
    setSeconds(time)
    setIsRunning(false)
  }

  const buttonPressed = (e) => {
    const button = e.target.innerText
    switch (button) {
      case 'Focus':
        setIsFocusedPressed(true)
        setIsShortPressed(false)
        setIsLongPressed(false)
        break
      case 'Short Break':
        setIsFocusedPressed(false)
        setIsShortPressed(true)
        setIsLongPressed(false)
        break
      case 'Long Break':
        setIsFocusedPressed(false)
        setIsShortPressed(false)
        setIsLongPressed(true)
        break
      default:
        console.log('default')
    }
  }

  return (
    <>
      <button
        className={isFocusedPressed ? 'active-button' : 'inactive-button'}
        onClick={(e) => {
          timerAmount(1200)
          buttonPressed(e)
        }}
      >
        Focus
      </button>
      <button
        className={isShortPressed ? 'active-button' : 'inactive-button'}
        onClick={(e) => {
          timerAmount(300)
          buttonPressed(e)
        }}
      >
        Short Break
      </button>
      <button
        className={isLongPressed ? 'active-button' : 'inactive-button'}
        onClick={(e) => {
          timerAmount(600)
          buttonPressed(e)
        }}
      >
        Long Break
      </button>
      <div>{formatTime(seconds)}</div>
      <button onClick={handleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
    </>
  )
}
export default Timer
