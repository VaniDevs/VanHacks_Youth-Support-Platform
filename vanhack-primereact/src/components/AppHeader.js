import React, {Component} from 'react';
import NavigationItems from './NavigationItems';
import './AppHeader.css';
import {Link} from 'react-router-dom';

export default class AppHeader extends Component {
  render() {
    return (
        <div id="layout-topbar" className="app-header">
          <Link to="/" className="app-title">
            <span >
              Weekend Fuelbag Resource Platform {
              this.props.user ? ` - ${this.props.user.name || this.props.user.username}` : ''
            }
            </span>
          </Link>

          <span
              className="nav-item"
          >
                <NavigationItems
                    user={this.props.user}
                    onClickLogout={this.props.onClickLogout}
                />
              </span>
        </div>
    )
  }
}