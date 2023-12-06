import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
const PostDetail = () => {
    const {postId} = useParams();
    const[post,setPost] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                const data = await response.data;
                setPost(data);
            } catch(error) {
                console.error(error)
            }
        }
        fetchPosts();
    },[postId])

    if(!post) return <div>Loading...</div>

    return(
        <div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
export default PostDetail