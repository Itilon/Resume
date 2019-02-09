import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    const { transparency, scrolled } = this.props.header;

    return (
      <div className="navbar-fixed">
        <nav className={(transparency) ? transparency : ''}>
          <div className="nav-wrapper indigo darken-4 custom-nav">
            <Link to="/" className={`brand-logo center ${(scrolled) ? scrolled : ''}`}>
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
