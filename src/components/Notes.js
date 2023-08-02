import React, { useContext, useEffect, useRef,useState } from 'react';import noteContext from "../context/notes/noteContext"
import { useNavigate} from 'react-router-dom'
import Noteitem from './Noteitem';
import AddNote from './AddNote';


const Notes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      // console.log("It is working");
      getNotes();
    }
    else{
      // console.log("It is not working");
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id: "", etitle: "", edescription: "",etag: ""});

  const updateNote = (currentNote) => {
      ref.current.click();
      setNote({id: currentNote._id, etitle : currentNote.title, edescription: currentNote.description, etag : currentNote.tag})
  }

      const handleClick = (e)=>{  
        // console.log("Updating the note", note)  
        editNote(note.id, note.etitle, note.edescription, note.etag);  
        refClose.current.click();
        props.showAlert("Updated Successfully", "success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})      // Using Spread Operator
    }

  return (
    <>
      <AddNote showAlert={props.showAlert}/>
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
                    <input type="text" className="form-control" id="etitle"  name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={5} required />
                    <div id="emailHelp" className="form-text">Add a title of your Note</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
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
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5}  type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
        {notes.length === 0 ? "No Notes to display" : null}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
        })}
      </div>
    </>
  );
}

export default Notes;
