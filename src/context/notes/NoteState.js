import React  from "react";
import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "64c6517d2cd9fdba1facbccf",
          "user": "64c549358ac9c02d91474618",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-07-30T12:03:09.258Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial);
   
        
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;