/**
 */
import React, { Component } from 'react';
import ResultRow from './ResultRow'

require('./ResultList.css');


class ResultList extends Component {

  componentDidMount() {

  }

  selectedGroupChanged(event) {
  }

  render () {
    const content = this.props.results.map((d)=>{
      return <ResultRow id={d._id} resource={d}/>
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