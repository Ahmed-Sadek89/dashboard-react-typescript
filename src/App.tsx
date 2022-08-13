import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import SADEK from './Components/SADEK/SADEK';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';


const App = () => {
  return (
    <div className="App">
      <div className="App-part1">
        <Sidebar /> 
      </div>
       
      <div className='App-part2'>
        <Navbar />
        <div className="allRoutes container">
          <BrowserRouter>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} /> {/* '/' */}
                <Route path='login' element={<Login />} /> {/* '/login'*/}
                <Route path='users' >
                  <Route index element={<List />} />  {/*'/users'*/}
                  <Route path=':userId' element={<Single />} /> {/*'/users/:id'*/}
                  <Route path='new' element={<New />} /> {/*'/users/new'*/}
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        <SADEK />
      </div>
    </div>
    
  );
}

export default App;
