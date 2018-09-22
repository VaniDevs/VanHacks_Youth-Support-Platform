
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { staffLogin } from '../../actions/http/NetworkAction'
import {renderTextField} from '../../helper/FormHelper'
require('./InfoPage.css');


class InfoPage extends Component {
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
        <div className="container">
          <div className="row">
            <Link to="/home/search">Search</Link>
          </div>
          <div className="row">
            <Link to="/staff/home">Internal Staff</Link>
          </div>
          <div className="row">
            <Link to="/org/home">Thirdpart Org</Link>
          </div>
        </div>
    )

  }
}

function validate(values) {
  return {};
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
    // LoginPage
    connect(null,{ staffLogin })(InfoPage)
);



