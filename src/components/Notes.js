import React, { useContext, useEffect, useRef,useState } from 'react';import noteContext from "../context/notes/noteContext"

import Noteitem from './Noteitem';
import AddNote from './AddNote';


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const [note, setNote] = useState({etitle: "", edescription: "",etag: ""});

  const updateNote = (currentNote) => {
      ref.current.click();
      setNote({etitle : currentNote.title, edescription: currentNote.description, etag : currentNote.tag})
  }

      const handleClick = (e)=>{
        e.preventDefault();   
        console.log("Updating the note", note)                                   // Prevent websites from re-loading
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})      // Using Spread Operator
    }

  return (
    <>
      <AddNote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" ref={ref} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle"  name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                    <div id="emailHelp" className="form-text">Add a title of your Note</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                    <div id="emailHelp" className="form-text">Add description of your Note</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag}onChange={onChange} />
                    <div id="emailHelp" className="form-text">Add a tag to your note</div>
                </div>
                
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  );
}

export default Notes;
