import { useState,useEffect } from "react";


const Ex01 = () => {
    const [post, setPost ] = useState([]);

    useEffect(()=> {
        const fetchPost = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const jsonData = await response.json();
                setPost(jsonData)
            } catch (error) {
                console.error(error);
            }
           
        }
        fetchPost()
        
        
    },[])

    if(!post) return <div>Loading...</div>

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
export default Ex01;