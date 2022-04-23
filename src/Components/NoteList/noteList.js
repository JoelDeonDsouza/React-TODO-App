import React from "react";
import Note from "../Note/note";
import AddNote from "../AddNote/addNote";

const NoteList = ({ notes, handleAddNote, handleRemoveNote }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleRemoveNote={handleRemoveNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
