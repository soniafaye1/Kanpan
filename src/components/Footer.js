import React from "react";
import { connect } from "react-redux";
import {
  setVisibilityFilter,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from "../store";

const Footer = ({ toggleView }) => (
  <div className="footer">
    <span>Show: </span>
    <button className="footButton" onClick={() => toggleView(SHOW_ALL)}>
      All
    </button>
    <button className="footButton" onClick={() => toggleView(SHOW_ACTIVE)}>
      Active
    </button>
    <button className="footButton" onClick={() => toggleView(SHOW_COMPLETED)}>
      Completed
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleView: (value) => dispatch(setVisibilityFilter(value)),
});

export default connect(null, mapDispatchToProps)(Footer);
