import React from "react";
import {AppBar, styled} from "@mui/material";



const StyledHeader = styled(AppBar)`
 background: #ff9725;
 `
 const Name =styled('h2')({
    fontStyle:'inherit',
    marginLeft: 30,
    fontSize: 30,
    fontWeight:400,
   fontFamily: "McLaren ,cursive" ,
    })
 

function Header() {
    return <div >
<StyledHeader><Name style={{marginLeft:80 }}>Keeper</Name></StyledHeader>
    </div>;}

 
 
export default Header;


