const MyProfile = ({authorImg,name}) => {
    return (
        <div className="flex flex-col p-[24px] w-[343px] justify-center items-center gap-[24px] bg-[#FFF]">
            <div className="flex items-center gap-[10px]">
                <img src={authorImg} alt="Profile" className="w-[85px] h-[85px] rounded-full" />
                <p className="text-[#333] font-Inter font-[600] text-[24px]">{name}</p>
            </div>
            <div className="flex gap-[30px] items-start">
                <div className="flex flex-col justify-center items-center gap-[8px]">
                    <p className="font-Inter text-[15px] font-[600]">1</p>
                    <p className="font-Inter text-[15px] font-[600]">Follows</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[8px]">
                    <p className="font-Inter text-[15px] font-[600]">0</p>
                    <p className="font-Inter text-[15px] font-[600]">Followers</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[8px]">
                    <p className="font-Inter text-[15px] font-[600]">0</p>
                    <p className="font-Inter text-[15px] font-[600]">Posts</p>
                </div>
            </div>
            <div className="flex w-[294px] px-[30px] py-[10px] justify-center items-center gap-[2px] cursor-pointer">
                    <img src="/profile_pen.svg" alt="pen" className="w-[16px] h-[16px]"/>
                    <p className="font-Inter text-[#546371] font-[500] leading-[21px] text-[15px]">Профайл засах</p>
            </div>
        </div>
    )
}
export default MyProfile