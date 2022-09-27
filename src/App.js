import logo from './logo.svg';
import './App.css';
import SideBar from './Pages/SideBar';
import { useState } from 'react';
import MarkDownSection from './Pages/MarkDownSection';
import Display from './Pages/Display';
import { Provider as MarkProvider } from './Context/MarkDownContext';
import Titles from './Pages/Titles';
function App() {
  const [sideOpen, setsideOpen] = useState(true)

  return (
    <MarkProvider>

    <div className='home'>
    <SideBar/>
    <Titles/>
    <MarkDownSection/>
    
    </div>
    </MarkProvider>

  );
}

export default App;
