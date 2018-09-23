
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './ProgramDetail.css'
import dot from 'dot-prop'
import axios from 'axios'
import {Dialog} from 'primereact/dialog';

class ResourceDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {program: {}};

    const { resourceId } = this.props.match.params;
    console.log(resourceId)

    // TODO query result
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // queryResource(resourceId, (err, r)=> {
    //   console.log(err);
    //   console.log(r);
    // });
    this.queryProgram()
  }
  async queryProgram() {
    const programId = this.props.match.params.resourceId;
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

  render () {
    // const { handleSubmit } = this.props;

    return (
        <div>
          <div>
            <div>{this.state.program.name}</div>
            <div>{this.state.program.desc}</div>
          </div>
        </div>
    )
  }
}



export default ResourceDetailPage;



