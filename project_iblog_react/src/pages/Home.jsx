import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryHome from '../components/Categories/CategoryHome'
import Cards from '../components/Cards'
import { Outlet } from 'react-router-dom'

const Home = () => {
   

    return (
        <div className='flex w-[1440px]'>
            <Sidebar />
            <div>
                <Header />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Home;
