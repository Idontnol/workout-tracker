import React from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

const GoalTracker=()=>{
    // const [selectedGoal, setSelectedGoal] = useState(''); // State for selected goal

    const goals = [
      { name: 'Weight Loss', icon: 'weight-loss.svg' },  // Replace with icon paths or components
      { name: 'Muscle Gain', icon: 'muscle-gain.svg' },
      { name: 'Flexibility and Mobility', icon: 'flexibility.svg' },
      { name: 'General Fitness', icon: 'general-fitness.svg' },
      { name: 'Event-Specific Training', icon: 'event-training.svg' },
      { name: 'Mindfulness and Mental Health', icon: 'mindfulness.svg' },
    ];
    const navigate=useNavigate();

    // const handleGoalSelection = (goalName) => {
    //   setSelectedGoal(goalName);
    // };

    return(
        <div className="goal-tracker">
          <h2 className=''>What are your goals?</h2>
          <ul className=''>
            {goals.map((goal) => (
              <label key={goal.name} className='' htmlFor={`checkbox-${goal.name}`}>
                  <span>{goal.name}</span>
                  <input type="checkbox" className='style-check' id={`checkbox-${goal.name}`} />
              </label>
            ))}
          </ul>
          <button className="confirm-btn" onClick={()=>{navigate('/workout-tracker')}}>
            Confirm
          </button>
    </div>
    )
}

export default GoalTracker;