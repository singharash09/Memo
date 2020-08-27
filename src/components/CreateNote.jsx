import React, { useState } from "react";

//This is the area where the user inputs a new note 
function CreateNote(props) {

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
    
     return (
        <div>
            <form className="create-note">
                <input name="title" onChange={handleChange} value={newNote.title} placeholder="Title"/>
                <textarea name="content" onChange={handleChange} value={newNote.content} placeholder="Write a description..." rows="3"/>
                <button onClick={submitNote}>+</button>
            </form>
        </div>
    )
}

export default CreateNote;