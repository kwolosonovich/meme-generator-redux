import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./CreateForm"
import "./createForm.css"

const DEFAULT_FORM = {
  url: "",
  topText: "",
  bottomText: "",
};

function CreateForm({ newMeme }) {
  const [form, setForm] = useState(DEFAULT_FORM);

  function handleSubmit(e) {
    e.preventDefault();
    newMeme({ ...form, id: uuidv4() });
    setForm(DEFAULT_FORM);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  return (
    <div className="new-meme-form">
      <form id="create-meme" onSubmit={handleSubmit}>
        <div className="upload-photo">
          <h2>Upload Your Picture</h2>
          <label htmlFor="file-id"></label>
          <input
            value={form.url}
            onChange={handleChange}
            type="text"
            id="file-id"
            name="file"
            id="add-photo"
            placeholder="Image URL"
          ></input>
        </div>
        <div className="add-text">
          <h2 className="form-input">Add Text</h2>
          <label htmlFor="text-input-top"></label>
          <input
            value={form.topText}
            onChange={handleChange}
            type="text"
            name="text-field"
            id="text-input-top"
            cols="35"
            rows="2"
            placeholder="Add text to the top of your meme"
          ></input>
          <label htmlFor="text-input-bottom"></label>
          <input
            onChange={handleChange}
            value={form.bottomText}
            type="text"
            name="text-field"
            id="text-input-bottom"
            cols="35"
            rows="2"
            placeholder="Add text to the bottom of your meme"
          ></input>
        </div>
        <div className="submit-form">
          <button type="submit" form="create-meme" id="submit-button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
