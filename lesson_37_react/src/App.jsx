import { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Pages from './components/Pages'
import Contact from './components/Contact'
import Register from './components/Register'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Pages title={'Home'}/>} />
          <Route path='/about' element={<Pages title={'About'} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
