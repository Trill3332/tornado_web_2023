import { useState } from 'react'
import Home from './pages/Home'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
