import React from "react";

let NewChirp = (props) => {
  return (
    <form>
      <label htmlFor="name"></label>
      <input
        onChange={(e) => props.handleAuthorInput(e)}
        type="text"
        id="author"
        value={props.author}
        placeholder="name"
      />

      <label htmlFor="content"></label>
      <input
        onChange={(e) => props.handleContentInput(e)}
        type="text"
        id="content"
        value={props.content}
        name=""
        id=""
        placeholder="what would you like to say?"
      />

      <button onClick={(e) => props.handleSubmit(e)} type="submit">
        {" "}
        new chirp{" "}
      </button>
    </form>
  );
};

export default NewChirp;
