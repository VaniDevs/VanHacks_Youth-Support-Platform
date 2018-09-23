import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { searchResources } from '../../actions/http/NetworkAction'
// import {clearSearchResults} from '../../actions/page/SearchHome'
import axios from 'axios'
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

import ResultList from './ResultList'
import './SearchHome.css'

class SearchHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {keyword: '', resources: []};
  }

  async onSubmit() {
    console.log(this.state.keyword);
    if (!this.state.keyword) {
      this.setState({searchResults: []});
    } else {
      const a = await axios.post(`${window.SERVER_ROOT_URL}/biz/program/search`, {
        keyword: this.state.keyword
      });
      this.setState({searchResults: a.data.programs});
    }
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

  render() {
    return (
        <div className="search-home">
          <div className="introduction">
            <div className="feature-intro">
              <h1>Search</h1>
              <p>Search for Our Program
              </p>
            </div>
          </div>
          <div className="ui-container">
            <InputText className="search-keyword" value={this.state.keyword} onChange={this.onKeywordChange.bind(this)} />
            <Button  className="search-btn" label="Search" onClick={this.onSubmit.bind(this)}/>
          </div>
          <ResultList
              results={this.state.searchResults || []}
          />
        </div>
    )
  }
}


export default SearchHomePage



