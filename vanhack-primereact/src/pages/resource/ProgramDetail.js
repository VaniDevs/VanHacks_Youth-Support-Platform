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
    this.state = {
      program: {},
      applyList: null,
    };
    this.queryProgram();
    this.queryApplyList();
  }
  async queryApplyList() {
    const {programId} = this.props;
    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/relation/checkRelation`, {
      programId
    });
    const err = dot.get(a, 'data.err');
    if (err) {
      this.setState({applyList: null});
    } else {
      const applyList = dot.get(a, 'data.apply_list');
      this.setState({applyList});
    }
  }

  async queryProgram() {
    const {programId} = this.props;
    const a = await axios.get(`${window.SERVER_ROOT_URL}/biz/program/queryOne?id=` + programId);
    const err = dot.get(a, 'data.err');
    // console.log(a);
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

  async onClickApply() {
    const {programId} = this.props;
    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/relation/registerProgram`, {
      programId
    });
    const err = dot.get(a, 'data.err');
    if (err) {
      //TODO show err
    } else {
      const applyList = dot.get(a, 'data.apply_list');
      this.setState({applyList});
    }
  }

  applyResultToString(r) {
    if (r === 0) {
      return "Waiting for process";
    } else if (r === 0) {
      return "Confirm";
    } else {
      return "Reject";
    }
  }

  renderApplyBtn() {
    const {user} = this.props;
    if (this.state.applyList) {
      return (
          <div>
            <p>You have apply this program, result: {this.applyResultToString(this.state.applyList.result)}</p>
          </div>
      );
    } else {
      if (user && user.type === 0) {
        return (
            <div>
              <button onClick={this.onClickApply.bind(this)}>Apply For It!</button>
            </div>
        );
      } else if (user && user.type === 1) {
        return (
            <div>
              <button onClick={this.onClickApply.bind(this)}>Be A Volunteer For It!</button>
            </div>
        );
      } else {
        return null;
      }
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



