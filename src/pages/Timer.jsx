import { useState, useEffect } from 'react'
import './timer.css'

const Timer = ({
  focus,
  setFocus,
  short,
  long,
  focusTime,
  setIsRunning,
  isRunning,
}) => {
  const [timing, setTiming] = useState(focusTime)
  const [isFocusedPressed, setIsFocusedPressed] = useState(true)
  const [isShortPressed, setIsShortPressed] = useState(false)
  const [isLongPressed, setIsLongPressed] = useState(false)

  useEffect(() => {
    if (!isRunning || timing <= 0) {
      return
    }

    const timer = setInterval(() => {
      setTiming((prevFocus) => prevFocus - 1)
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

  const buttonPressed = (e) => {
    const button = e.target.innerText
    switch (button) {
      case 'Focus':
        setTiming(focus)
        setIsRunning(false)
        setIsFocusedPressed(true)
        setIsShortPressed(false)
        setIsLongPressed(false)
        break
      case 'Short Break':
        setTiming(short)
        setIsRunning(false)
        setIsFocusedPressed(false)
        setIsShortPressed(true)
        setIsLongPressed(false)
        break
      case 'Long Break':
        setTiming(long)
        setIsRunning(false)
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
      <section className='timer-container'>
        <div>
          <button
            className={isFocusedPressed ? 'active-button' : 'inactive-button'}
            onClick={(e) => {
              // timerAmount(focus)
              buttonPressed(e)
            }}
          >
            Focus
          </button>
          <button
            className={isShortPressed ? 'active-button' : 'inactive-button'}
            onClick={(e) => {
              // timerAmount(300)
              buttonPressed(e)
            }}
          >
            Short Break
          </button>
          <button
            className={isLongPressed ? 'active-button' : 'inactive-button'}
            onClick={(e) => {
              // timerAmount(600)
              buttonPressed(e)
            }}
          >
            Long Break
          </button>
        </div>
        <p className='timer'>{formatTime(timing)}</p>
        <button className='timer-button' onClick={handleTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </section>
    </>
  )
}
export default Timer
