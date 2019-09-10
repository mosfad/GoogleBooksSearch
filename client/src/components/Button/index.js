import React from "react";

// This file exports the various inputs and FormBtn components

export function ViewBtn(props) {
  return (
    <div>
      <a className="waves-effect waves-light btn-small blue">View</a>
    </div>
  );
}

export function DeleteBtn(props) {
  return (
    <div>
      <a className="waves-effect waves-light btn-small red">Delete</a>
    </div>
  );
}
