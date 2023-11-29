import CategoryHobby from "../components/Categories/CategoryHobby"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import PostContent from "../components/PostContent"
import Sidebar from "../components/Sidebar"

const PostItem = () => {
    return (
        <div className="flex w-[1440px]">
            <Sidebar />
            <div>
                <Header />
                <PostContent />
                <Footer />
            </div>
        </div>
    )
}
export default PostItem;