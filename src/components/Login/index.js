import {useState,useEffect} from 'react';
import { auth,googleAuth,facebookAuth} from '../../config/firebase'
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { signInWithRedirect, onAuthStateChanged ,signInWithEmailAndPassword} from 'firebase/auth';
import { HiMiniEye } from "react-icons/hi2";
import { HiEyeSlash } from "react-icons/hi2";
import  {useNavigate} from 'react-router-dom'
import './index.css';

const Login=()=>{
    const [userEmail,setUserEmail]=useState('');
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    const [error,setError]=useState('');
    // const [auth, setAuth] = useState(getAuth(app));
  const [user, setUser] = useState(null);

    const navigate =useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        if (user) {
          navigate('/goals'); // Navigate only if a user is logged in
        }
      });
    
      // Return the unsubscribe function for cleanup
      return () => unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
    
    const getErrorMessage = (error) => {
      console.log(error,"checked");
      const errorMap = {
        'auth/email-already-in-use': 'Email address already in use. Please try a different email.',
        'auth/invalid-email': 'Invalid email address. Please enter a valid email format.',
        'auth/weak-password': 'Password is too weak. Please choose a stronger password.',
        'auth/wrong-password': 'Incorrect email or password. Please try again.',
        'auth/user-not-found': 'User not found. Please check your email address.',
        // Add more error codes and messages as needed
      };
    
      return errorMap[error.code] || 'An error occurred at signin. Please check details carefully.';
    };

    const signIn=async(e)=>{
        e.preventDefault();
        if(!userEmail){
          setError("email is missing");
          return;
        }
        else if(!password){
          setError("password is missing");
          return;
        }
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
          const errorMessage = getErrorMessage(e);
          setError(errorMessage);
        }
        setUserEmail("");
        setPassword("");
      }

    const handleGoogleLogin = async () => {
        try {
          const result = await signInWithRedirect(auth, googleAuth);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log(credential,credential.accessToken);
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
          const result = await signInWithRedirect(auth, facebookAuth);
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

      useEffect(() => {
        // Check if an error exists
        if (error) {
          // Set a timeout to clear the error after 6 seconds
          const timeoutId = setTimeout(() => {
            setError(""); // Clear the error message
          }, 6000); // Timeout in milliseconds (6 seconds)
      
          // Return a cleanup function to clear the timeout when the component unmounts
          return () => clearTimeout(timeoutId);
        }
      
        // If no error exists, return an empty cleanup function
        return () => {}; // Empty cleanup function if no error
      }, [error]); 

    return(
        <div className=''>
            <h2 className=''>Welcome Back</h2>
            {error && <span className='' style={{display:'flex','justifyContent':'flex-end'}}><p style={{color:"red"}}>*{error}</p></span>}
            <form className='signin-form' onSubmit={signIn}>
                <input type="" placeholder='Email' className='input-type' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                <span className='password-container' >
                        <input type={showPassword? 'text' : 'password'} className='input-type' placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        <button type="button" onClick={()=>{setShowPassword(p=>!p)}} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                            {showPassword?<HiEyeSlash />: <HiMiniEye />}
                        </button>
                </span>
                <span className='forgot-text'><p >Forgot Your Password?</p></span>
                
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