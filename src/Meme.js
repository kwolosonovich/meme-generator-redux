import React from "react";
import "./meme.css"

function Meme({ id, topText, bottomText, url, deleteMeme }) {

	function handleDelete(id) {
		deleteMeme(id);
	}
		
  return (
    <div className="new-meme-div meme">
      <div className="meme-top-text">{topText}</div>
      <img key={id} src={url} className="meme-format" alt="meme"></img>
      <div className="meme-bottom-text">{bottomText}</div>
      <button
        className="remove-button"
        id="deleteBtn"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Meme