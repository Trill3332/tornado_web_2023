import { useState,useEffect } from "react";
import axios from 'axios'
import Comments from "./Comments";
const Ex05 = () => {
    const [posts, setPosts] = useState([])
    const [selectedPostId, setSelectedPostId] = useState(null)
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const data = await response.data;
                setPosts(data);
            } catch(error) {
                console.error(error);
            }
        }
        fetchPosts();
    },[])

    return (
        <div>
            <h1>Posts with Comments</h1>
            {posts.map(post => 
                                <p key = {post.id}onClick={() => setSelectedPostId(post.id)}>{post.title}</p>)}
            {selectedPostId && <Comments postId={selectedPostId} />}
        </div>
    )
}
export default Ex05