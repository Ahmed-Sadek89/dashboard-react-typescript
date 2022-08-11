import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import SADEK from './Components/SADEK/SADEK';


function App() {
  return (
    <div className="App">
      <div className="App-part1">
        <Sidebar /> 
      </div>
       
      <div className='App-part2'>
        <Navbar />
        <div className="allRoutes">
          routes are here
        </div>
        <SADEK />
      </div>
    </div>
    
  );
}

export default App;
