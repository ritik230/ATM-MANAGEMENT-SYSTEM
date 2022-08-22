
import { useState } from 'react';
import Header from './component/Header/Header'; 
import Footer from './component/footer';
import Note from './component/Note';

import Createarea from './component/Createarea';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
   setNotes(prevNotes =>{
   return [...prevNotes, newNote];
   })
  }
  function deleteNode(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem ,index) =>{
        return index !==id;
      });
    });
  }
  return (
    <div className="App">
    
      <Header />
      < Createarea  onAdd= {addNote} />
     { notes.map( (noteItem, Index) => {
         
        return <Note 
        key={Index}
        id= {Index}
        title={noteItem.title} content ={noteItem.content} onDelete={deleteNode} />;
      })}
     
      <Footer />
    </div>
  );
}

export default App;
