import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import DropDown from "../DropDown";

//import ImageCard, { Button } from "./components/Button";
//import NavBar, { DropDown } from "./components/DropDown";
//import Form from "./components/Form";
//import images from "./images.json";
//import "./App.css";

class SearchForm extends Component {
  state = {
    book: ""
  };

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    //Now do the necessary API calls....
    //Remember that the state has the necessary inputs/search parameters.
  };

  handleOnchange = event => {
    const {
      target: { name, value }
    } = event;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
    //.catch(err => console.log("error"));
  };
  /*

  handleDropClick = event => {
    //prevent default behavior
    event.preventDefault();
    if (this.event.target.getAttribute(data - value) === "1") {
      //If user chose to fly, then hide `Form` for the destination address
      this.optionDrive.style.display = "none";
    } else if (this.event.target.getAttribute(data - value) === "2") {
      //If user chose to drive, then hide `Form` for the airport address
      this.optionFly.style.display = "none";
    }
  };*/
  //How does button component know to submit my two forms?
  render() {
    return (
      <div>
        <form className="col s12">
          <div className="row">
            <Input onChange={this.handleOnchange} name="book"></Input>
          </div>
          <div className="row">
            <FormBtn className="right" onClick={this.handleOnClick}></FormBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
