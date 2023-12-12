import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {useNavigate} from 'react-router-dom'
function Register() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [repeatPassword,setRepeatPassword] = useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth , email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            if (user) {
                navigate("/login");
            }
        }).catch((error) => {
            console.error(error);
        })
    }

  return (
    <div>
      <form 
            onSubmit={handleRegister}
            className='mx-auto max-w-[30%] flex flex-col justify-center  border-1 border-black border-solid align-center items-center'>
            <input 
                type="text" 
                placeholder='Email'
                className='m-2 mt-10'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="text"
                placeholder='Username'
                className='m-2'
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder='Repeat Password'
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button className='mb-2 mt-10' onClick={handleRegister}>Register</button>
      </form>
    </div>
  )
}

export default Register
