import React, { useState } from "react";
import "./App.css";
import NotePad from "./components/NotePad";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const App = () => {
  // const [noteId, setNoteId] = useState(0);

  // function nextNote() {
  //   setNoteId((prevNoteId) => prevNoteId + 1);
  // }

  // function prevNote() {
  //   setNoteId((prevNoteId) => (prevNoteId > 0 ? prevNoteId - 1 : 0));
  // }

  return (
    <div className="App">
      {/* <div className="arrows">
        <HiChevronLeft id="arrow" onClick={prevNote} />
        <p style={{color:"white"}}>{noteId}</p>
        <HiChevronRight id="arrow" onClick={nextNote} />
      </div>
      <NotePad id={noteId} /> */}
      <NotePad />
    </div>
  );
};

export default App;
