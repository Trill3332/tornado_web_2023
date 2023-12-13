import { useNavigate } from "react-router-dom";
const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className="flex mb-[48px] cursor-pointer" onClick={() => navigate('/')}>
            <img src="Group.svg" alt="" />
            <div>
                <span className="text-[#F77268] text-[30px]">i</span>
                <span className="text-[#FC9419] text-[30px]">blog</span>
            </div>
        </div>
    )
}
export default Logo