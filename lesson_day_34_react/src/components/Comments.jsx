import { useState,useEffect } from "react"
import axios from 'axios'

const Comments = ({postId}) => {
    const [comments , setComments] = useState([]);
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                const data = await response.data;
                setComments(data);
                console.log(data)
            } catch(error) {
                console.error(error)
            }
        }
        fetchComments();
    },[])

    return (
        <div>
            <h1>Comments</h1>
            {comments.map(comment => (<p key = {comment.id}>{comment.body}</p>))}
        </div>
    )
} 
export default Comments;