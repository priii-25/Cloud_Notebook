import { useState } from "react";
import noteContext from "./noteContext";
const noteState =(props)=>{
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
    return(
        //whatcver you want to provide as a paramter to the func put it in value=
       // USED FOR CONTEXT API: <noteContext.Provider value={{state, update}}>
       <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}