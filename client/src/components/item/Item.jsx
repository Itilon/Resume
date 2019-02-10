import React, { Component, Fragment } from 'react';
import './Item.css';

class Item extends Component {
  state = {
    icon: ''
  }

  componentDidMount() {
    const { _id } = this.props.item;
    const icon = document.querySelector(`#btn-${_id} .material-icons`).innerHTML;
    this.setState({ icon: icon });
  }

 showCard(_id) {
    this.setState({ icon: 'clear' });

    this._changeClass(`#row-${_id} .card`, 'custom-hidden', 'custom-shown');
    this._changeClass(`#btn-${_id}`, 'custom-show-card-btn', 'custom-card-shown-btn');
    this._changeClass(`#btn-${_id} .material-icons`, 'black-text', 'white-text');
    document.querySelector(`#btn-${_id} .material-icons`).innerHTML = 'clear';

    if (document.querySelector(`#row-${_id} .custom-right-col`)) {
        this._changeClass(`#row-${_id} .custom-right-col`, 'custom-right-col', 'right-col-green');
    } else if (document.querySelector(`#row-${_id} .custom-left-col`)) {
        this._changeClass(`#row-${_id} .custom-left-col`, 'custom-left-col', 'left-col-green');
    }
  }

  hideCard(_id) {
    this.setState({ icon: 'add' });

    this._changeClass(`#row-${_id} .card`, 'custom-shown', 'custom-hidden');
    this._changeClass(`#btn-${_id}`, 'custom-card-shown-btn', 'custom-show-card-btn');
    this._changeClass(`#btn-${_id} .material-icons`, 'white-text', 'black-text');
    document.querySelector(`#btn-${_id} .material-icons`).innerHTML = 'add';

    if (document.querySelector(`#row-${_id} .right-col-green`)) {
        this._changeClass(`#row-${_id} .right-col-green`, 'right-col-green', 'custom-right-col');
    } else if (document.querySelector(`#row-${_id} .left-col-green`)) {
        this._changeClass(`#row-${_id} .left-col-green`, 'left-col-green', 'custom-left-col');
    }
  }

  _changeClass(selector, baseClass, newClass) {
    const el = document.querySelector(selector);
    el.classList.remove(baseClass);
    el.classList.add(newClass);
  }

  render() {
    const { 
        item: { _id, title, text, links, layout: { image } },
        btnPosition
    } = this.props;

    let { icon } = this.state;

    return (
      <Fragment>
        <button
            id={`btn-${_id}`}
            className={`btn-floating waves-effect waves-light custom-show-card-btn`}
            onClick={(icon === 'add') ? this.showCard.bind(this, _id) : this.hideCard.bind(this, _id)}
        >
            <i className={`material-icons black-text`}>{ icon }</i>
        </button>  
        <div className={`card z-depth-4 custom-hidden`}>
            <div className="card-image">
                <img src={require(`../../assets/${image}`)} alt="" className="custom-img" />
                <span className="card-title">{title}</span>
                <button
                    className={`btn-floating halfway-fab waves-effect waves-light red ${btnPosition}`}
                    onClick={this.hideCard.bind(this, _id)}
                >
                    <i className="material-icons">clear</i>
                </button>
            </div>
            <div className="card-content white-text">
                <p>{text}</p>
            </div>
            {(() => {
                if (links) {
                    return (
                        <div className="card-action">
                            {links.map((link, i) => {
                                return (
                                    <a key={i} href={link.url}>{link.text}</a>
                                );
                            })}
                        </div>
                    );
                }
            })()}
        </div>
      </Fragment>
    )
  }
}

export default Item;
