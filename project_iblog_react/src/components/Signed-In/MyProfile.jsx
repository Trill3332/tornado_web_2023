const MyProfile = ({authorImg}) => {
    return (
        <div className="flex flex-col p-[24px] w-[343px] justify-center items-center gap-[24px] bg-[#FFF]">
            <div className="flex items-center gap-[10px]">
                <img src={authorImg} alt="Profile" className="w-" />
            </div>
        </div>
    )
}
export default MyProfile