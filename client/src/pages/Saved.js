import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    books: [
      {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
      }
    ]
  };

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <SearchForm />
        <ResultsCard />
        <Footer />
      </div>
    );
  }
}

export default Saved;
