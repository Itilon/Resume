import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends Component {
  state = {
    header: {}
  }

  componentDidMount() {  
    if (window.pageYOffset > 64) {
      this._changeHeader('transparent', 'scrolled');
    }

    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 64) {
        this._changeHeader('transparent', 'scrolled');
      } else {
        this._changeHeader('', '');
      }
    });
  }

  _changeHeader(transparency, scrolled) {
    const header = {};
    header.transparency = transparency;
    header.scrolled = scrolled;

    this.setState({ header: header });
  }

  render() {
    const { header } = this.state;
    return (
      <Router>
        <Fragment>
          <Header header={header} />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/" component={ Main } />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
