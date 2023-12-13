import Logo from "../Logo";
import Search from "../Search";
import MyProfile from "./MyProfile";
import SignedSearch from "./SignedSearch";
import { profiles } from "../../data/data";
import ProfileCategories from "./ProfileCategories";
import NoPosts from "./NoPosts";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const selectedProfile = profiles[0];
    const [authenticated, setAuthenticated] = useState(null)
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        console.log(authenticated)
        if (loggedInUser) {
            setAuthenticated(JSON.parse(loggedInUser));
            navigate('/profile');
        }
    }, []);

    if(!authenticated) {
        navigate('login');
    } else {
        return (
            <div className="w-[1440px] h-[1255px]]">
                <div className="h-screen">
                    <header className="flex px-[48px] py-[39px] w-[1440px] h-[99px] justify-between items-center">
                        <div className="mt-[48px]">
                            <Logo />
                        </div>
                        <Search />
                        <SignedSearch />
                    </header>
                    <main className="inline-flex gap-[30px] items-start">
                        <MyProfile
                            authorImg={selectedProfile.authorImg}
                            name={authenticated.email}
                        />
                        <ProfileCategories />
                    </main>
                    <NoPosts />
                </div>
                <Footer />
            </div>
        )
    }

}


export default Profile;