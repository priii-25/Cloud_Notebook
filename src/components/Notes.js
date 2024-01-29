import noteContext from "src\context\notes\noteContext.js"
import React,{ useContext} from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = () => {
    const context = useContext(noteContext);
    //destructing
    const {notes}=context;
  return (
    <>
    <AddNote/>
    <div className="row my-3">
      <h1>Your notes</h1>
      {notes.map((note)=>{
        return <NoteItem key={note._id} note={note}/>
        //because we get it as node._id from MONGOdb
      })}
      </div>
      </>
  )
}

export default Notes
