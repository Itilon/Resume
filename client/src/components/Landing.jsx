import React, { Component } from 'react';
import axios from 'axios';

import ProfileItem from './ProfileItem';

import profile from '../assets/profile.png';
import languages from '../assets/languages.png';
import technologies from '../assets/technologies.jpeg';


class Landing extends Component {
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
            <div className="custom-body">
                <div className="container">
                    {this.state.items.map((item, i) => {
                        if (i % 2 !== 0) {
                            return (
                                <div id={`row-${i}`} className="row" key={i}>
                                    <div className="col l6 m12">
                                    </div>
                                    <div className="col l6 m12 custom-right-col">
                                        <ProfileItem item={item} />
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div id={`row-${i}`} className="row" key={i}>
                                <div className="col l6 m12 custom-left-col">
                                    <ProfileItem item={item} />
                                </div>
                                <div className="col l6 m12">
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
  }
}

export default Landing;
