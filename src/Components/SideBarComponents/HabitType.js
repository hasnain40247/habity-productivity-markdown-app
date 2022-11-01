import React from "react"
import {motion} from "framer-motion"
const HabitType=({type})=>{
return(
         <div className="container">
      <motion.div
      initial={{ scale: 0.93 }}
      animate={{ scale: 1 }}
      transition={{
        default: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      style={{
        color:  "#222831",
        fontWeight:  "normal",
        cursor: "pointer",
        fontSize: "0.8rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: type==="Productivity"? "#80ED99":"#FF6363" ,
        padding: "10px",
        borderRadius: "10px",
        margin: "7px 0",
      }}
    >
    
    {type}
      
    </motion.div>
              </div>
)
}
export default HabitType