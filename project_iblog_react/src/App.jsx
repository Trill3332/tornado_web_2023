import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex w-[1440px]'>
        <Sidebar />
        <div>
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
