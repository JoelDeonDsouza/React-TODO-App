import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleRemoveNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.4em"
          onClick={() => handleRemoveNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
