import React, { useContext, useState } from "react"
import "./Styles/display.css"
import { Context as MarkContext } from "../Context/MarkDownContext"
import ReactMarkdown from 'react-markdown'

const Display = () => {
    const { setMarkDown } = useContext(MarkContext)
    const { state } = useContext(MarkContext)
    console.log(state)
    return (
        <div className="display">
            <ReactMarkdown>{state.markdown}</ReactMarkdown>





        </div>
    )
}
export default Display