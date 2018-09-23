import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class NavigationItems extends Component {
  async onClickLogout() {
    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/user/logout`, {});
    if (this.props.onClickLogout) {
      this.props.onClickLogout();
    }
  }
  render() {
    const {user} = this.props;

    if (user) {
      return <span>
        <button onClick={this.onClickLogout.bind(this)}>Logout</button>
      </span>
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