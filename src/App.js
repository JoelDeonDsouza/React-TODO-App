import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from "./Components/NoteList/noteList";
import Search from "./Components/Search/search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello World",
      date: "06/04/2000",
    },
    {
      id: nanoid(),
      text: "qwert1",
      date: "02/09/2000",
    },
    {
      id: nanoid(),
      text: "Hello World",
      date: "06/04/2000",
    },
    {
      id: nanoid(),
      text: "Hello World",
      date: "06/04/2000",
    },
    {
      id: nanoid(),
      text: "Hello World",
      date: "06/04/2000",
    },
  ]);
  const [searchNote, setSearchNote] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const removeNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <Search handleSearchNote={setSearchNote} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchNote)
        )}
        handleAddNote={addNote}
        handleRemoveNote={removeNote}
      />
    </div>
  );
}

export default App;
