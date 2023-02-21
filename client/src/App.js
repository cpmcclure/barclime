import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import WeatherDisplay from './components/WeatherDisplay';
import ShotInput from './components/ShotInput';
import ShotData from './components/ShotData'
import UserData from './components/UserData'

const App = () => {
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
                <ShotData id="62dc51cdc364c8c92b394888" grind="5.5" dose="23" weight="40" time="23" roastDate="2022-07-12" currentTime="2022-07-23T19:53" />
              </>
            }
           />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
