const Footer = () => {
    return (
        <footer className="w-[1091px] px-[65px] py-[25px] flex gap-[10px] items-start flex-shrink-0 h-[190px] border-t-[1px] border-[#E2E8EE] border-solid bg-[#FFF]">
            <div className="container flex flex-col w-[216.75px]">
                <div className="flex info">
                    <img src="Group.svg" alt="" />
                    <div>
                        <span className="text-[#F77268] text-[30px]">i</span>
                        <span className="text-[#FC9419] text-[30px]">blog</span>
                    </div>
                </div>
                <span className="text-[#4D5A66] text-[9.973px] font-[400]">Write,Read,Enjoy</span>
            </div>
            <div className="links w-[371.25px] flex justify-center items-start gap-[60px]">
                <div className="helplink flex flex-col items-start gap-[18px]">
                    <p className="text-[#181A2A] text-[16px] font-[600] leading-[21px] font-Inter">Тусламж</p>
                    <div className="flex flex-col">
                        <a href="#" className="font-Inter text-[14px] font-[500] leading-[18px] text-[#3B3C4A]">Хэрэглэх заавар</a>
                        <a href="#" className="font-Inter text-[14px] font-[500] leading-[18px] text-[#3B3C4A]">Санал хүсэлт</a>
                    </div>
                </div>
            </div>
            <div className="category flex flex-col items-start gap-[18px]">
                <p className="text-[#181A2A] text-[16px] font-[600] leading-[21px] font-Inter">Бидэнтэй холбогдох</p>
                <div>
                    <div className="flex">
                        <img src="fi_mail.svg" className="w-[15px] h-[15px]" />
                        <p className="font-Inter font-[500] text-[14px] text-[#181A2A] leading-[18px]">info@jstemplate.net</p>
                    </div>
                    <div className="flex">
                        <img src="fi_phone.svg" className="w-[15px] h-[15px]" />
                        <p className="font-Inter font-[500] text-[14px] text-[#181A2A] leading-[18px]">+976 9911223344</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;