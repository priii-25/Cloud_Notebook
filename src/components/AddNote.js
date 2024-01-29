import React, { useContext , useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext("noteContext");
    //destructing
    const {addNote}=context;
    //check if setNotes or SerNotes
    const [note, setNotes]=useState({title:"", description:"",tag:"default"})
    
    const handleClick=(e)=>{
        //so that page doesn't re-load
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>{
        setNotes({...note,[e.target.name]:e.target.value})
    }

  return (
    <div className="container my-3">
        <h1>Add a note</h1>
        <form className="container my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name='desc'
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
  )
}

export default AddNote
