import {useState,useEffect} from 'react';
import { auth,googleAuth,facebookAuth} from '../../config/firebase'
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { signInWithPopup, onAuthStateChanged ,signInWithEmailAndPassword} from 'firebase/auth';
import { HiMiniEye } from "react-icons/hi2";
import { HiEyeSlash } from "react-icons/hi2";
import  {useNavigate} from 'react-router-dom'
import './index.css';

const Login=()=>{
    const [userEmail,setUserEmail]=useState('');
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    // const [auth, setAuth] = useState(getAuth(app));
  const [user, setUser] = useState(null);

    const navigate =useNavigate();

    const signIn=async(e)=>{
        e.preventDefault();
        console.log({userEmail,password});
        try{
        const userCredential=await signInWithEmailAndPassword(auth,userEmail,password);
        console.log(userCredential);
        const user=userCredential.user;
        setUser(user);
        navigate('/goals');

      // Optionally store user data in local storage or a database
      localStorage.setItem('userData', JSON.stringify(user)); 
        }
        catch(e){
          console.log(e);
        }
        setUserEmail("");
        setPassword("");
      }

    const handleGoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, googleAuth);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential);
          const user = result.user;
          navigate('/goals'); 

          localStorage.setItem('userData', JSON.stringify(user)); 
          setUser(user);
         
        } catch (error) {
          console.error(error);
        }
        console.log(user);
      };
    
      const handleFacebookLogin = async () => {

        try {
          const result = await signInWithPopup(auth, facebookAuth);
          const credential = FacebookAuthProvider.credentialFromResult(result);
          console.log(credential);
          const user = result.user;
          navigate('/goals'); 
          localStorage.setItem('userData', JSON.stringify(user));
          setUser(user);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
    
        return unsubscribe;
      }, []);

    return(
        <div className=''>
            <h2 className=''>Welcome Back</h2>
            <form className='signin-form' onSubmit={signIn}>
                <input type="" placeholder='Email' className='input-type' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                <span className='password-container' >
                        <input type={showPassword? 'text' : 'password'} className='input-type' placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <button type="button" onClick={()=>{setShowPassword(p=>!p)}} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                            {showPassword?<HiEyeSlash />: <HiMiniEye />}
                        </button>
                </span>
                <p className='forgot-text'>Forgot Your Password?</p>
                <button className='signInBtn' type="submit">Sign in</button>
            </form>
            <p className=''>or</p>
            <button onClick={handleGoogleLogin} className='socialmedia-btn'>
            <img src="google.png" className='' alt="Google" />
          </button>
          <button onClick={handleFacebookLogin} className='socialmedia-btn'>
            <img src="facebook.png" className='' alt="facebook" />
          </button>
            <p> <span className=''>Don't have an account yet? </span><a href="#f" className='' onClick={()=>{navigate('/signup')}}>Create an account</a></p>
            <div>
          
        </div>
        </div>
    )
}

export default Login;