import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./ResultRow.css"

export default class ResultRow extends Component {
  render() {
    const {resource} = this.props;
    return (
        <div className="search-result-row">
          <Link to={"/program/detail/" + resource._id}><div>{resource.name}</div></Link>
          <div>{resource.desc}</div>
          <div className='search-result-divider'></div>
        </div>
    );
  }
}