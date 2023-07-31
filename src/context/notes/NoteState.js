import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
        const s1 = {
            "name": "Harry",
            "class": "5b"
        }
        const [state, setstate] = useState(s1);          // Changing the state using useState
       const update = ()=>{
            setTimeout(() => {
                setstate({                               
                    "name": "Nishant",
                    "class": "Computer Engineering"
                })
            }, 1000);
        }
    return (
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;