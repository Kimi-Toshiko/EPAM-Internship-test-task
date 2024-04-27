import React from 'react';
import './App.css';
// import Garage from './TSComponents/Garage';
import Winners from './TSComponents/Winners';
import Navbar from './TSComponents/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Garage /> */}
      <Winners />
    </div>
  );
}

export default App;
