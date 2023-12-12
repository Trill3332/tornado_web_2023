import React, { useState, useEffect } from "react";
import { profiles } from "../data/data";
import axios from 'axios';
import { useParams } from 'react-router-dom'
function Blog() {
  const { id } = useParams();
  console.log(id)

  const [profileState, setProfileState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-12-06&to=2023-12-06&sortBy=popularity&apiKey=a7b6d210c826475484be45ea9f247a29');
        const articles = await response.data.articles;
        setProfileState(articles.slice(1, 13));
        console.log(articles)
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <h1 className="font-[700] text-[36px] text-center">Loading...</h1>
  }


  const dynamicProfiles = profileState.map((article, index) => ({
    authorImg: profiles[index]?.authorImg || "default-image-url.jpg",
    initialLikes: profiles[index]?.initialLikes || 0,
    name: profiles[index]?.name,
    ...article,
  }));

  const blogs = profileState.map((article, index) => {
    const uniqueId = `${index + 1}`;
    return {
      key: uniqueId,
      id: uniqueId,
      cardImg: article.urlToImage,
      name: dynamicProfiles[index]?.name,
      authorImg: dynamicProfiles[index]?.authorImg,
      title: article.title,
      cardDate: article.publishedAt,
      initialLikes: dynamicProfiles[index]?.initialLikes,
      description: article.description,
      content: article.content,
    };
  });

  return (
    <div>
      {blogs.map((blog) => {
        if (blog.id !== id) return null;

        return (
          <>
            <img src={blog.cardImg} alt={blog.title} />
            <h1>{blog.title}</h1>
            <img src={blog.authorImg} />
            {/* Render other content based on the matched blog object */}
          </>
        );
      })}
    </div>
  )
}

export default Blog
