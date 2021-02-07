import React from "react";
import Meme from "./Meme"

function MemeList(Memes) {

	return (
    <div id="gallery">
      <h3>Gallery</h3>
      <div class="row" id="memes">
        {Memes.map((meme) => (
          <Meme
            key={meme.id}
            topText={meme.topText}
            bottomText={meme.bottomText}
            url={meme.url}
          />
        ))}
      </div>
    </div>
  );
}

export default MemeList