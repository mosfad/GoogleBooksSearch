import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Search />
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;*/
