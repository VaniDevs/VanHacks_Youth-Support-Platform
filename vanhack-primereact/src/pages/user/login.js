

import React, { Component } from 'react';



export default class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      user : null
    };
    // this.state = {count: 0};
    // this.increment = this.increment.bind(this);
  }

  // increment() {
  //     this.setState({count: this.state.count + 1});
  // }

  render() {
    return (
        <div className="login-page">
          <div>login page</div>
          <div>
            <span>Username:</span>
            <input type="text"></input>
          </div>
          <div>

          </div>
          <button>
            Login
          </button>
        </div>
    );
  }
}