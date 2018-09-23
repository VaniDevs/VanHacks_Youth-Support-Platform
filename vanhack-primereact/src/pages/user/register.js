import React, {Component} from 'react';
import axios from 'axios'
import dot from 'dot-prop'
import {Dialog} from 'primereact/dialog';
import {
  withRouter
} from 'react-router-dom'
import {Dropdown} from 'primereact/dropdown';
import "./register.css";
import {TabMenu} from 'primereact/tabmenu';
import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import {InputMask} from 'primereact/inputmask';
import {Password} from 'primereact/password';
import {MultiSelect} from 'primereact/multiselect';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';



class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      alertVisible: false,

      // userInfo
      username: "",
      password: "",
      passwordAgain: "",
      type: 1,
      name: "",
      email: "",
      phone: "",
      birthday: null,
      address: "",

      // teen
      teen_school: "",
      teen_education_level: 0,
      teen_field: [],

      // volunteer

      volunteer_education_level: 0,
      volunteer_field: [],
      volunteer_available: [],

      // organization
      organization_location: '',
      organization_web: '',

    };

    this.const = {
       educationLevel: [
        {label: 'Pre-school', value: 0},
        {label: 'Primary School', value: 1},
        {label: 'Middle School', value: 2},
        {label: 'High School', value: 3},
        {label: 'College', value: 4}
      ],
      menuTab: [
        {label: 'I am a young student', type: 0},
        {label: 'I am a volunteer', type: 1},
        {label: 'I am an organization', type: 2},
      ],
      fields: [
        {label: 'Scholarship', value: 0},
        {label: 'Mentor', value: 1},
        {label: 'Council', value: 2},
        {label: 'Food', value: 3},
        {label: 'Health', value: 4},
        {label: 'Sport', value: 5}
      ]
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

    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/user/register`, info);
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
          <div className="form">
            <h2>Student/Teenage Information</h2>
            <div className="form-row">
              <label className="form-label">School</label>
              <InputText className="form-cell" value={this.state.teen_school} onChange={(e) => this.setState({teen_school: e.value})}></InputText>
            </div>
            <div className="form-row">
              <label className="form-label">Education Level</label>
              <Dropdown className="form-label" value={this.state.teen_education_level} options={this.const.educationLevel} onChange={(e) => this.setState({teen_education_level: e.value})}  />
            </div>
            <div className="form-row">
              <label className="form-label">Interesting Fileds</label>
              <MultiSelect value={this.state.teen_field} options={this.const.fields} onChange={(e) => this.setState({teen_field: e.value})} />
            </div>
          </div>
        </div>
    );
  }

  renderVolunteerForm() {
    return (


    <div class="form">

      <div>
        <h2>Volunteer Information</h2>
        <div className="form-row">
          <label className="form-label">Education Level</label>
          <Dropdown className="form-label" value={this.state.volunteer_education_level} options={this.const.educationLevel} onChange={(e) => this.setState({volunteer_education_level: e.value})} />
        </div>
        <div className="form-row">
          <label className="form-label">Interesting Fileds</label>
          <MultiSelect value={this.state.volunteer_field} options={this.const.fields} onChange={(e) => this.setState({volunteer_field: e.value})} />
        </div>
        <div className="form-row">
          <label className="form-label">Available time</label>
          <Calendar selectionMode="multiple" value={this.state.volunteer_available} onChange={(e) => this.setState({volunteer_available: e.value})}></Calendar>
        </div>
      </div>
    </div>
    );
  }

  renderOrganizationForm() {
    // TODO add form here
    return (
        <div class="form">

          <div>
            <h2>Organization Information</h2>
            <div className="form-row">
              <label className="form-label">Location</label>
              <InputText className="form-cell" value={this.state.organization_location} onChange={(e) => this.setState({organization_location: e.value})} />
            </div>
            <div className="form-row">
              <label className="form-label">Web</label>
              <InputText className="form-cell" value={this.state.organization_web} onChange={(e) => this.setState({organization_web: e.value})} />
            </div>
          </div>
        </div>
    );
  }

  renderDetailForm() {
    console.log(this.state.type);
    if (this.state.type === 0) {
      return this.renderTeenForm();
    } else if (this.state.type === 1) {
      return this.renderVolunteerForm();
    } else if (this.state.type === 2) {
      return this.renderOrganizationForm();
    }
  }

  render() {







    // TODO name, email, phone, birthday, address
    return (
        <div className="register-page">
          <Dialog header="Alert" visible={this.state.alertVisible} width="350px" modal={true} onHide={(e) => this.setState({alertVisible: false})}>
            Username or Password Error!
          </Dialog>
          <div className="introduction">
            <div className="feature-intro">
              <h1>Register</h1>
              <p>Register    a member of YouthSupport.
              </p>
            </div>
          </div>

          <div className="content">

            <div className="content-center">
            <TabMenu className="tabMenu" model={this.const.menuTab} activeItem={this.state.type} onTabChange={(e) => this.setState({type: e.value.type})}/>
            </div>
              <div className="register-input">
                <div className="form">
                  <h2>User Register Information</h2>
                  <div className="form-row">
                    <label className="form-label">Username</label>
                    <InputText className="form-cell" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                  </div>

                  <div className="form-row">
                    <label className="form-label">Password</label>
                    <Password className="form-cell" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                  </div>
                  <div className="form-row">
                    <label className="form-label">Password Again</label>
                    <Password className="form-cell" value={this.state.passwordAgain} onChange={(e) => this.setState({passwordAgain: e.target.value})} />
                  </div>
                  <div className="form-row">
                    <label className="form-label">Birthday</label>
                    <Calendar ID="birthday" className="form-cell" value={this.state.birthday} onChange={(e) => this.setState({birthday: e.value})}></Calendar>
                  </div>
                  <div className="form-row">
                    <label className="form-label">Telephone</label>
                    <InputMask className="form-cell" mask="(999) 999-9999" value={this.state.phone} onChange={(e) => this.setState({phone: e.value})}></InputMask>
                  </div>
                  <div className="form-row">
                  <label className="form-label">Email</label>
                  <InputText className="form-cell" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                </div>
                  <div className="form-row">
                    <label className="form-label">Address</label>
                    <InputText className="form-cell address" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} />
                  </div>
                  {
                    this.renderDetailForm()
                  }



                </div>

              </div>
          </div>


          <div className="button-submit">
            <Button label={"Submit"} onClick={this.onClickSubmit.bind(this)} />
          </div>
        </div>
    );
  }

}

export default withRouter(RegisterPage);