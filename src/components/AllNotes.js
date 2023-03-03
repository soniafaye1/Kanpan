import React from "react";
import Note from "./Note";
import { connect } from "react-redux";
import { toggleNote, SHOW_ACTIVE, SHOW_COMPLETED } from "../store";

const AllNotes = (props) => (
  <div className="allNotes">
    <ul>
      {props.notes.map((note) => (
        <Note
          key={note.id}
          {...note}
          onClick={() => props.toggleNote(note.id)}
        />
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  if (state.visibilityFilter === SHOW_COMPLETED) {
    const notes = state.notes.filter((note) => note.completed);
    return { notes };
  }
  if (state.visibilityFilter === SHOW_ACTIVE) {
    const notes = state.notes.filter((note) => !note.completed);
    return { notes };
  }
  return { notes: state.notes };
};

const mapDispatchToProps = (dispatch) => ({
  toggleNote: (id) => dispatch(toggleNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);
