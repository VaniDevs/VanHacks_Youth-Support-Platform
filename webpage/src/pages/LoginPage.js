
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../actions/http/NetworkAction'
import {renderTextField} from '../helper/FormHelper'
require('./LoginPage.css');


class LoginPage extends Component {
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
            <div className="container login-page">
                 <div className="row">
                     <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">请登录</h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                    <fieldset>
                                        <div className="form-group">
                                            <Field
                                                name="username"
                                                placeholder="用户名"
                                                component={renderTextField}
                                            />
                                        </div>
                                        <div classID="form-group">
                                            <Field
                                                name="password"
                                                placeholder="密码"
                                                isPassword="true"
                                                component={renderTextField}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="login-btn btn btn-lg btn-success btn-block">登录</button>
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
    form: 'LoginForm'
})(
    // LoginPage
    connect(null,{ staffLogin: userLogin })(LoginPage)
);



