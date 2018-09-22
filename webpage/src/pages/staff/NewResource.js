
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/http/NetworkAction'
import {renderTextField} from '../../helper/FormHelper'
require('./NewResource.css');


class NewResourcePage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
    // this.props.staffLogin(values.username, values.password, ()=> {
    //   console.log('submit callback');
    // });
  }

  render () {
    const { handleSubmit } = this.props;

    return (
        <div className="container login-page">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Add New Resource</h3>
                </div>
                <div className="panel-body">
                  <form role="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <fieldset>
                      <div className="form-group">
                        <Field
                            name="title"
                            placeholder="Title"
                            component={renderTextField}
                        />
                      </div>
                      <div classID="form-group">
                        <Field
                            name="description"
                            placeholder="Description"
                            component={renderTextField}
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="login-btn btn btn-lg btn-success btn-block">Add</button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
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
  form: 'NewResourceForm'
})(
    // LoginPage
    connect(null,{ })(NewResourcePage)
);



