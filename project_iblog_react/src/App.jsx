import { useState } from 'react'
import Home from './pages/Home'
import Hobby from './pages/Hobby'
import PostItem from './pages/PostItem'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <PostItem />
    </>
  )
}

export default App
