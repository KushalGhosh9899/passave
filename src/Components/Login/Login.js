import loginImg from '../Login/login-img.png';
import '../common-style.css';
import { Link } from 'react-router-dom';

const Login = () =>{
    return(
        <>
            <title>Login</title>
            <div className="container">
                <div className="left-side">
                    <h1>Login</h1>
                    <h4>Welcome Back! Login to Continue</h4>

                    <div class="input-box">
                        <i class="fa-solid fa-user-large icons"></i>
                        <input 
                            type="text" 
                            placeholder='Enter your Username'
                            className='text-box'
                        />
                    </div>  

                    <div class="input-box">
                        <i class="fa-solid fa-key icons"></i>
                        <input 
                            type="password"
                            placeholder='Enter your Password'
                            className='text-box'
                        />                    
                    </div>                  
                    
                    <div className='group'>
                        <div>
                            <input 
                                type='checkbox'
                                className='check-box'
                            />
                            <p>Remember Me</p>
                        </div>
                        <Link to='/forgot-password'>
                            Forgot Password?
                        </Link>
                    </div>
                    
                    <button className='submit-btn'>
                        Log in                        
                    </button>

                    <p>
                        Don't Have an account? 
                        <Link to="/signup">
                            Create one
                        </Link>
                    </p>
                    <div className='or-group'>
                        <hr className='horizontal-line'></hr>
                        <p>Or</p>
                        <hr className='horizontal-line'></hr>
                    </div>

                    <button className='auth-btn'>
                        Sign in with Google
                        <i></i>
                    </button>

                </div>
                <div className="right-side">
                    <img src={loginImg} className="login-img"/>
                </div>

            </div>
        </>
    );
}

export default Login;