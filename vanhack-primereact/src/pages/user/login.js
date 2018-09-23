

import React, { Component } from 'react';
import axios from 'axios'
import dot from 'dot-prop'
import {Dialog} from 'primereact/dialog';
import {
  withRouter
} from 'react-router-dom'

class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      username : "",
      password : "",
      alertVisible: false,

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

  showAlert() {
    this.setState({
      alertVisible: true,
    })
  }

  async onSubmit() {
    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/user/login`, {
      username: this.state.username,
      password: this.state.password,
    });
    const err = dot.get(a, 'data.err');
    if (err) {
      this.showAlert();
    } else {
      const user = dot.get(a, 'data.user');
      if (this.props.onLogin && user) {
        this.props.onLogin(user);
      }
      this.props.history.push('/');
    }
  }

  render() {
    return (
        <div className="login-page">

          <Dialog header="Alert" visible={this.state.alertVisible} width="350px" modal={true} onHide={(e) => this.setState({alertVisible: false})}>
            Username or Password Error!
          </Dialog>

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

export default withRouter(LoginPage);