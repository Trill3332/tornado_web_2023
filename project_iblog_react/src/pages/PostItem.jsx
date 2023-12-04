import { profiles } from "../data/data"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PostContent from "../components/PostContent"
import Sidebar from "../components/Sidebar"

const PostItem = () => {

    const selectedProfile = profiles[0];

    return (
        <div className="flex w-[1440px]">
            <Sidebar />
            <div>
                <Header />
                <PostContent 
                    authorImg = {selectedProfile.authorImg}
                    name = {selectedProfile.name}
                    initialLikes={selectedProfile.initialLikes}
                />
                <Footer />
            </div>
        </div>
    )
}
export default PostItem;