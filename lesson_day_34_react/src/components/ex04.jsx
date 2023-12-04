import { useState, useEffect } from "react";
import axios from 'axios';

const ex04 = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
                const data = await response.data;
                setPosts(data)
            } catch (error) {
                console.error(error);
            }
        }
        console.log(page)
        fetchPosts();
    }, [page])

    return (
        <div>
            <h1>Paginated Posts</h1>
            <div>
                {posts.map(post => <p key={post.id}>{post.title}</p>)}
                <button className="m-2" onClick={() => setPage(page => page - 1)} disabled={page === 1}>Previous</button>
                <button className="m-2" onClick={() => setPage(page => page + 1)} disabled={page === 10}>Next</button>
            </div>
        </div>
    )
}
export default ex04