import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import WeatherDisplay from './components/WeatherDisplay';
import ShotInput from './components/ShotInput';
import UserData from './components/UserData'
import MultiShotData from './components/MultiShotData';


const App = () => {
  
  const shots = [
    {
      id: "62dc51cdc364c8c92b394888",
      grind: 5.4,
      dose: 22.3,
      weight: 39.4,
      time: 22,
      roastDate: "2022-07-12",
      currentTime: "2022-07-23T19:53"
    },
    {
      id: "62dc51cdc364c8c92b394889",
      grind: 5.4,
      dose: 22.3,
      weight: 39.4,
      time: 22,
      roastDate: "2022-07-12",
      currentTime: "2022-07-25T19:53"
    },
    {
      id: "62dc51cdc364c8c92b394890",
      grind: 5.4,
      dose: 22.3,
      weight: 39.4,
      time: 22,
      roastDate: "2022-07-12",
      currentTime: "2022-07-28T19:53"
    }
  ]

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <WeatherDisplay />
                <ShotInput lastGrind="1" lastDose="22" lastWeight="39.5" lastTime="23"/>
              </>
            }
           />
           <Route
            path='/profile'
            element={
              <>
                <UserData userName="coolBarista" firsName="Davey" lastName="Surnami" zipCode="04101" />
                <MultiShotData shots={shots} />
              </>
            }
           />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
