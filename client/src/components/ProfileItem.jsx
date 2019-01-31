import React, { Component, Fragment } from 'react';
import profile from '../assets/profile.png';

class ProfileItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="card blue-grey darken-2">
            <div className="card-image">
                <img src={profile} alt="Yuri" className="custom-img" />
                <span className="card-title">{this.props.title}</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </a>
            </div>
            <div className="card-content white-text">
                <p>{this.props.text}</p>
            </div>
            {(() => {
                if (this.props.links) {
                    return (
                        <div className="card-action">
                            <a href={this.props.links[0].url}>{this.props.links[0].text}</a>
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
