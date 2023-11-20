import Cards from "./Cards";

const MainContent = () => {
    return (
        <main className="p-[48px]">
            <ul className="inline-flex flex-col items-start gap-[16px]">
                <li>
                    <div className="flex w-[982px] justify-between items-center">
                        <p className="px-[18.2px] py-[10.9px] font-Inter font-bold text-[18px] leading-[23.4px] text-{#151411]">LIFESTYLE</p>
                        <div className="flex">
                            <p className="text-[#546371] font-Inter text-[16px] font-[500] leading-[180%]">See More</p>
                            <button>
                                <img src="u_angle-right-b.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <Cards />
            <Cards />
            <Cards />
        </main>
    )
}
export default MainContent;