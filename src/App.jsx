import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Timer from './pages/Timer'

function App() {
  const focusTime = localStorage.getItem('focus')
  focusTime ? null : localStorage.setItem('focus', 1200)

  const [focus, setFocus] = useState(focusTime)
  const [short, setShort] = useState(300)
  const [long, setLong] = useState(600)
  const [isRunning, setIsRunning] = useState(false)
  return (
    <Layout setFocus={setFocus} focusTime={focusTime}>
      <Routes>
        <Route
          path='/'
          element={
            <Timer
              isRunning={isRunning}
              focusTime={focusTime}
              setFocus={setFocus}
              focus={focus}
              short={short}
              long={long}
              setIsRunning={setIsRunning}
            />
          }
        />
      </Routes>
    </Layout>
  )
}

export default App
