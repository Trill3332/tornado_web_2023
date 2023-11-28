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
        <div className="flex gap-[22px] mt-[5px] mb-[5px]">
            
            {cards}
        </div>
    )
}
export default Cards;