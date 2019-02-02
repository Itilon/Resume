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

        data[0].customView = 'custom-hidden';
        data[1].customView = 'custom-hidden';
        data[2].customView = 'custom-hidden';
        data[3].customView = 'custom-hidden';

        this.setState({ items: items.data });

        if (window.pageYOffset <= 200) {
            this._showElement(this.state.items[0]);
        }

        this._onScroll(this.state);
    }

    closeCard = (_id) => {
        this.state.items.forEach((item) => {
            if (item._id === _id) {
                this._hideElement(item);
            }
        })
    }

    _onScroll(state) {
        const { items } = state;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset <= 200) {
                this._showElement(items[0]);
                this._hideElement(items[2]);
                this._hideElement(items[3]);
            }

            if (window.pageYOffset > 200 && window.pageYOffset <= 400) {
                this._showElement(items[1]);
                this._hideElement(items[3]);
            }

            if (window.pageYOffset > 400 && window.pageYOffset <= 600) {
                this._showElement(items[2]);
                this._hideElement(items[0]);
            }

            if (window.pageYOffset > 600) {
                this._showElement(items[3]);
                this._hideElement(items[0]);
            }
        });
    }

    _showElement(item) {
        item.customView = 'custom-shown';
        this.setState({ item });
    }

    _hideElement(item) {
        item.customView = 'custom-hidden';
        this.setState({ item });
    }

    render() {
        return (
            <div className="custom-body">
                <div className="container">
                    {this.state.items.map((item, i) => {
                        if (i % 2 !== 0) {
                            return (
                                <div id={`row-${item._id}`} className="row" key={i}>
                                    <div className="col l6 m12">
                                    </div>
                                    <div className="col l6 m12 custom-right-col">
                                        <ProfileItem item={item} btnPosition="right" closeCard={this.closeCard} />
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div id={`row-${item._id}`} className="row" key={i}>
                                <div className="col l6 m12 custom-left-col">
                                    <ProfileItem item={item} btnPosition="left" closeCard={this.closeCard} />
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
