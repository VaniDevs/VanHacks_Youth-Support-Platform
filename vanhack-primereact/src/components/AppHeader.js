import React, {Component} from 'react';
import NavigationItems from './NavigationItems'

export default class AppHeader extends Component {
  render() {
    return (
        <div>
          App Header -- Add App Header Here
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