import './App.css';
import Goals from './components/Goals';
import Login from './components/Login';
import Signup from './components/Signup';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import WorkoutTracker from './components/WorkoutTracker';
import WorkoutSchedule from './components/WorkoutSchedule';
import GetBurn from './components/GetBurn';
import GoalTracker from './components/GoalTracker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Signup/>} />
          <Route exact path="/signin" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/goals" element={<Goals/>} />
          <Route exact path="/getburn" element={<GetBurn/>} />
          <Route exact path="/goal-tracker" element={<GoalTracker/>} />
          <Route exact path="/workout-tracker" element={<WorkoutTracker/>} />
          <Route exact path="/workout-schedule" element={<WorkoutSchedule/>} />
         
          <Route path="*" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
