import React from "react";
import Note from "../Note/note";
import AddNote from "../AddNote/addNote";

const NoteList = ({ notes }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
};

export default NoteList;
