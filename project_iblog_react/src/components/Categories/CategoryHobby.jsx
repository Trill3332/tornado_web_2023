import { useParams } from "react-router-dom"
const CategoryHobby = () => {
    return (
        <>
            <div className="flex pl-[48px] mb-[-48px] h-[75px] items-center gap-[5px]">
                <p 
                className="flex text-[#546371] text-center text-[18px] font-[500]">
                    Нүүр Хуудас
                    <span>
                        <img src="u_angle-right-b.svg" className="h-[24px] w-[24px] mt-[3px] " />
                    </span>
                </p>

                <p
                className="flex text-[#546371] text-center text-[18px] font-[500]">
                    Lifestyle
                    <span>
                        <img src="u_angle-right-b.svg" className="h-[24px] w-[24px] mt-[3px]" />    
                    </span>
                </p>
                
                <p
                className="flex text-[#546371] text-center text-[18px] font-[500]">
                    Hobby
                </p>                
            </div>
        </>
    )
}
export default CategoryHobby