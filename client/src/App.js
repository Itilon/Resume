import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import ProfileItem from './components/ProfileItem';
import Footer from './components/Footer';

class App extends Component {
  state = {
    items: [
      { 
        title: 'Who Am I',
        text: 'My name is Yuri and I enjoy coding.',
        links: [
          {url: 'https://www.linkedin.com/in/yuri-ivanov-9a46a955/', text: 'Contact me on LinkedIn'}
        ]
      },
      { title: 'What Languages Do I Know', text: 'The short answer includes Javascript, C#, Typescript, HTML and CSS.'},
      { title: 'What Technologies Can I Work With', text: 'Where should I start? I spent a lot of time learning to code backend applications with Node.js and Express.js.' },
      {
        title: 'Do you want to know more?',
        text: 'You can find some of the projects I have fun with on my GitHub page.',
        links: [
          {url: 'https://github.com/Itilon/', text: 'See my code on GitHub'}
        ]
      }
    ]
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
                  <div className="row" key={i}>
                    <div className="col m7 s12">
                    </div>
                    <div className="col m5 s12">
                      <ProfileItem title={item.title} text={item.text} links={item.links} />
                    </div>
                  </div>
                );
              }

              return (
                <div className="row" key={i}>
                    <div className="col m5 s12">
                      <ProfileItem title={item.title} text={item.text} links={item.links} />
                    </div>
                    <div className="col m7 s12">
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
