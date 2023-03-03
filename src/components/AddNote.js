import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../store";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    if (e.key === "Enter") {
      this.props.add(this.state.input);
      this.setState({ input: "" });
    }
  }

  render() {
    return (
      <div className="add-note">
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          onClick={() => {
            this.props.add(this.state.input);
            this.setState({ input: "" });
          }}
        >
          Add Note
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: function (text) {
      dispatch(addNote(text));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNote);
