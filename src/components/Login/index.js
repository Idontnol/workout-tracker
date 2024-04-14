import {useState} from 'react';
import { HiMiniEye } from "react-icons/hi2";
import { HiEyeSlash } from "react-icons/hi2";
import  {useNavigate} from 'react-router-dom'
import './index.css';

const Login=()=>{
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);

    const navigate =useNavigate();
    
    const createAccount=()=>{
       
        console.log("hi");
    }

    return(
        <div className=''>
            <h2 className=''>Welcome Back</h2>
            <form className='signin-form'>
                <input type="" placeholder='Email' className='input-type'/>
                <span className='password-container' >
                        <input type={showPassword? 'text' : 'password'} className='input-type' placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <button type="button" onClick={()=>{setShowPassword(p=>!p)}} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                            {showPassword?<HiEyeSlash />: <HiMiniEye />}
                        </button>
                </span>
                <p className='forgot-text'>Forgot Your Password?</p>
                <button className='signInBtn' onClick="">Sign in</button>
            </form>
            <p className=''>or</p>
            <p> <span className=''>Don't have an account yet? </span><a href="#f" className='' onClick={()=>{navigate('/signup')}}>Create an account</a></p>
            
        </div>
    )
}

export default Login;