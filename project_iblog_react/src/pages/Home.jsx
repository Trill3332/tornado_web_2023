import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryHome from '../components/Categories/CategoryHome'
import { useState } from 'react'
import { Link,Route } from 'react-router-dom'
import Cards from '../components/Cards'
const Home = () => {
   

    return (
        <div>
            <CategoryHome />
            <Cards />
        </div>
    )
}
export default Home;
