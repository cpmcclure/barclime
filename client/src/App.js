import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import WeatherDisplay from './components/WeatherDisplay';
import ShotInput from './components/ShotInput';

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
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
