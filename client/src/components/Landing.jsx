import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing-background">
        <div className="landing-overlay">
            <button 
                className="btn waves-effect waves-light indigo darken-2 z-depth-4 landing-btn"
                onClick={this.scrollDown}
            >
                Click Me
            </button>
        </div>
      </div>
    )
  }

  scrollDown() {
    window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
  }
}

export default Landing;
