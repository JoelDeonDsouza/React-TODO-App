import React from "react";

const AddNote = () => {
  return (
    <div className="note new">
      <textarea rows="8" cols="10" placeholder="Type your note..."></textarea>
      <div className="footer">
        <small>120 Remining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
