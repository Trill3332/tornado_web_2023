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
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (keyword) => {
    setSearchTerm(keyword);
  }

  return (
    <div className='flex w-[1440px]'>
      <Sidebar />
      <div>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path='/:category' element={<CategoryPage />} />
          <Route path='/:category/:subcategory' element={<SubCategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
