import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='w-[1440px] h-screen justify-center mx-auto'>
        <Sidebar />
        <Header />
        
      </div>
    </div>
  )
}

export default App
