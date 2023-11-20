function Card({ cardImg, cardTitle, authorName, authorImg, cardDate, cardLikes }) {
    return (
        <div className="p-[10px] flex flex-col items-start gap-[10px] rounded-[8px] bg-[#FFF] shadow-md">
            <img src={cardImg} className="w-[210px] h-[140px] rounded-[8px]" />
            <p className="text-[#181A2A] text-[18px] font-[600] leading-[18px] font-Inter w-[198px]">{cardTitle}</p>
            <div className="card-author flex w-[210px] justify-between items-center">
                <img src={authorImg} className="w-[20.998px] h-[20.998px] rounded-[16.569px]" />
                <p className="text-[#97989F] text-[14px] font-[500] leading-[13.99px]">{authorName}</p>
                <p className="text-[#97989F] text-[12px] font-[400] leading-[10.981px]">{cardDate}</p>
            </div>
            <div className="like-share-btns flex w-[209px] justify-between items-center">
                <div className="likes flex">
                    <img src="u_heart.svg" className="w-[20px] h-[20px]" />
                    <p className="font-Inter text-[#151411] text-[16px] font-[500] leading-[130%] tracking-[0.16px]">{cardLikes}</p>
                </div>
                <div>
                    <button className="flex bg-[#2F80ED] rounded-[5px] gap-[4px] items-center">
                        <img src="u_facebook-f.svg" className="w-[20px] h-[20px]"/>
                        <p className="text-[#F9FCFF] tracking-[0.15px] leading-[130%] font-[500] text-[15px] font-Inter">Share</p>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Card;