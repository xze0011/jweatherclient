import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './Pages/Weather';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
