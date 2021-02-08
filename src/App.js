import React from "react";
import CreateForm from "./CreateForm"
import example from "./example.jpg"
import Meme from "./Meme"
import "./App.css";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  const showMemes = memes.map((m) => (
    <Meme
      key={m.id}
      topText={m.topText}
      bottomText={m.bottomText}
      url={m.url}
      deleteMeme={() => deleteMeme(m.id)}
    />
  ));

  function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  }

   function deleteMeme(id) {
     dispatch({ type: "REMOVE_MEME", id });
   }
  
  return (
    <div className="App">
      <header className="header">Meme Generator</header>
      <div className="row">
        <h3 className="slogan">Upload. Create. Share.</h3>
        <img src={example} alt="meme" className="meme-ex" />
      </div>
      <CreateForm addMeme={addMeme} />
      <span id="gallery">{showMemes}</span>
    </div>
  );
}

export default App;
