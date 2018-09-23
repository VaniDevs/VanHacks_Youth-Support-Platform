import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./ResultRow.css"

export default class ResultRow extends Component {
  render() {
    const {resource} = this.props;
    return (
        <div className="search-result-row">
          <div className={"title"}>
            <Link to={"/program/detail/" + resource._id}><div>{resource.name}</div></Link>
          </div>
          <div className={"search-column"}>{resource.desc}</div>
          <div className={"search-column"}>{resource.location}</div>
          <div className={"search-column"}>{resource.deadline.substr(0, 10)}</div>
          <div className={"search-column"}>{resource.field}</div>

        </div>
    );
  }
}