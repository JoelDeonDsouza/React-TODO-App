import React from "react";
import Note from "../Note/note";

const NoteList = ({ notes }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NoteList;
