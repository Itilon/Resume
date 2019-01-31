import React, { Component, Fragment } from 'react';
import './App.css';
import profile from './assets/profile.png';
import languages from './assets/languages.png';
import technologies from './assets/technologies.jpeg';

import Header from './components/Header';
import ProfileItem from './components/ProfileItem';
import Footer from './components/Footer';

class App extends Component {
  state = {
    items: [
      { 
        title: 'Who Am I',
        text: 'My name is Yuri Ivanov and I enjoy coding. I am also a blogger with an experience in writing on a multitude of topics.',
        links: [
          {url: 'https://www.linkedin.com/in/yuri-ivanov-9a46a955/', text: 'Contact me on LinkedIn'},
          {url: 'https://e-lect.net/', text: 'Visit my website'}
        ],
        img: profile
      },
      { 
        title: 'What Languages Do I Know',
        text: 'The short answer includes Javascript, C#, Typescript, HTML and CSS.',
        img: languages
      },
      {
        title: 'What Technologies Can I Work With',
        text: 'Where should I start? I spent a lot of time learning to code backend applications with Node.js and Express.js.',
        img: technologies
      },
      {
        title: 'Do you want to know more?',
        text: 'You can find some of the projects I have fun with on my GitHub page.',
        links: [
          {url: 'https://github.com/Itilon/', text: 'See my code on GitHub'}
        ],
        img: profile
      }
    ]
  }

  componentDidMount() {
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
