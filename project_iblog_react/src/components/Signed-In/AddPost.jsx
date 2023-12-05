import Logo from "../Logo";
import Search from "../Search";
import MyProfile from "./MyProfile";
import SignedSearch from "./SignedSearch";
import { profiles } from "../../data/data";
import Footer from "../Footer";
const AddPost = () => {

    const selectedProfile = profiles[0];

    return (
        <div className="w-[1440px] h-[1255px]]">
            <div className="h-screen">
                <header className="flex px-[48px] py-[39px] w-[1440px] h-[99px] justify-between items-center">
                    <Logo />
                    <Search />
                    <SignedSearch />
                </header>
                <main className="flex w-[1344px] h-[631px] items-start gap-[155px]">
                    <MyProfile
                        authorImg={selectedProfile.authorImg}
                        name={selectedProfile.name}
                    />
                    <div className="flex flex-col items-start gap-[35px]">
                        <div className="flex w-[846px] h-[40px] items-start gap-[1px]">
                                <img src="/addpost_pen.svg" alt="pen" className="w-[24px] h-[24px]" />
                                <p className="font-Inter font-[700] text-[18px] text-[#333]">Пост нэмэх</p>
                        </div>
                        <div className="flex flex-col items-start gap-[10px]">
                            <p className="font-Inter text-[18px] font-[700] leading-[22px] text-[#000]">Категори сонгох</p>
                            
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default AddPost;