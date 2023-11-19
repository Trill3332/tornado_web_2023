import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex w-[1440px] mx-auto h-[1802px]'>
        <Sidebar />
        <div>
          <Header />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default App
