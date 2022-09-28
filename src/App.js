import logo from './logo.svg';
import './App.css';
import SideBar from './Pages/SideBar';
import { useContext, useState } from 'react';
import MarkDownSection from './Pages/MarkDownSection';
import Display from './Pages/Display';
import Titles from './Pages/Titles';
function App() {
  const [id,setID]=useState(0)
  const handleID=(value)=>{
    console.log("Value:",value)
    setID(value)
  }
  console.log(id)

  return (
   

    <div className='home'>
    <SideBar/>
    <Titles handleID={handleID}/>
    <MarkDownSection id={id}/>
    
    </div>

  );
}

export default App;
