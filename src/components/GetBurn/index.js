import {useNavigate} from 'react-router-dom';
import './index.css';

const GetBurn=()=>{
    const navigate=useNavigate();

    return(
        <div className=''>
            <span className='skip-header'>
                <a href="#ef" className='skip-text' onClick={()=>{navigate('/goal-tracker')}}>Skip</a>
            </span>
            <div className='goals2-container'>
                <img src="cycling.png" className='' alt="" />
                <h1 className=''>Get Burn</h1>
                <p className=''>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
            </div>
            <img src="next-page.png" alt="next-page" onClick={()=>{navigate('/goal-tracker')}} className='next-page-btn'/>
        </div>
    )
}

export default GetBurn;