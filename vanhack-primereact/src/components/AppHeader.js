import React, {Component} from 'react';
import NavigationItems from './NavigationItems';
import './AppHeader.css';

export default class AppHeader extends Component {
  render() {
    return (
        <div id="layout-topbar">
          Youth Support Resource Search
          <span>
                <NavigationItems
                    user={this.props.user}
                    onClickLogout={this.props.onClickLogout}
                />
              </span>
        </div>
    )
  }
}