import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <div className="note">
      <span>Make it</span>
      <div className="footer">
        <small>06/04/2000</small>
        <MdDeleteForever className="delete-icon" size="1.4em" />
      </div>
    </div>
  );
};

export default Note;
