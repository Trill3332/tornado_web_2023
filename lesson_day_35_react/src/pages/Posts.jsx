import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await response.data;
                setPosts(data);
            } catch(error) {
                console.error(error)
            }
        }
        fetchPosts();
    },[])




    return (
        <div>
            <h1 className="text-3xl font-bold">Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to = {`/posts/${post.id}`} className="text-blue hover:text-blue-700">{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Posts