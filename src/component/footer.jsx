import React from 'react';
import { styled } from '@mui/system';

const Div = styled ('p')({
    position: 'fixed',
    left: 0,
    bottom:0,
    width : 1440,
    textAlign: 'center',
    color: 'gray',
    
   
    

})



function  Footer(){
    return <Div>
        <p>Copyright @ {new Date().getFullYear()} created by Ritik</p></Div>;
}

export default Footer;