

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { staffLogin } from '../../actions/http/NetworkAction'
import {renderTextField} from '../../helper/FormHelper'


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
        <div>Search Page</div>
    )

  }
}



export default connect(null,{ staffLogin })(SearchHomePage)



