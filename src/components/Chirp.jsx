import React from "react";
let Chirp = (props) => {
  return (
    <div className="container" style={{width:"50%"}, {margin:"15px"}}>
      <div className="card">
        <div className="card-header">{props.chippy.author}</div>
        <div className="card-body">{props.chippy.content}</div>
        <div className="card-footer">future buttons?</div>
      </div>
    </div>
  );
};

export default Chirp;
