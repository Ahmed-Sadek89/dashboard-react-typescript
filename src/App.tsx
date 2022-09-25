// required
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
// pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
// components
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import SADEK from './Components/SADEK/SADEK';
import { productInputs, userInputs } from './DataFormNew';


const App = () => {
  const [ isDark, setIsDark ] = useState<'light' | 'dark'>('light')
  return (
    <div className={isDark === 'light' ? '' : 'dark'}>
      <div className="App">
        <div className="App-part1">
          <Sidebar setIsDark={setIsDark} /> 
        </div>
        
        <div className='App-part2'>
          <Navbar setIsDark={setIsDark} />
          <div className="allRoutes container">
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} /> {/* '/' */}
                <Route path='login' element={<Login />} /> {/* '/login'*/}
                <Route path='users' >
                  <Route index element={<List />} />  {/*'/users'*/}
                  <Route path=':userId' element={<Single />} /> {/*'/users/:id'*/}
                  <Route
                    path='new' 
                    element={<New routeName={'User'} formElements={userInputs} />}
                  /> {/*'/users/new'*/}
                </Route>
                <Route path="products">
                <Route index element={<List />} />  {/*'/products'*/}
                <Route path=":productId" element={<Single />} /> {/*'/products/:id'*/}
                <Route
                  path="new"
                  element={<New routeName={'Product'} formElements={productInputs} />}
                /> {/*'/products/new'*/}
              </Route>
              </Route>
            </Routes>
          </div>
          <SADEK />
        </div>
      </div>
    </div>
  );
}

export default App;
