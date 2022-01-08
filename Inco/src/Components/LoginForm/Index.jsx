import './login.css';
const Login = ()=>{


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
                    <button className="Button">Log In</button>
                </form>
            </div>
        </div>
    )
    
}


export default Login