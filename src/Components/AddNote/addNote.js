import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText(" ");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type your note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="footer">
        <small>120 Remining</small>
        <button className="save" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
