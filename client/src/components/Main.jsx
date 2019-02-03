import React, { Component } from 'react';
import axios from 'axios';

import ProfileItem from './ProfileItem';

import profile from '../assets/profile.png';
import languages from '../assets/languages.png';
import technologies from '../assets/technologies.jpeg';


class Main extends Component {
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

        data.forEach(item => {
            item.customView = 'custom-hidden';
            item.customBtn = 'custom-show-card-btn';
            item.icon = 'add';
            item.iconColor = 'black-text';
        });

        this.setState({ items: items.data });

        this.state.items.forEach((item, i) => {
            const itemOffset = document.querySelector(`#btn-${item._id}`).offsetTop;
            const windowOffset = window.pageYOffset;
            const num = 30 * i;

            if (this._checkPosition(itemOffset, windowOffset, num)) {
                this._showElement(item);
            } else {
                this._hideElement(item);
            }
        });

        this._onScroll(this.state.items);
    }

    showCard = (_id) => {
        this.state.items.forEach((item) => {
            if (item._id === _id) {
                this._showElement(item);
            }
        });
    }

    hideCard = (_id) => {
        this.state.items.forEach((item) => {
            if (item._id === _id) {
                this._hideElement(item);
            }
        });
    }

    _onScroll(items) {

        window.addEventListener('scroll', () => {
            items.forEach((item, i) => {
                const itemOffset = document.querySelector(`#btn-${item._id}`).offsetTop;
                const windowOffset = window.pageYOffset;
                const num = 30 * i;
    
                if (this._checkPosition(itemOffset, windowOffset, num)) {
                    this._showElement(item);
                } else {
                    this._hideElement(item);
                }
            });
        });
    }

    _showElement(item) {
        item.customView = 'custom-shown';
        item.customBtn = 'custom-card-shown-btn';
        item.icon = 'clear';
        item.iconColor = 'white-text';
        this.setState({ item });

        if (document.querySelector(`#row-${item._id} .custom-right-col`)) {
            const rightColumn = document.querySelector(`#row-${item._id} .custom-right-col`);
            rightColumn.classList.remove('custom-right-col');
            rightColumn.classList.add('right-col-green');
        } else if (document.querySelector(`#row-${item._id} .custom-left-col`)) {
            const leftColumn = document.querySelector(`#row-${item._id} .custom-left-col`);
            leftColumn.classList.remove('custom-left-col');
            leftColumn.classList.add('left-col-green');
        }
    }

    _hideElement(item) {
        item.customView = 'custom-hidden';
        item.customBtn = 'custom-show-card-btn';
        item.icon = 'add';
        item.iconColor = 'black-text'
        this.setState({ item });

        if (document.querySelector(`#row-${item._id} .right-col-green`)) {
            const rightColumn = document.querySelector(`#row-${item._id} .right-col-green`);
            rightColumn.classList.remove('right-col-green');
            rightColumn.classList.add('custom-right-col');
        } else if (document.querySelector(`#row-${item._id} .left-col-green`)) {
            const leftColumn = document.querySelector(`#row-${item._id} .left-col-green`);
            leftColumn.classList.remove('left-col-green');
            leftColumn.classList.add('custom-left-col');
        }
    }

    _checkPosition(firstPosition, secondPosition, num) {
        if (firstPosition - secondPosition <= 270 + num &&
            firstPosition - secondPosition > 0) {
                return true;
            }

        return false;
    }

    render() {
        const { items } = this.state;
        return (
            <div className="custom-body">
                <div className="container">
                    {items.map((item, i) => {
                        if (i % 2 !== 0) {
                            return (
                                <div id={`row-${item._id}`} className="row" key={i}>
                                    <div className="col l6 m12">
                                    </div>
                                    <div className="col l6 m12 custom-right-col">
                                        <ProfileItem
                                            item={item}
                                            btnPosition="right"
                                            showCard={this.showCard}
                                            hideCard={this.hideCard}
                                        />
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div id={`row-${item._id}`} className="row" key={i}>
                                <div className="col l6 m12 custom-left-col">
                                    <ProfileItem
                                        item={item}
                                        btnPosition="left"
                                        showCard={this.showCard}
                                        hideCard={this.hideCard}
                                    />
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

export default Main;
