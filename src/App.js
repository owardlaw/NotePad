import React, { useState, useEffect } from "react";
import "./App.css";
import NotePad from "./components/NotePad";

const App = () => {

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem(`savedDarkMode`);
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem(`savedDarkMode`, JSON.stringify(darkMode));
  }, [darkMode]);
  

  const [width, setWidth] = useState(() => {
    const savedWidth = localStorage.getItem(`savedWidth`);
    return savedWidth ? parseInt(savedWidth) : 400;
  });


  function handleSize(direction) {
    if (direction === "add" && width <= 700) {
      const newWidth = width + 100;
      setWidth(newWidth);
      localStorage.setItem(`savedWidth`, newWidth)
    } else if (direction === "subtract" && width >= 400) {
      const newWidth = width - 100;
      setWidth(newWidth);
      localStorage.setItem(`savedWidth`, newWidth)
    }
  }

  return (
    <div className="App" style={{ width: width, backgroundColor: darkMode ? null : " #1d1d1d" }}>
      <div className="buttons">
        <button id={darkMode ? "buttons" : "buttons-dark"} onClick={() => handleSize("add")}>+</button>
        <button id={darkMode ? "buttons" : "buttons-dark"} onClick={() => handleSize("subtract")}>-</button>
        <button
          id={darkMode ? "buttons" : "buttons-dark"}
          onClick={() => setDarkMode(!darkMode)}
          style={{ fontSize: "17px", lineHeight: "-1" }}
        >
          {darkMode ? "🌞" : "🌚"}
        </button>      </div>
      <NotePad darkMode={darkMode} />
    </div >
  );
};

export default App;
