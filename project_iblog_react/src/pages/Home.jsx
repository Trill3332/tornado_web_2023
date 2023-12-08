import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import CategoryHome from '../components/Categories/CategoryHome'
import { useState } from 'react'
import { Link,Route } from 'react-router-dom'
const Home = () => {
    const [searchTerm,setSearchTerm] = useState("");

    const handleSearch = (keyword) => {
        setSearchTerm(keyword);
    }

    return (
        <div className='flex w-[1440px]'>
            <Sidebar />
            <div>
                <Header onSearch={handleSearch} />
                <CategoryHome />
                <MainContent searchTerm={searchTerm}/>
                <Footer />
            </div>
        </div>
    )
}
export default Home;
