import React, { useState } from "react";


const Sidebar = () => {

    const [toggleOne, setToggleOne] = useState(true)
    const [toggleTwo, setToggleTwo] = useState(true)


    return (
        <aside className="px-[49px] py-[40px] flex flex-col border-r-[1px] border-solid border-[#E2E8EE]">
            <div className="flex mb-[45px]">
                <img src="Group.svg" alt="" />
                <div>
                    <span className="text-[#F77268] text-[30px]">i</span>
                    <span className="text-[#FC9419] text-[30px]">blog</span>
                </div>
            </div>
            <div className="flex flex-col gap-[32px]">
                <div className="w-[250px] flex flex-col">
                    <div className="flex justify-between items-center cursor-pointer hover:bg-[#E86B02] active:bg-[#E86B02] w-[250px] py-[8px] text-[#242A31] text-[14px] font-Inter font-semibold hover:text-[#FFFFFF]"
                        onClick={() => setToggleOne(!toggleOne)}>
                        Lifestyle
                        <img src="downarrow.svg" alt="" />
                    </div>
                    {toggleOne && (
                        <ul>
                            <li className="py-[8px] px-[16px] font-Inter">
                                Hobby
                            </li>
                            <li className="py-[8px] px-[16px] font-Inter">
                                Travel
                            </li>
                            <li className="py-[8px] px-[16px] font-Inter">
                                Food&Beverage
                            </li>
                            <li className="py-[8px] px-[16px] font-Inter">
                                Home and decor
                            </li>
                        </ul>
                    )}
                </div>
                <div className="w-[250px] flex flex-col">
                    <div className="flex justify-between items-center cursor-pointer hover:bg-[#E86B02] active:bg-[#E86B02] w-[250px] py-[8px] text-[#242A31] text-[14px] font-Inter font-semibold hover:text-[#FFFFFF]"
                        onClick={() => setToggleTwo(!toggleTwo)}>
                        Sport
                        <img src="downarrow.svg" alt="" />
                    </div>
                    {toggleTwo && (
                        <ul>
                            <li className="py-[8px] px-[16px] font-Inter">
                                Soccer
                            </li>
                            <li className="py-[8px] px-[16px] font-Inter">
                                Volleyball
                            </li>
                        </ul>
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[#242A31] text-[14px] font-semibold font-Inter">Technology</p>
                    <img src="downarrow.svg" alt="" />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-[#242A31] text-[14px] font-semibold font-Inter">Entertainment</p>
                    <img src="downarrow.svg" alt="" />
                </div>
            </div>

        </aside>
    )
}
export default Sidebar;