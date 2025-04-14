import { useState } from 'react'
import axios from 'axios'
import './style.scss'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    function onSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        axios.post("http://localhost:3000/login", { email, password })
        .then(result => {
            if (result.data === "Success") {
                console.log("logged in")
            } else {
                console.log("not logged in")
            }
        })
        .catch (err => console.log(err))
    }


    return (
        <div className='hero'>
            
            <h1>Login</h1>
            <form onSubmit={e => onSubmit(e)}>
                <input type='email' 
                placeholder='Email Address'
                autoComplete='email-address'
                onChange={e => setEmail(e.target.value)}
                value={email}
                required></input>
                <input type='password' 
                placeholder='Password'
                autoComplete='current-password'
                onChange={e => setPassword(e.target.value)}
                value={password}
                required></input>
                <button type='submit'>Sign in »</button>
            </form>
        </div>
    )
}