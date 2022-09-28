import React, { useContext, useEffect, useState } from "react"
import "./Styles/Titles.css"
import ReactMarkdown from 'react-markdown'
import { motion, usePresence, AnimatePresence } from 'framer-motion'

import { FaNotesMedical } from 'react-icons/fa';
import { IoIosCreate } from "react-icons/io"
import { AiOutlineSortAscending } from "react-icons/ai"

import { Context as MarkContext } from "../Context/MarkDownContext";

const ListTile = ({id,name, handleID, prev}) => {
    const [click, setClick] = useState(false)


    return (<div onClick={() => { handleID(id); setClick(!click)  }}  className="title">
        <h5>{name}</h5>
    </div>)
}
const Titles = ({ handleID }) => {
    let prev
    console.log(handleID)
    const { state } = useContext(MarkContext)
    const { addPage } = useContext(MarkContext)

    console.log("State:", state)


    return (
        <div className="background">
            <div className="Header">
                <AiOutlineSortAscending />
                <h5>NoteBook Title</h5>
                <button onClick={() => {
                    console.log("Pressed")
                    addPage()



                }}>
                    <IoIosCreate />
                </button>

            </div>

            <div className="titleScroll">

                {state.map((e) => {
                    return <ListTile id={e.id} name={e.title} prev={prev} handleID={handleID} key={e.id}/>
                })}

            </div>







        </div>
    )
}
export default Titles