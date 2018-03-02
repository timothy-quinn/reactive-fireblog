import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Home from './containers/Home';
import Post from './containers/Post';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // TODO: Add Menu Header in front of router

    return (
      <div>
        <Router>
          <div>
            <Link to="/">Home</Link>
            {/*<Link to="/admin">Admin</Link>*/}
            <Route exact path="/" component={Home} />
            <Route path="/:slug" component={Post} />
            {/* <Route path="/admin" component={Admin} /> */}
          </div>
        </Router>
        <Footer />
      </div>
    );

    // TODO: Add Footer below router
  }
}

export default App;
