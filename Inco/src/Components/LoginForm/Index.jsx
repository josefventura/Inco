import './login.css';
import { useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';




const Login = ()=>{
    const userContext = useContext(UserContext)
    const [user, setUser] = useState({});

    console.log(userContext)

    return (
        <div className="Login">
            <div className="Login-Form">
                <h3 className="Title">Login</h3>
                <form className="Form">
                    <span className='Input-Span'>
                        <label className="Text">User</label>
                        <input type="text" className="Input-Text" id="user"/>
                    </span>
                    <span className='Input-Span'>
                        <label className="Text">Password</label>
                        <input type="password" className="Input-Text" id="password"/>
                    </span>
                    <button  className="Button" >Log In</button>
                </form>
                <div className='Register-div'>
                    <Link to='#'>Forgot password?</Link>
                    <Link to='Register' >Register</Link> 
                </div>
            </div>
        </div>
    )
    
}


export default Login