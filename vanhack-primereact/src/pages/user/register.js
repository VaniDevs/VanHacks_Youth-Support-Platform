import React, {Component} from 'react';
import axios from 'axios'
import dot from 'dot-prop'
import {Dialog} from 'primereact/dialog';
import {
  withRouter
} from 'react-router-dom'
import {Dropdown} from 'primereact/dropdown';

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      passwordAgain: "",
      type: 0,
      alertVisible: false,

      // teen
      teen_school: ""


    };
  }

  async onClickSubmit() {

  }


  onChangeText(e, key) {
    const c = {};
    c[key] = e.target.value;
    this.setState(c);
  }

  renderTeenForm() {
    // TODO add form here
    return (
        <div>
          <div>teen form</div>
          <div>
            <div>
              <span>School:</span>
              <input type="text" value={this.state.teen_school} onChange={(e) => {
                this.onChangeText(e, 'teen_school')
              }}/>
            </div>
          </div>
        </div>
    );
  }

  renderVolunteerForm() {
    // TODO add form here
    return (
        <div>volunteer form</div>
    );
  }

  renderOrganizationForm() {
    // TODO add form here
    return (
        <div>organization form</div>
    );
  }

  renderDetailForm() {
    if (this.state.type === 0) {
      return this.renderTeenForm();
    } else if (this.state.type === 1) {
      return this.renderVolunteerForm();
    } else if (this.state.type === 2) {
      return this.renderOrganizationForm();
    }
  }

  render() {
    const citySelectItems = [
      {label: 'ten', value: 0},
      {label: 'Volunteer', value: 1},
      {label: 'Organization', value: 2},
    ];

    return (
        <div>
          <div>
            register
          </div>

          <div>

            <div>
              <span>Username:</span>
              <input type="text" value={this.state.username} onChange={(e) => {
                this.onChangeText(e, 'username')
              }}/>
            </div>

            <div>
              <span>Password:</span>
              <input type="password" value={this.state.password} onChange={(e) => {
                this.onChangeText(e, 'password')
              }}/>
            </div>

            <div>
              <span>Password Again:</span>
              <input type="password" value={this.state.password} onChange={(e) => {
                this.onChangeText(e, 'password')
              }}/>
            </div>

            <div>
              <span>type</span>
              <Dropdown value={this.state.type} options={citySelectItems} onChange={(e) => {
                this.setState({type: e.value})
              }} placeholder="Select User Type"/>
            </div>

            {
              this.renderDetailForm()
            }
          </div>

          <div>
            <button onClick={this.onClickSubmit.bind(this)}>Submit</button>
          </div>
        </div>
    );
  }

}

export default withRouter(RegisterPage);