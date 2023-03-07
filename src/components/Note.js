import React from "react";

const Note = ({ onClick, completed, text }) => (
  <li
    className="note"
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>
);

export default Note;
