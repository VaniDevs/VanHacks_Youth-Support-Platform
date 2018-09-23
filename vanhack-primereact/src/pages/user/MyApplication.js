import axios from 'axios'
import React, {Component} from 'react';
import dot from 'dot-prop'
import {Link} from 'react-router-dom';

export default class MyApplicationPage extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.queryMy()
  }
  async queryMy() {
    if (!this.props.user) {
      return;
    }
    const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/relation/queryUserList`, {
      userId: this.props.user._id
    });

    const err = dot.get(a, 'data.err');
    if (err) {
      this.setState({applyList: null});
    } else {
      const list = dot.get(a, 'data.apply_lists');
      console.log(list);
      this.setState({list});
    }
  }

  render() {
    const a = this.state.list.map(a=>{
      const l = a.programRef;
      return (
          <div key={l._id}>
            <span>{l.name}</span>
            <Link to={`/program/detail/${l._id}`}>Link</Link>
          </div>
      );
    });
    return (
        <div>
          <div>My Application</div>
          <div>{a}</div>
        </div>
    );
  }
}