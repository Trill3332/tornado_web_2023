import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import CategoryHome from '../components/Categories/CategoryHome'


const Home = () => {
    return (
        <div className='flex w-[1440px]'>
            <Sidebar />
            <div>
                <Header />
                <CategoryHome />
                <MainContent />
                <Footer />
            </div>
        </div>
    )
}
export default Home;
