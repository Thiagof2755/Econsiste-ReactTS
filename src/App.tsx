import  {Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default App;
