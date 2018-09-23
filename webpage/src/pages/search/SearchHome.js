

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchResources } from '../../actions/http/NetworkAction'
import {clearSearchResults} from '../../actions/page/SearchHome'


import ResultList from './ResultList'

class SearchHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ''};
  }

  onSubmit() {
    console.log(this.state.keyword);
    this.props.searchResources();
  }
  componentDidMount() {
    this.props.clearSearchResults();
  }
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
              results={this.props.searchResults}
          />
        </div>
    )
  }
}

function mapStateToProps({searchResults}) {
  return {searchResults};
}

export default connect(mapStateToProps,{ searchResources, clearSearchResults })(SearchHomePage)



