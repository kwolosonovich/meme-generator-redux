import React from "react";
import CreateForm from "./CreateForm"
import MemeList from "./MemeList"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        Meme Generator
      </header>
      <CreateForm/>
      <MemeList />
    </div>
  );
}

export default App;
