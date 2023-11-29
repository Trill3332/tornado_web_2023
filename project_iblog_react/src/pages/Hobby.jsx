import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import CategoryHobby from '../components/Categories/CategoryHobby'

const Hobby = () => {
    return (
        <div className='flex w-[1440px]'>
            <Sidebar />
            <div>
                <Header />
                <CategoryHobby />
                <div
                    className="w-[150px] h-[40px] ml-[48px] mb-[-50px] mt-[48px] py-[10px] pr-[20px] border-b-[2px] border-[#E86B02] text-center font-Inter text-[18px] font-[700] text-[#333]">
                    Hobby
                </div>
                <MainContent />
                <Footer />
            </div>
        </div>
    )
}
export default Hobby;
