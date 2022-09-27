import React, { useContext, useState } from "react"
import "./Styles/markdown.css"
import { Context as MarkContext } from "../Context/MarkDownContext"
const MarkDownSection = () => {
    const [markdown,setMark]=useState("")
    const {setMarkDown}=useContext(MarkContext)
    const {state}=useContext(MarkContext)
    console.log(state)


    return (
        <div className="markdown">
            <h2>Note Book Title</h2>
        <textarea className="markArea" value={state.markdown} onChange={(change)=>{
            setMarkDown(change.target.value)
        }}/>
        
        </div>
    )
}
export default MarkDownSection