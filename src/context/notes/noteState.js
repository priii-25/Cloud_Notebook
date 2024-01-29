import { useState } from "react";
import noteContext from "./noteContext";
const noteState =(props)=>{
     const host="http://localhost:5000"
    /* USING CONTEXT API
    state1={
        "name":"priyanshi",
        "class":"batch 1"
    }
    const[state, setState]=useState(state1);
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"priyanshiii",
                "class":"batch2"
            })
        },1000);
    }*/
    const notesInitial=[]
    const [notes, setNotes]= useState(notesInitial)

    //Add a note
    const addNote=(title, description,tag)=>{
        console/log("adding a new note")
          //api call
        const note={
            "_id":"1234567890",
            "user":"2345tgvfr678j",
            "title":title,
            "description":description,
            "tag":tag,
            "date":"2023-06-03T14:20:09.668z"
        };
        setNotes(notes.concat(note))
        //concat returns an array, whereas push updates an array
    }
    //Delete a note
    const deleteNote=(id)=>{
        console.log("deleting notes with id"+id);
        const newNotes=notes.filter((note)=>{note._id!==id})
        setNotes(newNotes)
    }
    //Edit a note
    const editNote= async (id, title, description, tag)=>{
        //API Call
        const response = await fetch(url, {
            method: "POST",
            //mode: "cors", 
            //cache: "no-cache", 
            //credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"1234tgbvft7"
            },
            //redirect: "follow", 
            //referrerPolicy: "no-referrer", 
            body: JSON.stringify(data),
          });
          const json=response.json();
        //editing in client side
        for(let index=0; index<notes.length; index++){
            const element=notes[index];
            if(element._id===id){
                element.title=title;
                element.description=description;
                element.tag=tag;
            }
        }
    }
    return(
        //whatcver you want to provide as a paramter to the func put it in value=
       // USED FOR CONTEXT API: <noteContext.Provider value={{state, update}}>
       <noteContext.Provider value={{notes,addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}