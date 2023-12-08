import Card from "./Card";
import React, { useState, useEffect } from "react";
import { profiles } from "../data/data";
import axios from 'axios';

function Cards({ searchTerm }) {
  const [profileState, setProfileState] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-12-06&to=2023-12-06&sortBy=popularity&apiKey=a7b6d210c826475484be45ea9f247a29');
        const articles = await response.data.articles;
        console.log(articles);
        setProfileState(articles.slice(0, 12));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if(loading) {
    return <h1 className="font-[700] text-[36px] text-center">Loading...</h1>
  }


  const dynamicProfiles = profileState.map((article, index) => ({
    authorImg: profiles[index]?.authorImg || "default-image-url.jpg",
    initialLikes: profiles[index]?.initialLikes || 0,
    name: profiles[index]?.name,
  }));

  const filteredCards = profileState.filter((article) => {
    
    const searchTermLowerCase = searchTerm ? searchTerm.toLowerCase() : '';
  
    
    const articleTitleLowerCase = article.title ? article.title.toLowerCase() : '';
  
    return articleTitleLowerCase.includes(searchTermLowerCase);
  });

  const cards = filteredCards.map((article, index) => (
    <Card
      key={index}
      cardImg={article.urlToImage}
      name={dynamicProfiles[index]?.name}
      authorImg={dynamicProfiles[index]?.authorImg}
      title={article.title}
      cardDate={article.publishedAt}
      initialLikes={dynamicProfiles[index]?.initialLikes}
    />
  ));

  return (
    <div className="flex gap-[22px] mt-[5px] mb-[5px] relative">
      <div className="flex w-[986px] flex-wrap">
        {cards}
      </div>
      <div className="slider flex w-[986px] h-[52px] justify-between items-center absolute bottom-[50%] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)">
        <button>
          <img src="arrow-right.svg" alt="" className=" rotate-180 w-[52px] h-[52px] p-[10px] bg-[#FFFFFF] rounded-[50px]" />
        </button>
        <button>
          <img src="arrow-right.svg" alt="" className="w-[52px] h-[52px] p-[10px] bg-[#FFFFFF] rounded-[50px]" />
        </button>
      </div>
    </div>
  );
}

export default Cards;
