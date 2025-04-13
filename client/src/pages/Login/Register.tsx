import { useState } from 'react'
import './style.scss'

export default function Register() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    function onSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        console.log(`Full Name: ${fullName} \nEmail: ${email} \nPassword: ${password}`)
    }


    return (
        <div className='hero'>
            
            <h1>Register</h1>
            <form onSubmit={e => onSubmit(e)}>
                <input type='text' 
                placeholder='Full Name'
                autoComplete='off'
                onChange={e => setFullName(e.target.value)}
                value={fullName}
                required></input>
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
                <button type='submit'>Sign up »</button>
            </form>
        </div>
    )
}