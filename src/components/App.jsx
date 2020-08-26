import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
    return <div>
        <Header />
        {notes.map((noteInArray) =>
            <Note
                key={noteInArray.key}
                title={noteInArray.title}
                content={noteInArray.content}
            />
        )}
        <Footer />
    </div>
}

export default App;
