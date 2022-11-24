import React, { Component, useState } from "react";
import "./../styles/App.css";
import Btn from "./btn";

function App() {
  return (
    <div id="main">
      // Do not alter the main div
      <p id="para" style={{ opacity: 0 }}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <Btn />
    </div>
  );
}

export default App;
