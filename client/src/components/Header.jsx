import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo darken-4 custom-nav">
          <Link to="/" className="brand-logo center">
            <i className="material-icons">school</i>
            myResume
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header;
