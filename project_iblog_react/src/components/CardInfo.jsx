import React from "react";
import CategoryHobby from "./Categories/CategoryHobby";
import LikeShareButtons from "./LikeShareButtons";

const CardInfo = ({ article, profiles }) => {
  const authorProfile = profiles.find((profile) => profile.name === article.author); // Find profile based on author name

  return (
    <div className="flex flex-col w-[984px] mb-[72px]">
      <div className="flex h-[75px]">
        <CategoryHobby />
        <div className="mt-[25px] flex gap-[21px]">
          <img
            src="u_angle-right-b.svg"
            className="h-[24px] w-[24px] pt-[3px]"
          />
          <p className="text-center font-Inter text-[18px] text-[#1A1E23] font-[700]">
            {article.title}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <img
          src={authorProfile.authorImg}
          alt=""
          className="w-[60px] h-[60px] rounded-full"
        />
        <p className="ml-[8px] text-[#333] font-Inter font-[600]">
          {authorProfile.name}
        </p>
        <p className="text-[#2F80ED] font-Inter text-[18px] font-[600]">
          Follow
        </p>
      </div>
      <div className="mt-[24px]">
        <img src={article.urlToImage} alt="" className="h-[320px] w-[897px] mb-[10px]" />
      </div>
      <div className="mt-[10px] mb-[10px]">
        <LikeShareButtons initialLikes={authorProfile.initialLikes} />
      </div>
      <p className="font-Inter text-[20px] font-[400] leading-[30px] text-[#242A31] mt-[10px] mb-[10px]">
        {article.description}
      </p>
    </div>
  );
};

export default CardInfo;
