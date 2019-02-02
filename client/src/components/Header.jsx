import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo darken-4 custom-nav">
            <Link to="/" className="brand-logo center">
              <i className="material-icons">school</i>
              myResume
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
