/**
 */
import React, { Component } from 'react';
require('./ResultList.css');


class ResultList extends Component {

  componentDidMount() {

  }

  selectedGroupChanged(event) {
  }

  render () {
    const content = this.props.results.map((d)=>{
      return <div id={d._id}>{d.title}</div>
    });
    return (
        <div>
          <div>result list</div>
          <div>{content}</div>
        </div>
    );
  }
}



export default ResultList;