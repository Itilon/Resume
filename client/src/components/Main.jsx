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
        });

        this.setState({ items: items.data });

        if (document.querySelector(`#btn-${data[0]._id}`).offsetTop - window.pageYOffset <= 200) {
            this._showElement(this.state.items[0]);
        }

        if (document.querySelector(`#btn-${data[1]._id}`).offsetTop - window.pageYOffset <= 200) {
            this._showElement(this.state.items[1]);
        }

        if (document.querySelector(`#btn-${data[2]._id}`).offsetTop - window.pageYOffset <= 200) {
            this._showElement(this.state.items[2]);
        }

        if (document.querySelector(`#btn-${data[2]._id}`).offsetTop - window.pageYOffset <= 200) {
            this._showElement(this.state.items[2]);
        }

        this._onScroll(this.state);
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

    _onScroll(state) {
        const { items } = state;

        window.addEventListener('scroll', () => {
            if (document.querySelector(`#btn-${items[0]._id}`).offsetTop - window.pageYOffset <= 260 &&
                document.querySelector(`#btn-${items[0]._id}`).offsetTop - window.pageYOffset > 0) {
                this._showElement(items[0]);
                this._hideElement(items[2]);
                this._hideElement(items[3]);
            }

            if (document.querySelector(`#btn-${items[1]._id}`).offsetTop - window.pageYOffset <= 290 &&
                document.querySelector(`#btn-${items[1]._id}`).offsetTop - window.pageYOffset > 0) {
                this._showElement(items[1]);
                this._hideElement(items[3]);
            }

            if (document.querySelector(`#btn-${items[2]._id}`).offsetTop - window.pageYOffset <= 320 &&
                document.querySelector(`#btn-${items[2]._id}`).offsetTop - window.pageYOffset > 0) {
                this._showElement(items[2]);
                this._hideElement(items[0]);
            }

            if (document.querySelector(`#btn-${items[3]._id}`).offsetTop - window.pageYOffset <= 350 &&
                document.querySelector(`#btn-${items[3]._id}`).offsetTop - window.pageYOffset> 0) {
                this._showElement(items[3]);
                this._hideElement(items[1]);
                this._hideElement(items[0]);
            }
        });
    }

    _showElement(item) {
        item.customView = 'custom-shown';
        item.customBtn = 'custom-card-shown-btn';
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
