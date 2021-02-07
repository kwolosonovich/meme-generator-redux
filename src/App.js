import React from "react";
import CreateForm from "./CreateForm"
import MemeList from "./MemeList"
import example from "./example.jpg"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">Meme Generator</header>
      <div class="row">
        <h3 class="slogan">Upload. Create. Share.</h3>
        <img src={example} alt="meme" class="meme-ex" />
      </div>
      <CreateForm />
      <MemeList />
    </div>
  );
}

export default App;
