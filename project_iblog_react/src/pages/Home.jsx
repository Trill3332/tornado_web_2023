import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import CategoryHome from '../components/Categories/CategoryHome'
import { useState } from 'react'
import { Link,Route } from 'react-router-dom'
const Home = () => {
   

    return (
        <div>
            <CategoryHome />
             <MainContent  />
        </div>
    )
}
export default Home;
