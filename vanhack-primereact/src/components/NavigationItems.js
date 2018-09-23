import React, {Component} from 'react';
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
      if (user.type === 0) {
        // Teens

        return (
            <span>
            <button onClick={this.onClickLogout.bind(this)}>Logout</button>
          </span>
        );
      } else if (user.type === 1) {
        // Volunteer

        return (
            <span>
            <button onClick={this.onClickLogout.bind(this)}>Logout</button>
          </span>
        );
      } else if (user.type === 2) {
        // Organization

        return (
            <span>
              <span>
                <Link to="/organization/add_program">Add Program</Link>
              </span>
            <button onClick={this.onClickLogout.bind(this)}>Logout</button>
          </span>
        );
      }
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