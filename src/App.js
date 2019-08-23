import React from "react";
import logo from "./logo.svg";
import "./App.css";

var QRCode = require("qrcode.react");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QRCode size={350} value="https://github.com/skaptox" level="H" />
      </header>
    </div>
  );
}

export default App;
