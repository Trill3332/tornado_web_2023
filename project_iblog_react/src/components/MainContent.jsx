import Cards from "./Cards";
import ReadMore from "./ReadMore";

const MainContent = () => {
    return (
        <main className="p-[48px]">
            <ul className="inline-flex flex-col items-start gap-[16px]">
                <li>
                    <div className="flex w-[982px] justify-between items-center">
                        <p className="px-[18.2px] py-[10.9px] font-Inter font-bold text-[18px] leading-[23.4px] text-{#151411]">LIFESTYLE</p>

                        <button className="flex w-[116px] h-47.33px px-[13.7px] justify-end items-center gap-[10.922px] rounded-[10.922px]">
                            <p className="text-[#546371] font-Inter text-[16px] font-[500] leading-[180%]">Бүгд</p>
                            <img src="u_angle-right-b.svg" className="w-[21.84444px] h-[21.84444px]" />
                        </button>

                    </div>
                </li>
            </ul>
            <Cards />
            <Cards />
            <Cards />
            <ReadMore />
        </main>
    )
}
export default MainContent;