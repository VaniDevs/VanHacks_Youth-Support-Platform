import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class NavigationItems extends Component {
  render() {
    const {user} = this.props;

    if (user) {
      return <span></span>
    } else {
      return (
          <span>
          <span>
            <Link to="/user/login">Login </Link>
          </span>
          <span>
            <Link to="/user/register">Register</Link>
          </span>
        </span>
      );
    }
  }
}