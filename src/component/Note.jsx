import React from "react";
import { styled } from '@mui/system';

import DeleteIcon from '@mui/icons-material/Delete';



const NOte =styled('div')({
    background: '#fff',
    marginTop: 110,
    width: 300,
    height:130,
    boxShadow: 50 ,
    marginLeft:50,
    borderRadius:4,
    float: 'left',
    overflow: 'hidden',
    
})

const Buttons =styled('button')({

    position: 'relative',
    float: 'right',
    marginRight: 1,
    color: '#f5ba13',
    border: 'none',
    width: 36,
    height: 36,
    cursor: 'pointer',
    outline: 'none',
    
  })

 function  Note(props){   
    function handleClick(){ 
    props.onDelete(props.id);
    }
    


    return <div >
        <NOte>
        <h3 style={{marginLeft:5}}>{props.title}</h3>
        <p style={{marginLeft:5}}>{props.content }</p>
        <Buttons  onClick={handleClick}><DeleteIcon /></Buttons>
        
        </NOte>
        
       
    </div>
}

export default Note;