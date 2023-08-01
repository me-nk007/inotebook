import React, {useContext} from 'react';
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
const context = useContext(noteContext);


   const {deleteNote} = context;
   const {note} = props;
   const myStyle = {
    color: '#ed0202'
   }
   const yourStyle = {
    color: '#005eff'
   }
  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text my-3">{note.description}</p>
            <div className="d-flex justify-content-between my-3">
            <i className="fa-solid fa-trash fa-xl mx-2" style={myStyle} onClick={()=>{deleteNote(note._id)}} ></i>
            <i className="fa-solid fa-pen-to-square fa-xl mx-2" style={yourStyle}></i>
            </div>
           
             </div>
        </div>
            </div>
  );
}

export default Noteitem;
