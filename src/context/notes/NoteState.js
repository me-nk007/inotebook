import React  from "react";
import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props)=>{
  const host = "http://localhost:5000"
    const notesInitial = []
      const [notes, setNotes] = useState(notesInitial);

             // Get all Notes
             const getNotes = async ()=>{
              const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTQ5MzU4YWM5YzAyZDkxNDc0NjE4In0sImlhdCI6MTY5MDcxMTg1NX0.xz_-A2aU9cIYKKoI7DIAlp9QJWR4JV7SY1bKCEEjsrI"
                }
              });
              const json = await response.json();   
              console.log(json)
              setNotes(json)
              
            }

       // Add a Note
        const addNote = async (title, description, tag)=>{
          // TODO : API Call
          const response = await fetch(`${host}/api/notes/addnote/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTQ5MzU4YWM5YzAyZDkxNDc0NjE4In0sImlhdCI6MTY5MDcxMTg1NX0.xz_-A2aU9cIYKKoI7DIAlp9QJWR4JV7SY1bKCEEjsrI"
            },
        
            body: JSON.stringify({title, description,tag})
          });
          const json =  response.json();

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
       const editNote = async (id, title, description, tag)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTQ5MzU4YWM5YzAyZDkxNDc0NjE4In0sImlhdCI6MTY5MDcxMTg1NX0.xz_-A2aU9cIYKKoI7DIAlp9QJWR4JV7SY1bKCEEjsrI"
          },
      
          body: JSON.stringify({title, description,tag})
        });
        // const json =  response.json();
      

        // Logic to edit in client
          for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
              element.title = title;
              element.description = description;
              element.tag = tag;
            }

          }
       }



    return (
        <NoteContext.Provider value={{notes,addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;