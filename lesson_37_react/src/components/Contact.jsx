import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom'
const Contact = () => {
    const navigate = useNavigate();
    const [authenticated,setAuthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        console.log(authenticated)
        if (loggedInUser) {
            setAuthenticated(JSON.parse(loggedInUser))
            navigate("/contact")
        }
    },[]);

    if(!authenticated) {
        navigate("/login")
    } else {
        return (
            <div>
                <p>Welcome to your contact</p>
                <p>{authenticated.email}</p>
            </div>
        )
    }
}
export default Contact