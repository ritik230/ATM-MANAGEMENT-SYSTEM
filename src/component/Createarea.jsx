import { styled } from "@mui/system";
import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';



const Inputs =styled('input')({
    fontStyle:'inherit',
    marginLeft: 299,
    fontSize: 30,
    fontWeight:400,
    
   width: 800,
   marginTop: 120,
   borderLeftColor:"white",
   borderRadius:3,
   alignItems:'center',
   borderColor:"white",
    })
    const Textareas =styled('textarea')({
        
        marginLeft: 300,
        fontSize: 20,
        fontWeight:400,
       height: 170,
       width: 800,
       borderColor:"white",
       borderRadius:3,
       
        })

        
    

function CreateArea(props) {
    const [note,setNote]=useState({
        title: "",
        content:""
    })

    function handleChange(event){
        const {name, value } = event.target;

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
      props.onAdd(note);
      setNote({
        title:"",
        content:""
      });
        event.preventDefault();
    }
  return (
    <div>
      <form>
        <Inputs name="title"  onChange={handleChange} value ={note.title}placeholder="Title" />
        <Textareas name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <Fab onClick={submitNote}><AddRoundedIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;