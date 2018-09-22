

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin, searchResources } from '../../actions/http/NetworkAction'
import {renderTextField} from '../../helper/FormHelper'


import ResultList from './ResultList'

class SearchHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.staffLogin(values.username, values.password, ()=> {
      console.log('submit callback');
    });
  }
  componentDidMount() {
    const { handleSubmit } = this.props;
    this.props.searchResources();
  }

  render () {
    console.log('----aaa----');
    console.log(this.props.searchResults);
    console.log('----bbb----');
    return (
        <div>
          <div>Search Page</div>
          <div>
            <input type="text"></input><button>search</button>
          </div>
          <ResultList
              results={[{
                _id: '1',
                title: "aaa"
              }, {
                _id: '2',
                title: "aaa"
              }, {
                _id: '3',
                title: "aaa"
              }]}
          />
        </div>

    )

  }
}

function mapStateToProps({searchResults}) {
  return {searchResults};
}

export default connect(mapStateToProps,{ searchResources })(SearchHomePage)



