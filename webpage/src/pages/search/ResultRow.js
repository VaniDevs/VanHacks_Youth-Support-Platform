import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ResultRow extends Component {
  render() {
    const {resource} = this.props;
    return (
        <div>
          <span>{resource.title}</span>
          <Link to={"/resource/detail/" + resource._id}>Link</Link>
        </div>
    );
  }
}