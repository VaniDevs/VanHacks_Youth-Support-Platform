
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddProgram.css'
import axios from 'axios'
import {Dialog} from 'primereact/dialog';
import dot from 'dot-prop'
import {
  withRouter
} from 'react-router-dom'
import {Button} from 'primereact/button';
import {Calendar} from 'primereact/calendar';
import {MultiSelect} from 'primereact/multiselect';
import {Dropdown} from 'primereact/dropdown';



class AddProgramPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // alert
      alertVisible: false,

      // model
      name: '',
      desc: '',
      location: '',
      geo: { // TODO handle geo selection
        latitude: null,
        longitude: null
      },
      deadline: null,
      position_teen: 0,
      position_volunteer: 0,
      contact_name: '',
      contact_phone: '',
      field: 0,
    };

    this.const = {
      fields: [
        {label: 'Scholarship', value: 0},
        {label: 'Mentor', value: 1},
        {label: 'Council', value: 2},
        {label: 'Food', value: 3},
        {label: 'Health', value: 4},
        {label: 'Sport', value: 5}
      ]
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  async submitBtnClicked() {
    // TODO verify input
    const {name, desc, location, geo, deadline, position_teen, position_volunteer, contact_name, contact_phone, field} = this.state;
    const r = {name, desc, location, geo, deadline, position_teen, position_volunteer, field};
    r.contact = {
      name: contact_name,
      phone: contact_phone
    };


    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/organization/addProgram`, r);
    const err = dot.get(a, 'data.err');
    if (err) {
      this.showAlert();
    } else {
      const program = dot.get(a, 'data.program');
      // console.log(program);
      // if (this.props.onRegister && user) {
      //   this.props.onRegister(user);
      // }
      this.props.history.push('/');
    }

    // this.props.staffLogin(values.username, values.password, ()=> {
    //   console.log('submit callback');
    // });
  }

  showAlert() {
    this.setState({
      alertVisible: true,
    })
  }

  onChangeText(e, key) {
    const c = {};
    c[key] = e.target.value;
    this.setState(c);
  }

  render () {
    const { handleSubmit } = this.props;
    return (
        <div>
          <Dialog header="Alert" visible={this.state.alertVisible} width="350px" modal={true} onHide={(e) => this.setState({alertVisible: false})}>
            Error
          </Dialog>

          <div className={"introduction"}>
            <h3>Add your resource</h3>
            <div>Add you resource to support young teens in Vancouver</div>
          </div>


          <form class="form-style-7">
            <ul>
              <li>
                <label for="name">Program Name</label>
                <input type="text" name="name" maxlength="100"/>
                  <span className={"span"}>Enter your full name here</span>
              </li>
              <li>
                <label for="email">Description</label>
                <input type="email" name="email" maxlength="100"/>
                  <span className={"span"}>Enter the description of your program</span>
              </li>
              <li>
                <label for="url">Website</label>
                <input type="url" name="url" maxlength="100"/>
                  <span className={"span"}>Your website address (eg: http://www.google.com)</span>
              </li>
              <li>
                <label for="bio">Location</label>
                <textarea name="bio" onkeyup="adjust_textarea(this)"></textarea>
                <span className={"span"}>Where is this location</span>
              </li>
              <li>
                <label for="bio">Positions for young teenagers</label>
                <textarea name="bio" onkeyup="adjust_textarea(this)"></textarea>
                <span className={"span"}>Positions for young teenagers </span>
              </li>
              <li>
                <label for="bio">Number of Volunteers</label>
                <textarea name="bio" onkeyup="adjust_textarea(this)"></textarea>
                <span className={"span"}>How many volunteers you need? 0 if you don't need volunteers</span>
              </li>
              <li>
              <label for="bio">Application Deadline</label>
              <Calendar className={"calendar"} value={this.state.deadline} onChange={(e) => this.setState({deadline: e.value})}></Calendar>
              <span className={"span"}>Enter the application deadline</span>
            </li>
              <li>
                <label for="bio">Program types</label>
                <Dropdown className={"types"} value={this.state.field} options={this.const.fields} onChange={(e) => this.setState({field: e.value})} />
                <span className={"span"}>Enter the types of your programs</span>
              </li>
              <li>
                <Button className={"submit"} label={"Submit"} onClick={this.submitBtnClicked.bind(this)}></Button>
              </li>
            </ul>
          </form>



        </div>
    )
  }
}

export default withRouter(AddProgramPage);



