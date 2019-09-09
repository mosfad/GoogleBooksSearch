import React from "react";

// This file exports the various inputs and FormBtn components

export function Input(props) {
  return (
    <div>
      <div className="input-field col s12">
        <i className="material-icons prefix">book</i>
        <input
          {...props}
          id="icon_prefix"
          type="text"
          className="validate"
        ></input>
        <label htmlFor="icon_prefix"></label>
      </div>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      className="btn waves-effect waves-light"
      type="submit"
      name="action"
    >
      Search
      <i className="material-icons right">search</i>
    </button>
  );
}
