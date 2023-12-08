import Login from "./Login";
import Search from "./Search";

const Header = ({onSearch}) => {
    return (
        <header className="w-[1091px] py-[39px] px-[48px] gap-[116px] flex bg-[#FFF] border-b-[1px] border-solid border-[#E2E8EE] items-start justify-end">
                <Search onSearch={onSearch} />
                <Login />
        </header>
    )
}
export default Header;