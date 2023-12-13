import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="flex gap-[10px]">
        <button 
            onClick={() => navigate('/register')}
            className="py-[10px] px-[30px] rounded-[10px] border border-solid border-[#DCE3EA] bg-[#FFFFFF] text-[#E86B02]">
            Register
        </button>
        <button 
            onClick={() => navigate('login')}
            className="py-[10px] px-[30px] rounded-[10px] border border-solid border-[#DCE3EA] bg-[#E86B02] text-[#FFFFFF]">
            Login
        </button>
    </div>
    )
}
export default Login