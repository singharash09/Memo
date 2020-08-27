import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

//This is the area where the user inputs a new note 
function CreateNote(props) {

    //hook for expanding the textarea for animation
    const [isExpanded, setExpanded] = useState(false);

    //stateful JSON object newNote (using hooks) to dynamically change value in HTML
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    //submit note to App.jsx
    function submitNote(event) {
        props.onAdd(newNote); //passing over the current created note to App.jsx function
        event.preventDefault(); //avoid default behavior
        setNewNote({title: "", content: ""}) //clear the form after submit
    }

    //update the value of the new note
    function handleChange(event) {
    const {name, value} = event.target;  //deconstruction event object to get name and value attribute
    setNewNote(prevNote =>{
        return {
            ...prevNote, //spread operator
            [name]: value //tapping into the value of name 
        }
    })
}
  //function to expand the textarea
   function expand() {
       setExpanded(true);
   }
    
     return (
        <div>
            <form className="create-note">
               {isExpanded ? <input 
                name="title" 
                onChange={handleChange} 
                value={newNote.title} 
                placeholder="Title"
                /> : null
                } 
                <textarea
                 name="content"
                 onClick={expand}
                 onChange={handleChange}
                 value={newNote.content} 
                 placeholder="Note something..." 
                 rows={isExpanded ? 3 : 1}                 
                 />

                <Zoom in={isExpanded ? true : false}>
                <Fab className="fab-button" onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateNote;