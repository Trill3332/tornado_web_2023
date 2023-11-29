import Card from "./Card";
import React, { useState } from "react";
import { profiles } from "../data/data";

function Cards() {
    const [profileState, setProfileState] = useState(profiles);
    console.log(profileState)

    const cards = profileState.map((profile) => {
        return (
            <Card
                cardImg={profile.cardImg}
                name={profile.name}
                authorImg={profile.authorImg}
                title={profile.title}
                cardDate={profile.cardDate}
            />
        )
    });

    return (
        <div className="flex gap-[22px] mt-[5px] mb-[5px] relative">
            {cards}
            <div className="slider flex w-[986px] h-[52px] justify-between items-center absolute bottom-[50%] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)">
                <button>
                    <img src="arrow-right.svg" alt="" className=" rotate-180 w-[52px] h-[52px] p-[10px] bg-[#FFFFFF] rounded-[50px]"/>
                </button>
                <button>
                    <img src="arrow-right.svg" alt="" className="w-[52px] h-[52px] p-[10px] bg-[#FFFFFF] rounded-[50px]"/>
                </button>
            </div>
        </div>
    )
}
export default Cards;