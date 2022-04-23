import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from "./Components/NoteList/noteList";

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
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
