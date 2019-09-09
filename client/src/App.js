import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Books";
import Saved from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Nav from "./components/Header";
import Nav from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
