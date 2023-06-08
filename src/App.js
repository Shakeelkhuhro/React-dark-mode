import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dark, setMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);
  
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  
  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <div className="nav">
        <label className="switch">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setMode(!dark)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content">
        <h1>{dark ? "Oh Dark Mode Now Woh" : "Light Mode"}</h1>
        <p style={{ fontSize: "20px" }}>{dark ? "Press Toggle Button to switch Light Mode" : "Press Toggle Button to switch Dark Mode"}</p>
      </div>
    </div>
  );
}

export default App;
