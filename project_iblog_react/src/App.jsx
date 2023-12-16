import { useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import CategoryPage from './pages/CategoryPage'
import SubCategoryPage from './pages/SubCategoryPage'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import Profile from './components/Signed-In/Profile'
function App() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className=''>

      <div>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<Cards />} />
            <Route path='/:category' element={<CategoryPage />} />
            <Route path='/:category/:subcategory' element={<SubCategoryPage />} />
          </Route>
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
