import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'



const Home = () => {
    return (
        <div className='flex w-[1440px]'>
            <Sidebar />
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        </div>
    )
}
export default Home;
