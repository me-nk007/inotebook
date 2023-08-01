import React  from "react";
import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "64c6517d2cd9fdba1facbccfa",
          "user": "64c549358ac9c02d91474618h",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-07-30T12:03:09.258Z",
          "__v": 0
        },
        {
            "_id": "64c7c6dfba78a66aefbd0db9b",
            "user": "64c549358ac9c02d91474618g",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "64c7c6dfba78a66aefbd0db9c",
            "user": "64c549358ac9c02d91474618f",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "64c7c6dfba78a66aefbd0db9d",
            "user": "64c549358ac9c02d91474618e",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "64c7c6dfba78a66aefbd0db9e",
            "user": "64c549358ac9c02d91474618d",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "64c7c6dfba78a66aefbd0db9f",
            "user": "64c549358ac9c02d91474618c",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "64c7c6dfba78a66aefbd0db9g",
            "user": "64c549358ac9c02d91474618b",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          
        
      ]
      const [notes, setNotes] = useState(notesInitial);
   
       // Add a Note
        const addNote = (title, description, tag)=>{
          // TODO : API Call
          console.log("Adding a New Note");
          const note = {
            "_id": "64c7c6dfba78a66aefbd0db9hi",
            "user": "64c549358ac9c02d91474618a",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          };
          setNotes(notes.concat(note))                  // Adding a note
        }




       // Delete a Note
       const deleteNote = ()=>{
          
       }



       // Edit a Note
       const editNote = ()=>{
          
       }



    return (
        <NoteContext.Provider value={{notes,addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;