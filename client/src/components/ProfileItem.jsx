import React, { Component, Fragment } from 'react';

class ProfileItem extends Component {
  render() {
    const { 
        item: { _id, title, text, img, links, customView, customBtn, icon, iconColor }, 
        btnPosition
    } = this.props;

    return (
      <Fragment>
        <button
            id={`btn-${_id}`}
            className={`btn-floating waves-effect waves-light ${customBtn}`}
            onClick={(icon === 'add') ? this.props.showCard.bind(this, _id) : this.props.hideCard.bind(this, _id)}
        >
            <i className={`material-icons ${iconColor}`}>{ icon }</i>
        </button>  
        <div className={`card z-depth-4 ${customView}`}>
            <div className="card-image">
                <img src={img} alt="" className="custom-img" />
                <span className="card-title">{title}</span>
                <button
                    className={`btn-floating halfway-fab waves-effect waves-light red ${btnPosition}`}
                    onClick={this.props.hideCard.bind(this, _id)}
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

export default ProfileItem;
