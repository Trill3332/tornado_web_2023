import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logo from '../components/Logo'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'
function SignUp() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [repeatPassword,setRepeatPassword] = useState("")
    const [username,setUsername] = useState("")
    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
            const user = userCredential.user;
            if(user) {
                navigate('/login')
            }
        }).catch((error) => {
            console.error(error)
        })
    }
    const navigate = useNavigate();
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
                    <h1 className="font-Inter font-[700] text-[20px] text-[#E86B02]">Бүртгүүлэх</h1>
                    <form onSubmit={handleRegister} className="flex flex-col items-end gap-[16px]">
                        <input
                            type="text"
                            className="w-[478px] h-[50px] px-[24px] bg-[#F5F7F9] text-[#546371]"
                            placeholder="И-мэйл эсвэл утасны дугаар"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-[478px] flex px-[24px] py-[14px] justify-between items-center bg-[#F5F7F9] text-[#546371] after:content-eye after:inline-block after:w-[20px] after:h-[10px]"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-[478px] flex px-[24px] py-[14px] justify-between items-center bg-[#F5F7F9] text-[#546371] after:content-eye after:inline-block after:w-[20px] after:h-[10px]"
                            placeholder="Нууц үг зохиох"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-[478px] flex px-[24px] py-[14px] justify-between items-center bg-[#F5F7F9] text-[#546371] after:content-eye after:inline-block after:w-[20px] after:h-[10px]"
                            placeholder="Нууц үг давтах"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <button 
                            onClick={handleRegister}
                            className='w-[478px] h-[54px] px-[24px] py-[12px] bg-[#E86B02] rounded-[10px] text-[#FFF] text-center font-[500] text-[16px] font-Inter'>Бүртгүүлэх</button>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp