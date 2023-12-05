import { useState } from 'react'
import PostItem from './pages/PostItem'
import Home from './pages/Home'
import MyProfile from './components/Signed-In/MyProfile'
import Profile from './components/Signed-In/Profile'
import AddPost from './components/Signed-In/AddPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddPost />
    </>
  )
}

export default App
