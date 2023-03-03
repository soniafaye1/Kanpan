import "./App.css";
import Footer from "./components/Footer";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";

function App() {
  return (
    <div className="App">
      <AddNote />
      <AllNotes />
      <Footer />
    </div>
  );
}

export default App;
