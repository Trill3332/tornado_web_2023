const SignedSearch = () => {
    return (
        <div className="flex w-[386px] justify-end items-center gap-[16px]">
            <img src="/u_heart(1).svg" alt="heart" />
            <button className=" inline-flex px-[30px] py-[10px] justify-center items-center gap-[2px] rounded-[10px] bg-[#E86B02] font-Inter text-[15px] font-[500] leading-[21px] text-[#FFF]">
                Post
                <img src="/u_pen.svg" alt="Pen" />
            </button>
            <button className="inline-flex p-[10px] justify-between items-center border-b-[1px] border-b-solid border-[#E86B02] text-[#E86B02] font-Inter text-[15px] font-[500] leading-[21px]">
                Profile
                <img src="/u_user.svg" alt="User" />
            </button>
        </div>
    )
}
export default SignedSearch