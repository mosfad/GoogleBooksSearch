import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import { ViewBtn, DeleteBtn } from "../components/Button";
import ImageCard from "../components/ImageCard";
import axios from "axios";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [
      {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
      }
    ],
    query: ""
  };

  /*componentDidMount() {
    //this.loadGoogleBooks();
  }*/

  loadGoogleBooks = searchTerm => {
    const API_KEY = "";
    /*let API_URL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      searchTerm +
      "intitle:" +
      searchTerm +
      "&key=" +
      API_KEY;*/
    let API_URL = "https://www.googleapis.com/books/v1/volumes";
    axios
      .get(`${API_URL}?q=${searchTerm}intitle:${searchTerm}&key=${API_KEY}`)
      .then(response => {
        // handle success
        const data = [];
        /*const obj = {
          title: "",
          author: "",
          description: "",
          image: "",
          link: ""
        };*/
        response.data.items.map((arr, index) => {
          data.push({
            title: arr.volumeInfo.title,
            author: arr.volumeInfo.authors,
            description: arr.volumeInfo.description,
            image: arr.volumeInfo.imageLinks.thumbnail,
            link: arr.volumeInfo.previewLink
          });
        });
        console.log(data);
        //console.log(response.data.items);
        /*console.log(response.data.items[5].volumeInfo.authors);
        console.log(response.data.items[5].volumeInfo.title);
        console.log(response.data.items[5].volumeInfo.description);
        console.log(response.data.items[5].volumeInfo.previewLink);
        console.log(response.data.items[5].volumeInfo.imageLinks.thumbnail);*/
        this.setState({ books: data, query: "" }, () => {
          console.log(this.state);
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  componentDidUpdate() {}

  deleteBook = id => {};

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    //prevent browser from refreshing after form submission.
    event.preventDefault();
    this.loadGoogleBooks(this.state.query);
    console.log(this.state.books);
  };

  render() {
    return (
      <div>
        <form>
          <Input
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
          ></Input>
          <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
        </form>
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem>
                <div className="row">
                  <div className="col s4">
                    <strong>{book.title}</strong>
                  </div>
                  <div className="col s1 offset-s6">
                    <ViewBtn link={book.link} />
                  </div>
                  <div className="col s1"></div>
                  <DeleteBtn />
                </div>
                <div className="row">
                  <strong>Written By {book.authors}</strong>
                </div>
                <div className="row">
                  <div className="col s4">
                    <ImageCard image={book.image}></ImageCard>
                  </div>
                  <div className="col s6">{book.description}</div>
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Search;

/*
class Search extends Component {
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
      this.loadBooks();
    }
  
    loadBooks = () => {
      API.getBooks()
        .then(res =>
          this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteBook = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.author) {
        API.saveBook({
          title: this.state.title,
          author: this.state.author,
          synopsis: this.state.synopsis
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    };
  
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>What Books Should I Read?</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  value={this.state.synopsis}
                  onChange={this.handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default Search; */
