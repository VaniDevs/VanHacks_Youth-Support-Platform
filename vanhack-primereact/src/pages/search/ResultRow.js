import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./ResultRow.css"

export default class ResultRow extends Component {
  render() {
    const {resource} = this.props;
    return (
        <div>
          <span>{resource.name}</span>
          <Link to={"/program/detail/" + resource._id}>Link</Link>
        </div>
    );
  }
}