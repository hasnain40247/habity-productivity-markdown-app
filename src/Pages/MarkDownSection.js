import React, { useContext, useState } from "react"
import "./Styles/markdown.css"
import { Context as MarkContext } from "../Context/MarkDownContext"
import {BiDotsVerticalRounded} from "react-icons/bi"
const MarkDownSection = ({id}) => {
    const [markdown,setMark]=useState("")
    const {setMarkDown, setTitle}=useContext(MarkContext)
    const {state}=useContext(MarkContext)
    console.log(state)


   if(id===0){
    return (
        <div className="markdown empty">
           <h1>
            Create A Markdown Page!
           </h1>

        
        </div>
    )
   }
   else{
    let index = state.findIndex( e => e.id === id );


        console.log("index:",index)
 


    return(
        <div className="markdown">
        <div className="header">
        <input className="titleArea" type={"text"} value={state[index].title} onChange={(change)=>{
            setTitle(change.target.value, state[index].id)
          }}  />
          <h3>
<BiDotsVerticalRounded /></h3>
        </div>
            


        <textarea  value={state[index].markdown} onChange={(change)=>{
            setMarkDown(change.target.value)
        }}/>
        
        </div>
    )
   }
}
export default MarkDownSection