import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';

import profile from './assets/profile.png';
import languages from './assets/languages.png';
import technologies from './assets/technologies.jpeg';

import Header from './components/Header';
import ProfileItem from './components/ProfileItem';
import Footer from './components/Footer';

class App extends Component {
  state = {
    items: []
  }

  componentDidMount = async () => {
    const items = await axios.get('http://localhost:5000/api/items/all');
    const { data } = items;
    data[0].img = profile;
    data[1].img = languages;
    data[2].img = technologies;
    data[3].img = profile;

    this.setState({ items: items.data })

    if (window.pageYOffset <= 200) {
      this._showElement(0);
    }

    this._onScroll(this.state);
  }

  _onScroll(state) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset <= 200) {
        this._showElement(0);
        this._hideElement(2);
        this._hideElement(3);
      }

      if (window.pageYOffset > 200 && window.pageYOffset <= 400) {
        this._showElement(1);
        this._hideElement(3);
      }

      if (window.pageYOffset > 400 && window.pageYOffset <= 600) {
        this._showElement(2);
        this._hideElement(0);
      }

      if (window.pageYOffset > 600) {
        this._showElement(3);
        this._hideElement(0);
      }
    });
  }

  _showElement(i) {
      const card = document.querySelector(`#row-${i} .card`);
      card.classList.remove('custom-hidden');
      card.classList.add('custom-shown');
  }

  _hideElement(i) {
    const card = document.querySelector(`#row-${i} .card`);
    card.classList.remove('custom-shown');
    card.classList.add('custom-hidden');
}
  
  render() {
    return (
      <Fragment>
        <Header />
        <div className="grey lighten-2 custom-body">
          <div className="container">
            {this.state.items.map((item, i) => {
              if (i % 2 !== 0) {
                return (
                  <div id={`row-${i}`} className="row" key={i}>
                    <div className="col m6 s12">
                    </div>
                    <div className="col m6 s12">
                      <ProfileItem title={item.title} text={item.text} links={item.links} img={item.img} />
                    </div>
                  </div>
                );
              }

              return (
                <div id={`row-${i}`} className="row" key={i}>
                    <div className="col m6 s12">
                      <ProfileItem title={item.title} text={item.text} links={item.links} img={item.img} />
                    </div>
                    <div className="col m6 s12">
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
