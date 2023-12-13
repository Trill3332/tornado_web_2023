import Footer from "../components/Footer"
import Header from "../components/Header"
import Logo from "../components/Logo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from '../firebase'
const LoginPage = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            if (user) {
                localStorage.setItem("authenticated",JSON.stringify({email:user.email,uid:user.uid}))
                navigate('/profile')
            }
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="flex flex-col items-center w-[1440px] h-[1187px]">
            <div className="flex items-center justify-between">
                <div className="mt-[30px]">
                    <Logo />
                </div>
                <Header />
            </div>
            <div className="px-[65px] py-[45px] inline-flex flex-col items-center bg-[#FFF] justify-center h-[50%]">
                <main className="flex flex-col items-start gap-[24px]">
                    <h1 className="font-Inter font-[700] text-[20px] text-[#E86B02]">Нэвтрэх</h1>
                    <form className="flex flex-col items-end gap-[16px]">
                        <input
                            type="text"
                            className="w-[478px] h-[50px] px-[24px] bg-[#F5F7F9] text-[#546371]"
                            placeholder="И-мэйл эсвэл утасны дугаар"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input
                            type="password"
                            className="w-[478px] flex px-[24px] py-[14px] justify-between items-center bg-[#F5F7F9] text-[#546371] after:content-eye after:inline-block after:w-[20px] after:h-[10px]"
                            placeholder="Нууц үг"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <p className="font-Inter text-[16px] font-[400] leading-[20px] underline text-[#E86B02]">Нууц үг мартсан уу?</p>
                        <button 
                            onClick={handleLogin}
                            className="w-[478px] h-[54px] px-[24px] py-[12px] items-center justify-center gap-[10px] bg-[#E86B02] rounded-[10px] text-center text-[#FFF] text-[16px] font-[500] font-Inter">
                            Нэвтрэх
                        </button>
                        <button 
                            onClick={() => navigate('/register')}
                            className="w-[478px] h-[54px] px-[24px] py-[12px] items-center justify-center gap-[10px] bg-[#FFF] border-[2px] border-solid border-[#E86B02] rounded-[10px] font-Inter text-center text-[16px] font=[500]">
                            Бүртгүүлэх
                        </button>
                    </form>
                </main>
            </div>
            <Footer />
        </div>

    )
}
export default LoginPage