/**
 */
import React, { Component } from 'react';
import ResultRow from './ResultRow'

import './ResultList.css';


class ResultList extends Component {

  componentDidMount() {

  }

  selectedGroupChanged(event) {
  }

  render () {
    const content = this.props.results.map((d)=>{
      return <ResultRow key={d._id} resource={d}/>
    });
    return (
        <div className="search-result-container">
          <div className="search-result-row">
            <div className={"search-column"}>Description</div>
            <div className={"search-column"}>Location</div>
            <div className={"search-column"}>Apply Deadline</div>
            <div className={"search-column"}>Field</div>

          </div>
          <div>{content}</div>

        </div>
    );
  }
}



export default ResultList;