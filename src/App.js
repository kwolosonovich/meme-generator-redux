import React from "react";
import CreateForm from "./CreateForm"
import './App.css';
import MemeList from "./MemeList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Meme Generator
      </header>
      <CreateForm/>
      <MemeList />
    </div>
  );
}

export default App;
