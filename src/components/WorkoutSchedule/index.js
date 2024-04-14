import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Calendar from 'react-calendar';
import {useNavigate} from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { AiOutlineCamera, AiOutlineHome  } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { TbPhotoSearch } from "react-icons/tb";
import './index.css';

const WorkoutSchedule=()=>{
    const [date, setDate] = useState(new Date()); // Today's date
    const [scheduleData, setScheduleData] = useState(null); // Workout schedule data
    const navigate=useNavigate();
    // Simulate data fetching from a server (replace with your actual logic)
    const times=['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00'];
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(''); // Replace with your API endpoint
        const data = await response.json();
        setScheduleData(data);
      };
      fetchData();
    }, []);
  
    const handlePrevWeek = () => {
      setDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() - 7))); // Go to previous week
    };
  
    const handleNextWeek = () => {
      setDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() + 7))); // Go to next week
    };
  
    const getDayName = (date) => {
      return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    };
  
    return (
      <div className="workout-schedule">
        <header className=''>
          <div className='left-page' onClick={()=>{navigate(-1)}}>
            <MdOutlineKeyboardArrowLeft />
          </div>
            <h2>Workout Schedule</h2>
        </header>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          <span style={{fontWeight:'570'}}>{date.toDateString()}</span>
        </p>

        <ul className='times-schedule'>
          {times.map((time,inde)=>(
            <>
              <li className=''>{time}{" "}AM</li>
              <hr style={{color:'#7F7F7F'}}/>
            </>
          ))}
          {times.map((time,inde)=>(
            <>
              <li className=''>{time}{" "}PM</li>
              <hr style={{color:'#7F7F7F',width:'100vw'}}/>
            </>
          ))}

        </ul>
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
    );
}

export default WorkoutSchedule;