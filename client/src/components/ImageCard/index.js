import React from "react";

// This file exports image card component

export default function ImageCard(props) {
  return (
    <div className="row">
      <div className="col s3">
        <div className="card">
          <div className="card-image">
            <img src={props.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div>
    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg">
        </div>
        
      </div>
    </div>
  </div>
  </div>*/
