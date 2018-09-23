

import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { searchResources } from '../../actions/http/NetworkAction'
// import {clearSearchResults} from '../../actions/page/SearchHome'
import axios from 'axios'

import ResultList from './ResultList'

class SearchHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {keyword: '', resources: []};
  }

  async onSubmit() {
    console.log(this.state.keyword);
    // this.props.searchResources();
    const a = await axios.get(`${window.SERVER_ROOT_URL}/biz/program/search`);
    // TODO handle error and zero result
    this.setState({searchResults:a.data.programs});
  }
  componentDidMount() {
    // this.queryData();
    // this.props.clearSearchResults();
  }
  // async queryData() {
  //
  // }
  onKeywordChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }
  render () {
    return (
        <div>
          <div>One Punch - Youth Support</div>
          <div>
            <input type="text" onChange={this.onKeywordChange.bind(this)} value={this.state.keyword}/>
            <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>search</button>
          </div>
          <ResultList
              results={this.state.searchResults || []}
          />
        </div>
    )
  }
}



export default SearchHomePage



