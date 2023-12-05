import Logo from "../Logo";
import Search from "../Search";
import MyProfile from "./MyProfile";
import SignedSearch from "./SignedSearch";
import { profiles } from "../../data/data";
import ProfileCategories from "./ProfileCategories";
import NoPosts from "./NoPosts";
import Footer from "../Footer";
const Profile = () => {

    const selectedProfile = profiles[0];

    return (
        <div className="w-[1440px] h-[1255px]]">
            <div className="h-screen">
                <header className="flex px-[48px] py-[39px] w-[1440px] h-[99px] justify-between items-center">
                    <Logo />
                    <Search />
                    <SignedSearch />
                </header>
                <main className="inline-flex gap-[30px] items-start">
                    <MyProfile
                        authorImg={selectedProfile.authorImg}
                        name={selectedProfile.name}
                    />
                    <ProfileCategories />
                </main>
                <NoPosts />
            </div>
            <Footer />
        </div>
    )
}


export default Profile;