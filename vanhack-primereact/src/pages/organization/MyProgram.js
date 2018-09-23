import axios from 'axios'
import React, {Component} from 'react';
import dot from 'dot-prop'
import {Link} from 'react-router-dom';
import './MyProgram.css'


export default class MyProgramPage extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    this.queryMy()
  }
  async queryMy() {
    const a = await axios.get(`${window.SERVER_ROOT_URL}/biz/program/queryMy`);
    const err = dot.get(a, 'data.err');
    if (err) {
      this.setState({applyList: null});
    } else {
      const list = dot.get(a, 'data.programs');
      console.log(list);
      this.setState({list});
    }
  }

  render() {
    const a = this.state.list.map(l=>{
      return (
          <div key={l._id}>
            <Link to={`/program/detail/${l._id}`}><span>{l.name}</span></Link>
          </div>
      );
    });
    return (
        <div className="my-program">
          <div className="introduction">My Program</div>
          <div className="table-container">{a}</div>
        </div>
    );
  }
}