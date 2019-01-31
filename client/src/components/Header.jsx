import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo darken-4 custom-nav">
          <a href="#" className="button-collapse show-on-large left" data-activates="mobile-nav">
            <i className="material-icons">menu</i>
          </a>
          <a href="#" className="brand-logo center">
            <i className="material-icons">school</i>
            myResume
          </a>
        </div>
      </nav>
    )
  }
}

export default Header;
