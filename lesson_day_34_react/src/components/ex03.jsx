import { useState, useEffect } from "react";

const Ex03 = () => {
    const [posts,setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const jsonData = await response.json()
                setPosts(jsonData);
            } catch(error) {
                console.error(error)
            }
        }

        fetchUsers();
    },[])
    const filteredPosts = posts.filter(post => post.title.includes(searchTerm) || post.body.includes(searchTerm));

    return (
        <div>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search posts..."/>
            <div>
                {filteredPosts.map(post => <p key = {post.id}>{post.title}</p>)}
            </div>
        </div>
    )
}
export default Ex03