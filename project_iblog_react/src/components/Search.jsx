import { useState } from "react"


const Search = ({onSearch}) => {
    const [searchTerm,setSearchTerm] = useState("");


    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term);
    } 


    return (
        <div className="flex w-[572px] h-[39px] px-[25px] justify-between items-center rounded-[20px] border-[#D2D8D4] border border-solid">
        <input 
                type="text" 
                className="w-[150%] h-[16px] text-[#898886] text-[16px] font-normal outline-none" placeholder="Search" 
                value={searchTerm}
                onChange={handleChange}
        />
        <button className="ml-[5px]">
            <img src="search-normal.svg" alt="" className="w-[30px] h-[30px]"/>
        </button>
    </div>
    )
}
export default Search