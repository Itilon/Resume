import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';

import Item from '../item/Item';

class Main extends Component {
    state = {
        items: []
    }

    componentDidMount = async () => {
        const items = await axios.get('http://localhost:5000/api/items/all');
        const { data } = items;

        this.setState({ items: data });

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
        item.layout.view = 'custom-shown';
        item.layout.button = 'custom-card-shown-btn';
        item.layout.icon = 'clear';
        item.layout.color = 'white-text';
        this.setState({ item });

        if (document.querySelector(`#row-${item._id} .custom-right-col`)) {
            this._changeClass(`#row-${item._id} .custom-right-col`, 'custom-right-col', 'right-col-green');
        } else if (document.querySelector(`#row-${item._id} .custom-left-col`)) {
            this._changeClass(`#row-${item._id} .custom-left-col`, 'custom-left-col', 'left-col-green');
        }
    }

    _hideElement(item) {
        item.layout.view = 'custom-hidden';
        item.layout.button = 'custom-show-card-btn';
        item.layout.icon = 'add';
        item.layout.color = 'black-text'
        this.setState({ item });

        if (document.querySelector(`#row-${item._id} .right-col-green`)) {
            this._changeClass(`#row-${item._id} .right-col-green`, 'right-col-green', 'custom-right-col');
        } else if (document.querySelector(`#row-${item._id} .left-col-green`)) {
            this._changeClass(`#row-${item._id} .left-col-green`, 'left-col-green', 'custom-left-col');
        }
    }

    _changeClass(selector, baseClass, newClass) {
        const el = document.querySelector(selector);
        el.classList.remove(baseClass);
        el.classList.add(newClass);
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
                                        <Item
                                            item={item}
                                            btnPosition="arrow-right"
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
                                    <Item
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
