import CategoryHobby from "./Categories/CategoryHobby"

const PostContent = () => {
    return (
        <main className="flex w-[898px] flex-col items-start gap-[16px]">
            <div className="flex h-[75px] px-[16px] py-[10px]">
                <CategoryHobby />
                <div className="mt-[25px] flex gap-[21px]">
                    <img src="u_angle-right-b.svg" className="h-[24px] w-[24px] pt-[3px]" />
                    <p className="text-center font-Inter text-[18px] text-[#1A1E23] font-[700]">Theme Installation</p>
                </div>
            </div>
        </main>
    )
}
export default PostContent