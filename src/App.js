import './App.css';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import { Routes,Route } from 'react-router-dom';
import "./vendor/fontawesome-free/css/all.min.css";
import './css/sb-admin2min.css';
import Login from './components/Login';
import Topbar from './components/Topbar';
import RegisterForm from './components/Register';
import ForgotPassword from './components/ForgotPass';
import Page404 from './components/404page';
import { Blank } from './components/Blank';
import DashboardPage from './components/DashboardPage';
import Cards from "./components/Card"
import Buttons from './components/Button';
import AnimationUtilities from './components/Animation';
import ColorsUtilities from './components/Color';
import BorderUtilities from './components/Border';
import OthersUtilities from './components/other';
import Charts from './components/chart';

function App() {
  return (
    
    <div  id="wrapper">
      
      <Sidebar/>
      <div id='content-wrapper' className='d-flex flex-column'>
      <div id='content' style={{margin:"16px"}}>
      
      
      <Topbar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/table' element={<Table />}/>
        <Route path='/register' element={<RegisterForm />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/*' element={<Page404 />}/>
        <Route path='/blank' element={<Blank />}/>
        <Route path='/dashboard' element={<DashboardPage />}/>
        <Route path='/cards' element={<Cards />}/>
        <Route path='/buttons' element={<Buttons />}/>
        <Route path='/animation-utilities' element={<AnimationUtilities />}/>
        <Route path='/colors-utilities' element={<ColorsUtilities />}/>
        <Route path='/border-utilities' element={<BorderUtilities />}/>
        <Route path='/other-utilities' element={<OthersUtilities />}/>
        <Route path='/charts' element={<Charts />}/>


        

      </Routes>
    </div>
    </div>
    </div>
   
    
  );

}
export default App;


