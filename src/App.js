import logo from './logo.svg';
import './App.css';
import SideBar from './Pages/SideBar';
import { useContext, useState } from 'react';
import MarkDownSection from './Pages/MarkDownSection';
import Display from './Pages/Display';
import Split from 'react-split'

import Titles from './Pages/Titles';
function App() {
  const [id,setID]=useState(0)
  const handleID=(value)=>{
    console.log("Value:",value)
    setID(value)
  }
  console.log(id)

  return (
   

    <Split 
   direction='horizontal'
   sizes={[20,30,50]}
   cursor="col-resize"
   expandToMin={false}
   gutter={(index, direction) => {
    const gutter = document.createElement('div')
    gutter.className = `gutter gutter-${direction}`
    return gutter
}}

   minSize={[200,300,700]}
   gutterSize={1}
   snapOffset={2}
   gutterAlign="center"
   dragInterval={1}
   style={{
    height:"100vh",
    backgroundColor:"#fffbf1",
    display:"flex",
    flexDirection:"row"
   }}>
    <SideBar/>
    <Titles handleID={handleID}/>
    <MarkDownSection id={id}/>
    
    </Split>

  );
}

export default App;
