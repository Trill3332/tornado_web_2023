import Logo from "../Logo";
import Search from "../Search";
import MyProfile from "./MyProfile";
import SignedSearch from "./SignedSearch";
import { profiles } from "../../data/data";
const Profile = () => {

    const selectedProfile = profiles[0];

    return (
        <div className="w-[971px] h-[40px] items-start gap-[1px]">
            <header className="flex px-[48px] py-[39px] w-[1440px] h-[99px] justify-between items-center">
                <Logo />
                <Search />
                <SignedSearch />
            </header>
            <main>
                <MyProfile 
                            authorImg = {selectedProfile.authorImg}/>
            </main>
        </div>
    )
}


export default Profile;