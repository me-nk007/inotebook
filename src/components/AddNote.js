import React, {useContext, useState} from 'react';
import noteContext from "../context/notes/noteContext";



const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "",tag: ""});
    const handleClick = (e)=>{
        e.preventDefault();                                      // Prevent websites from re-loading
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "",tag: ""})
        props.showAlert("Note Added Successfully", "success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})      // Using Spread Operator
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                    <input type="text" className="form-control" id="title"  name='title' aria-describedby="emailHelp"  value={note.title} onChange={onChange} minLength={5} required />
                    <div id="emailHelp" className="form-text">Add a title of your Note</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><strong>Description</strong></label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
                    <div id="emailHelp" className="form-text">Add description of your Note</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><strong>Tag</strong></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                    <div id="emailHelp" className="form-text">Add a tag to your note</div>
                </div>
                
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    );
}

export default AddNote;
