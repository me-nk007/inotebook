import React  from "react";
import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "123",
          "user": "64c549358ac9c02d91474618h",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-07-30T12:03:09.258Z",
          "__v": 0
        },
        {
            "_id": "234",
            "user": "64c549358ac9c02d91474618g",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "456",
            "user": "64c549358ac9c02d91474618f",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "678",
            "user": "64c549358ac9c02d91474618e",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "789",
            "user": "64c549358ac9c02d91474618d",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "891",
            "user": "64c549358ac9c02d91474618c",
            "title": "Second Note",
            "description": "Please access the datbase",
            "tag": "mongodb",
            "date": "2023-07-31T14:36:15.864Z",
            "__v": 0
          },
          {
            "_id": "892",
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
            "_id": "893",
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
       const deleteNote = (id)=>{
        // TODO : API Call
          console.log('Deleting the note with id' + id);
          const newNotes = notes.filter((note)=>{ return note._id !== id})
          setNotes(newNotes) 
       }



       // Edit a Note
       const editNote = (id, title, description, tag)=>{
          for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id)

          }
       }



    return (
        <NoteContext.Provider value={{notes,addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;