import React, { Component, Fragment } from 'react';

class ProfileItem extends Component {
  render() {
    const { title, text, img, links } = this.props.item;
    return (
      <Fragment>
        <div className="card z-depth-4 custom-hidden" onClick={this.closeCard}>
            <div className="card-image">
                <img src={img} className="custom-img" />
                <span className="card-title">{title}</span>
                <button className="btn-floating halfway-fab waves-effect waves-light red">
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

  closeCard = (e) => {
    if (e.target.innerHTML === 'clear') {
        console.log(this);
    }
  }
}

export default ProfileItem;
