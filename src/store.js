import { applyMiddleware, createStore } from "redux";
import loggerMiddleware from "redux-logger";
//action type
const ADD_NOTE = "ADD_NOTE";
const TOGGLE_NOTE = "TOGGLE_NOTE";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_ACTIVE = "SHOW_ACTIVE";

//action creator
let nextId = 0;
export const addNote = (text) => ({
  type: ADD_NOTE,
  id: nextId++,
  text,
});

export const toggleNote = (id) => ({
  type: TOGGLE_NOTE,
  id,
});

export const setVisibilityFilter = (value) => ({
  type: SET_VISIBILITY_FILTER,
  value,
});

//reducer
const initialState = { notes: [], visibilityFilter: SHOW_ALL };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        id: action.id,
        text: action.text,
        completed: false,
      };
      return { ...state, notes: [...state.notes, newNote] };
    case TOGGLE_NOTE:
      const notes = state.notes.map((note) =>
        note.id === action.id ? { ...note, completed: !note.completed } : note
      );
      return { ...state, notes };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        notes: [...state.notes],
        visibilityFilter: action.value,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
export default store;
