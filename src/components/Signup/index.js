
import  {useNavigate} from 'react-router-dom';
import { auth,googleAuth,facebookAuth} from '../../config/firebase'
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { signInWithPopup,createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import './index.css';

const Signup=()=>{
    const navigate=useNavigate();
    const [userEmail,setUserEmail]=useState('');
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    // const [auth, setAuth] = useState(getAuth(app));
  const [user, setUser] = useState(null);


    const signUpUser=async(e)=>{
        e.preventDefault();
        console.log({userEmail,password});
        try{
        const userCredential=await createUserWithEmailAndPassword(auth,userEmail,password);
        console.log(userCredential);
        const user=userCredential.user;
        setUser(user);
        navigate('/signin'); 

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

    return(
        <div className=''>
            <h2 className=''>Create an Account</h2>
            <form className='signup-form' onSubmit={signUpUser}>
                <input type="" className='input-type' placeholder='First Name' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
                <input type="" className='input-type' placeholder='Last Name' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
                <input type="" className='input-type' placeholder='Email' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} />
                <input type="" className='input-type' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <span className='terms-container'>
                    <input type="checkbox" className='' placeholder='' />
                    <p className=''>By proceeding, I agree to all <a className='' href="#h">T&C </a>and  <a className='' href="w">Privacy Policy</a></p>
                </span>
                <button className='signUpBtn' type="submit">Create an account</button>
            </form>
            <p className=''>or</p>
            <button onClick={handleGoogleLogin} className='socialmedia-btn'>
            <img src="google.png" className='' alt="Google" />
          </button>
          <button onClick={handleFacebookLogin} className='socialmedia-btn'>
            <img src="facebook.png" className='' alt="facebook" />
          </button>
            <p> <span className=''>Already have an account? </span><a href="#f" className='' onClick={()=>{navigate('/signin')}}>Login</a></p>
            
        </div>
    )
}

export default Signup;