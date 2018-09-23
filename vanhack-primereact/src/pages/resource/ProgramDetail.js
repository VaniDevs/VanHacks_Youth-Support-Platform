import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
import './ProgramDetail.css'
import dot from 'dot-prop'
import axios from 'axios'
import {Dialog} from 'primereact/dialog';

class ProgramDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {program: {}};
    this.queryProgram()
  }

  async queryProgram() {
    const {programId} = this.props;
    const a = await axios.get(`${window.SERVER_ROOT_URL}/biz/program/queryOne?id=` + programId);
    const err = dot.get(a, 'data.err');
    console.log(a);
    if (err) {
      // this.showAlert();
    } else {
      const program = dot.get(a, 'data.program');
      this.setState({program});
    }
  }

  onSubmit(values) {
    console.log(values);
    // this.props.staffLogin(values.username, values.password, ()=> {
    //   console.log('submit callback');
    // });
  }

  onClickApply() {

  }

  onClickBeVolunteer() {

  }

  renderApplyBtn() {
    const {user} = this.props;
    if (user && user.type === 0) {
      return (
          <div>
            <button onClick={this.onClickApply.bind(this)}>Apply For It!</button>
          </div>
      );
    } else if (user && user.type === 1) {
      return (
          <div>
            <button onClick={this.onClickBeVolunteer.bind(this)}>Be A Volunteer For It!</button>
          </div>
      );
    } else {
      return null;
    }
  }

  render() {
    // const { handleSubmit } = this.props;
    return (
        <div>
          <h1>{this.state.program.name}</h1>
          <div>{this.renderApplyBtn()}</div>
          <div>
            <p>{this.state.program.desc}</p>
          </div>
        </div>
    )
  }
}


export default ProgramDetailPage;



