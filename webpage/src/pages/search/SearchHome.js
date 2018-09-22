

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/http/NetworkAction'
import {renderTextField} from '../../helper/FormHelper'
import ResultList from './ResultList'
// import {AutoComplete} from 'primereact/autocomplete';
// import {Button} from 'primereact/button';

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

  render () {
    const { handleSubmit } = this.props;

    return (
        <div>
          <div>One Punch - Youth Support</div>
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



export default connect(null,{ staffLogin: userLogin })(SearchHomePage)



