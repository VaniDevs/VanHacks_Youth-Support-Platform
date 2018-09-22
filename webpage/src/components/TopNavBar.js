import React, { Component } from 'react';
import { userGet, userLogout } from '../actions/http/NetworkAction'
import { connect } from 'react-redux';

class TopNavBar extends Component {
    onClickLogout () {
        console.log('click logout');
        // this.props.userLogout();
    }
    onClickChangePassword () {
        console.log('click change password');
        //TODO
        // this.props.userGet((a) => {
        //     console.log('userGet:');
        //     console.log(a);
        // });
    }
    render() {
        return (
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">Weekend Fuelbag</a>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user fa-fw"></i>
                            {/*{this.props.loginStaff.username}*/}
                          {"aaa"}
                            <i className="fa fa-caret-down"></i>

                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a id="password-change" onClick={this.onClickChangePassword.bind(this)}>
                                    <i className="fa fa-gear fa-fw"></i>
                                    Change Password
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="logout-btn" onClick={this.onClickLogout.bind(this)}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps({loginStaff}) {
    return {loginStaff};
}

export default connect(mapStateToProps, {staffGet: userGet, staffLogout: userLogout})(TopNavBar);