import {useNavigate} from 'react-router-dom';
import './index.css';

const Goals=()=>{
    const navigate=useNavigate();

    return(
        <div className=''>
            <span className='skip-header'>
                <a href="#ef" className='skip-text' onClick={()=>{navigate('/goal-tracker')}}>Skip</a>
            </span>
            
            <div className='goals2-container'>
                <img src="running.png" className='' alt="" />
                <h2 className=''>Track Your Goal</h2>
                <p className='goals2-text'>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>

            </div>
            <img src="next-page.png" alt="next-page" onClick={()=>{navigate('/getburn')}}  className='next-page-btn'/>
        </div>
    )
}

export default Goals;