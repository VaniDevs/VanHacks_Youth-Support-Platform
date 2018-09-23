

import React, { Component } from 'react';
import axios from 'axios'
import dot from 'dot-prop'


export default class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      username : "",
      password : ""
    };
    // this.state = {count: 0};
    // this.increment = this.increment.bind(this);
  }

  // increment() {
  //     this.setState({count: this.state.count + 1});
  // }
  onChange(e, key) {
    const c = {};
    c[key] = e.target.value;
    this.setState(c);
  }
  async onSubmit() {
    const a = await axios.get(`${window.SERVER_ROOT_URL}/biz/user/login`, {
      username: this.state.username,
      password: this.state.password,
    });
    const err = dot.get(a, 'data.err');
    if (err) {
      
    } else {

    }
  }

  render() {
    return (
        <div className="login-page">
          <div>login page</div>
          <div>
            <span>Username:</span>
            <div>
              <input type="text" value={this.state.username} onChange={(e)=>{this.onChange(e, 'username')}} />
            </div>
            <div>
              <input type="password" value={this.state.password} onChange={(e)=>{this.onChange(e, 'password')}}/>
            </div>
          </div>
          <div>

          </div>
          <button onClick={()=>{this.onSubmit()}}>
            Login
          </button>
        </div>
    );
  }
}