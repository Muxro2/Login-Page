import { Link } from 'react-router-dom';
import './style.scss';

export default function Navbar() {
    return (
        <div className='wrapper'>
            <Link to=""><h1>MR//Studio</h1></Link>
            <div>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
            </div>
        </div>
    )
}