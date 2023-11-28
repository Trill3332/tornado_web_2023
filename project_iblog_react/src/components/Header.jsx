import Search from "./Search";

const Header = () => {
    return (
        <header className="w-[1091px] py-[39px] px-[48px] gap-[116px] flex bg-[#FFF] border-b-[1px] border-solid border-[#E2E8EE] items-start justify-end">
                <Search />
        <div className="flex gap-[10px]">
            <button className="py-[10px] px-[30px] rounded-[10px] border border-solid border-[#DCE3EA] bg-[#FFFFFF] text-[#E86B02]">
                Register
            </button>
            <button className="py-[10px] px-[30px] rounded-[10px] border border-solid border-[#DCE3EA] bg-[#E86B02] text-[#FFFFFF]">
                Login
            </button>
        </div>
        </header>
    )
}
export default Header;