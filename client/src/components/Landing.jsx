import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="custom-landing">
        <div className="custom-overlay">
            <button 
                className="btn waves-effect waves-light indigo darken-2 z-depth-4 custom-btn"
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
