import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Timer from './pages/Timer'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Timer />} />
      </Routes>
    </Layout>
  )
}

export default App
