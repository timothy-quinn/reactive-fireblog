import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './containers/Home';
import { About } from './containers/About';
import Post from './containers/Post';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/*<Link to="/admin">Admin</Link>*/}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:slug" component={Post} />
          {/* <Route path="/admin" component={Admin} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
