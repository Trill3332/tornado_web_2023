import { useState } from 'react'
import PostItem from './pages/PostItem'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostItem />
    </>
  )
}

export default App
