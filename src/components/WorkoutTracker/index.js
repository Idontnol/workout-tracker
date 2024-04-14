import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineCamera, AiOutlineHome  } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { TbPhotoSearch } from "react-icons/tb";
import {useNavigate} from 'react-router-dom';
import './index.css';

const WorkoutTracker=()=>{
  const navigate=useNavigate();
    const [toggle,setToggle]=useState(false);
    const [upcomingWorkouts, setUpcomingWorkouts] = useState([ // State for upcoming workouts
        { id: 1,image:'fullbody.png' ,name: 'Full Body Workout', day: 'Today', time: '3pm' },
        { id: 2,image:"upperbody.png", name: 'Upper Body Workout', day: 'Feb 4', time: '3:30 pm' },
    ]);

 
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(''); 
        const data = await response.json();
        setUpcomingWorkouts(data);
        };
        fetchData();
    }, []);


    return(
        <div className="workout-tracker">
      <header className=''>
          <div className='left-page' onClick={()=>{navigate(-1)}}>
            <MdOutlineKeyboardArrowLeft />
          </div>
            <h2 style={{marginLeft:'13px'}}>Workout Tracker</h2>
      </header>
      <img className='chart' alt="chart-full" src="chart-full.png"/>
      <div className="summary">
        <img src ="alert-triangle.png" alt="warning" className=''/>
        {/* <p>You've burned {caloriesBurned} calories today (less than {yesterdayCalories} yesterday).</p>
        {caloriesBurned < yesterdayCalories && (
          <p className="warning">Time to get moving!</p>
        )} */}
        <p>You've burned fewer calories than yesterday. Time to get moving! </p>
      </div>
      <div className="upcoming-workouts">
        <span className='upcoming-header'>
          <h4>Upcoming Workouts</h4>
          <p style={{color:"#7F7F7F",cursor:"pointer"}}>See More</p>
        </span>
        
        <ul>
          {upcomingWorkouts.map((workout) => (
            <li key={workout.id}>
              <img src={workout.image} alt={workout.image}/>
              <span className="workout-details">
                <span className="workout-name">{workout.name}</span>
                <span className='workout-details-time'>{workout.day }{workout.time}</span>
              </span>
              <span className='toggle-bar' style={{display:'flex',justifyContent:toggle?'flex-end':'flex-start'}} onClick={()=>{setToggle(t=>!t)}}>
                <span className='toggle-circle'></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <h4>What Do You Want to Train Today?</h4>
      <div className="what-to-train-container">
        <span className="what-to-train">
        <p style={{fontWeight:"500",marginBottom:'7px'}}>Full Body Workout</p>
        <p>Arms</p>
        <p>Chest</p>
        </span>
        <img src="whattotrain.png" alt="what to train" className='' />
      </div>
      <footer className=''>
          <AiOutlineHome className='iconu' color="#7F7F7F" />      
          <TbPhotoSearch className='iconu' color="#829DFF" />
          <span className='search-icon'>
           <IoSearch className='iconu' color="white"  />
          </span>
          <IoSearch className='iconu' color="white"  />
          <AiOutlineCamera className='iconu' color="#7F7F7F"  />
          <CiUser className='iconu' color="#7F7F7F" />
        </footer>
    </div>

    )
}

export default WorkoutTracker;