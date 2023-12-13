import React, { useState } from "react";
import Logo from "./Logo";
import { lifestyleTags } from "../data/lifestyle";
import { sportTags } from "../data/sport";
import { Link, useParams } from "react-router-dom";
import { technologyTags } from "../data/technology";
import { entertainmentTags } from "../data/entertainment";

const Sidebar = () => {
    const { category, subcategory } = useParams();
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [toggleThree, setToggleThree] = useState(false);
    const [toggleFour, setToggleFour] = useState(false);
    const [activeLifestyle, setActiveLifestyle] = useState(-1);
    const [activeSport, setActiveSport] = useState(0);
    const [activeTechnology, setActiveTechnology] = useState(-1);
    const [activeEntertainment, setActiveEntertainment] = useState(-1);

    return (
        <aside className="px-[49px] py-[40px] flex flex-col border-r-[1px] border-solid border-[#E2E8EE]">
            <Logo />
            <div className="flex flex-col gap-[32px]">
                <Link to='/lifestyle'>
                    <div className="w-[250px] flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer hover:bg-[#E86B02] active:bg-[#E86B02] w-[250px] py-[8px] text-[#242A31] text-[14px] font-Inter font-semibold hover:text-[#FFFFFF]"
                            onClick={() => setToggleOne(!toggleOne)}>
                            Lifestyle
                            {
                                toggleOne ? <img src="downarrow.svg" alt="" /> : <img src="uparrow.svg" alt="" />
                            }
                        </div>
                        {toggleOne && (
                            lifestyleTags.map((item, index) => (
                                <ul key={index} onClick={() => setActiveLifestyle(index)} className={`${index === activeLifestyle ? 'bg-[#E86B02] text-[#FFFFFF]' : null}`}>
                                    <Link to={`/lifestyle/${item.name}`}>
                                        <li className="py-[8px] px-[16px] font-Inter cursor-pointer">{item.name}</li>
                                    </Link>
                                </ul>
                            ))
                        )}
                    </div>
                </Link>
                <Link to='/sport'>
                    <div className="w-[250px] flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer hover:bg-[#E86B02] active:bg-[#E86B02] w-[250px] py-[8px] text-[#242A31] text-[14px] font-Inter font-semibold hover:text-[#FFFFFF]"
                            onClick={() => setToggleTwo(!toggleTwo)}>
                            Sport
                            {
                                toggleTwo ? <img src="downarrow.svg" alt="" /> : <img src="uparrow.svg" alt="" />
                            }
                        </div>
                        {toggleTwo && (
                            sportTags.map((item, index) => (
                                <ul key={index} onClick={() => setActiveSport(index)} className={`${index === activeSport ? 'bg-[#E86B02] text-[#FFFFFF]' : null}`}>
                                    <Link to={`/sport/${item.name}`}>
                                        <li className="py-[8px] px-[16px] font-Inter cursor-pointer">{item.name}</li>
                                    </Link>
                                </ul>
                            ))
                        )}
                    </div>
                </Link>
                <Link to='/technology'>
                    <div className="w-[250px] flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer hover:bg-[#E86B02] active:bg-[#E86B02] w-[250px] py-[8px] text-[#242A31] text-[14px] font-Inter font-semibold hover:text-[#FFFFFF]"
                            onClick={() => setToggleThree(!toggleThree)}>
                            Technology
                            {
                                toggleThree ? <img src="downarrow.svg" alt="" /> : <img src="uparrow.svg" alt="" />
                            }
                        </div>
                        {toggleThree && (
                            technologyTags.map((item, index) => (
                                <ul key={index} onClick={() => setActiveTechnology(index)} className={`${index === activeTechnology ? 'bg-[#E86B02] text-[#FFFFFF]' : null}`}>
                                    <Link to={`/technology/${item.name}`}>
                                        <li className="py-[8px] px-[16px] font-Inter cursor-pointer">{item.name}</li>
                                    </Link>
                                </ul>
                            ))
                        )}
                    </div>
                </Link>
                <Link to='/entertainment'>
                    <div className="w-[250px] flex flex-col">
                        <div className="flex justify-between items-center cursor-pointer hover:bg-[#E86B02] active:bg-[#E86B02] w-[250px] py-[8px] text-[#242A31] text-[14px] font-Inter font-semibold hover:text-[#FFFFFF]"
                            onClick={() => setToggleFour(!toggleFour)}>
                            Entertainment
                            {
                                toggleFour ? <img src="downarrow.svg" alt="" /> : <img src="uparrow.svg" alt="" />
                            }
                        </div>
                        {toggleFour && (
                            entertainmentTags.map((item, index) => (
                                <ul key={index} onClick={() => setActiveEntertainment(index)} className={`${index === activeEntertainment ? 'bg-[#E86B02] text-[#FFFFFF]' : null}`}>
                                    <Link to={`/entertainment/${item.name}`}>
                                        <li className="py-[8px] px-[16px] font-Inter cursor-pointer">{item.name}</li>
                                    </Link>
                                </ul>
                            ))
                        )}
                    </div>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
