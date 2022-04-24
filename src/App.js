import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import NoteList from "./Components/NoteList/noteList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Start your notes...",
      date: "23/04/2022",
    },
  ]);
  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    localStorage.setItem("react-noteData-app", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const noteSaveData = JSON.parse(localStorage.getItem("react-noteData-app"));

    if (noteSaveData) {
      setNotes(noteSaveData);
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);

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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleMode={setDarkMode} />
        <Search handleSearchNote={setSearchNote} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleRemoveNote={removeNote}
        />
      </div>
    </div>
  );
}

export default App;
