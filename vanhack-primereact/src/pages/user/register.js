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
      alertVisible: false,

      // userInfo
      username: "",
      password: "",
      passwordAgain: "",
      type: 0,
      name: "",
      email: "",
      phone: "",
      birthday: null,
      address: "",

      // teen
      teen_school: "",
      teen_gender: 0,
      teen_education_level: 0,
      teen_field: [],

      // volunteer
      volunteer_gender: 0,
      volunteer_education_level: 0,
      volunteer_field: [],
      volunteer_available: [],

      // organization
      organization_location: '',
      organization_web: '',

    };
  }

  showAlert() {
    this.setState({
      alertVisible: true,
    })
  }

  async onClickSubmit() {

    // TODO verify info

    // TODO register here
    const info = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      birthday: this.state.birthday,
      address: this.state.address,
      type: this.state.type
    };

    if (this.state.type === 0) {
      info.teenInfo = {
        gender: this.state.teen_gender,
        education_level: this.state.education_level,
        school: this.state.teen_school,
        field: this.state.teen_field,
      };
    } else if (this.state.type === 1) {
      // TODO add volunteerInfo here
      info.volunteerInfo = {

      };
    } else if (this.state.type === 2) {
      // TODO add organizatinoInfo here
      info.organizationInfo = {

      };
    }
    console.log(info);

    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/user/login`, info);
    // TODO
    const err = dot.get(a, 'data.err');
    if (err) {
      this.showAlert();
    } else {
      const user = dot.get(a, 'data.user');
      if (this.props.onRegister && user) {
        this.props.onRegister(user);
      }
      this.props.history.push('/');
    }
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
      {label: 'teen', value: 0},
      {label: 'Volunteer', value: 1},
      {label: 'Organization', value: 2},
    ];

    // TODO name, email, phone, birthday, address
    return (
        <div>
          <Dialog header="Alert" visible={this.state.alertVisible} width="350px" modal={true} onHide={(e) => this.setState({alertVisible: false})}>
            Username or Password Error!
          </Dialog>


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