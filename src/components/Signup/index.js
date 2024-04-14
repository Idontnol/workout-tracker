
import  {useNavigate} from 'react-router-dom'
import './index.css';

const Signup=()=>{
    const navigate=useNavigate();

    const loginToAccount =()=>{

    }

    return(
        <div className=''>
            <h2 className=''>Create an Account</h2>
            <form className='signup-form' onSubmit={loginToAccount}>
                <input type="" className='input-type' placeholder='First Name' onClick />
                <input type="" className='input-type' placeholder='Last Name' onClick />
                <input type="" className='input-type' placeholder='Email' onClick />
                <input type="" className='input-type' placeholder='Password' onClick />
                <span className='terms-container'>
                    <input type="checkbox" className='' placeholder='' onClick />
                    <p className=''>By proceeding, I agree to all <a className='' href="#h">T&C </a>and  <a className='' href="w">Privacy Policy</a></p>
                </span>
                <button className='signUpBtn' type="submit">Create an account</button>
            </form>
            <p className=''>or</p>
            <p> <span className=''>Already have an account? </span><a href="#f" className='' onClick={()=>{navigate('/signin')}}>Login</a></p>
            
        </div>
    )
}

export default Signup;