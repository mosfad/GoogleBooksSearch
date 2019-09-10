import React from "react";

// This file exports the various inputs and FormBtn components

export default function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-2">
        <a href="#" className="center brand-logo">
          Google Books
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/*
export function InputDrive(props) {
  return (
    <div>
      <div className="input-field col s6">
        <i className="material-icons prefix">directions_car</i>
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

export function InputDate(props) {
  return (
    <div>
      <div className="input-field col s6">
        <i className="material-icons prefix">date_range</i>
        <input {...props} type="text" className="datepicker"></input>
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
      Submit
      <i className="material-icons right">send</i>
    </button>
  );
}*/
