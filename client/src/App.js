import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Landing} />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
