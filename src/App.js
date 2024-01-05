import './App.css';
import Navbar from './Components/Navbar';

import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Ragistation from './pages/Ragistation';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Create from "./pages/Create";
import Readdata from './pages/Readdata';
function App() {
  return (
   
  
    <>
    <Router>
     <Navbar/>
     <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path ="/ragistation"  element={<Ragistation/>}/>
      <Route exact path ="/login"  element={<Login/>}/>
      <Route exact path ="/logout"  element={<Logout/>}/>
      <Route exact path ="/create"  element={<Create/>}/>
      <Route exact path ="/readdata"  element={<Readdata/>}/>
     </Routes>

    </Router>
    
    </>

  );
}

export default App;
