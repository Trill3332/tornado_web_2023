

import React, { useState } from "react";

function LikeShareButtons({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  function increaseLikes() {
    if (likes === initialLikes) {
      setLikes((prev) => prev + 1);
    } else {
      setLikes((prev) => prev - 1);
    }
  }

  return (
    <div className="like-share-btns flex  justify-between items-center">
      <div className="likes flex">
        {likes === initialLikes ? (
          <img
            src="u_heart.svg"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={increaseLikes}
          />
        ) : (
          <img
            src="red-heart.svg"
            className="w-[20px] h-[20px] cursor-pointer bg-red"
            onClick={increaseLikes}
          />
        )}
        <p className="font-Inter text-[#151411] text-[16px] font-[500] leading-[130%] tracking-[0.16px]">
          {likes}
        </p>
      </div>
      <div>
        <button className="flex bg-[#2F80ED] rounded-[5px] gap-[4px] items-center">
          <img src="u_facebook-f.svg" className="w-[20px] h-[20px]" />
          <p className="text-[#F9FCFF] tracking-[0.15px] leading-[130%] font-[500] text-[15px] font-Inter">
            Share
          </p>
        </button>
      </div>
    </div>
  );
}

export default LikeShareButtons;
