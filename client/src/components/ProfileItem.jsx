import React, { Component, Fragment } from 'react';

class ProfileItem extends Component {
  render() {
    const { title, text, img, links } = this.props;

    return (
      <Fragment>
        <div className="card blue-grey darken-2 custom-hidden">
            <div className="card-image">
                <img src={img} alt="Yuri" className="custom-img" />
                <span className="card-title">{title}</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </a>
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
