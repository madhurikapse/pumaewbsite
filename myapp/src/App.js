import React from 'react';
import { Route, Routes } from 'react-router-dom';
import page from './page';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Sports from './Sports';
import Outlet from './Outlet';
import New from "./New"
import Shoesone from './Shoesone';
const App = () => {
  
  return (
    <div>
<Routes>
  <Route path='/Home' element={<Home/>}></Route>
  <Route path='/New' element={<New/>}></Route>
  <Route path='/Men' element={<Men/>}></Route>
  <Route path='Outlet' element={<Outlet/>}></Route>
  <Route path='/Sports' element={<Sports/>}></Route>
  <Route path='/Women' element={<Women/>}></Route>
  
  <Route path='/Shoesone' element={<Shoesone/>}></Route>
</Routes>
<page/>
    </div>      
   
  );
}

export default App;
