import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ex01 from './components/ex01'
import Ex02 from './components/ex02'
import Ex03 from './components/ex03'
import Ex04 from './components/ex04'
import Ex05 from './components/ex05'
import Comments from './components/Comments'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Ex05 />
    </>
  )
}

export default App
