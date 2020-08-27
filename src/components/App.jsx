import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App() {

    //array for keeping track of notes
    const [notes, setNotes] = useState([]);

    //add new note to array
    function addNote(note) {
        setNotes(prevNotes => {
           return  [...prevNotes, note] //adding the new note at the end of the array using the ES6 spread operator
        })
    }

    //delete a note from the array 
    function deleteNote(noteID) {
        setNotes(prevNotes => {
            return prevNotes.filter((currentNote, index)=> {
                return index !== noteID;
            }
            )
        })
    }

    return <div>
        {/* Header component */}
        <Header />

        {/* Create a new note area */}
        <CreateNote onAdd = {addNote}/>

        {/* For each note in the note array, create a new Note component for them */}
        {notes.map((noteInArray, index) =>{
            return <Note 
                key={index}
                id={index}
                title = {noteInArray.title}
                content = {noteInArray.content}
                onDelete = {deleteNote}
            />
        })}

        {/* Footer component */}
        <Footer />
    </div>
}

export default App;
