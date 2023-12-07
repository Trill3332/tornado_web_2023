import { useState } from "react";
import LikeShareButtons from "./LikeShareButtons";


function Card({ cardImg, title, name, authorImg, cardDate, initialLikes }) {
    const [likes, setLikes] = useState(initialLikes);
    function increaseLikes() {
        if (likes === initialLikes) {
            setLikes((prev) => prev + 1);
        } else {
            setLikes((prev) => prev - 1);
        }
    }


    return (
        <div className="p-[10px] flex flex-col items-start gap-[10px] rounded-[8px] bg-[#FFF] shadow-md w-[230px] h-[300px]">
            <div className="w-[210px] h-[140px]">
                <img src={cardImg} className="w-[210px] h-[140px] rounded-[8px]" />
            </div>
            <div className="w-[198px] h-[70px]">
                <p className="text-[#181A2A] text-[16px] font-[600] leading-[18px] font-Inter w-[198px] h-[70px]">{title}</p>
            </div>
            <div className="card-author flex w-[210px] justify-between items-center">
                <img src={authorImg} className="w-[20.998px] h-[20.998px] rounded-[16.569px]" />
                <p className="text-[#97989F] text-[12px] font-[500] leading-[13.99px]">{name}</p>
                <p className="text-[#97989F] text-[10px] font-[400] leading-[10.981px]">{cardDate}</p>
            </div>
            <div className="w-[209px]">
                <LikeShareButtons initialLikes={initialLikes} />
            </div>
        </div>
    )
}
export default Card;