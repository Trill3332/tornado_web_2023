import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            if (user) {
                localStorage.setItem("authenticated", JSON.stringify({email : user.email, uid: user.uid}));
            }
        }).catch((error) => {
            console.error(error);
        })
    };


  return (
    <div>
      <form action="" className='mx-auto max-w-[30%] flex flex-col border-1 border-black border-solid align-center items-center'>
        <input 
            type="text"
            placeholder='Email'
            className='m-2 mt-10'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
            type="password"
            placeholder='Password'
            className='m-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button className='m-2 mb-10' onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login
