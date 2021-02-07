import React, { useState } from "react";
import "./meme.css"

function Meme({ id, topText, bottomText, url}) {


  return (
    <div className="new-meme-div meme">
      <div className="meme-top-text">{topText}</div>
      <img key={id} src={url}></img>
      <div className="meme-bottom-text">{bottomText}</div>
      <button className="remove-button">Delete</button>
    </div>
  );
}

export default Meme