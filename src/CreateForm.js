import React, { useState } from "react";
import createForm from "./createForm.css"

function CreateForm() {
	return (
    <div class="new-meme-form">
      <form id="create-meme">
        <div class="upload-photo">
						<h2>Upload Your Picture</h2>
						<label for="file-id"></label>
						<input type="text" id="file-id" name="file" id="add-photo" placeholder="Image URL"></input>
				</div>
				<div class="add-text">
						<h2 class="form-input" >Add Text</h2>
								<label for="text-input-top"></label>   
								<textarea name="text-field" id="text-input-top" cols="35" rows="2" placeholder="Add text to the top of your meme"></textarea>
								<label for="text-input-bottom"></label>
								<textarea name="text-field" id="text-input-bottom" cols="35" rows="2" placeholder="Add text to the bottom of your meme"></textarea>
				</div> 
				<div class="submit-form">
						<button type="submit" form="create-meme" id="submit-button">Create</button>     
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
