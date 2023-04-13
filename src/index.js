import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import InputText from "./InputText";

function App() {
  return (
    <div className="App">
      <h1>Todo App with React Hooks</h1>
      <InputText />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
