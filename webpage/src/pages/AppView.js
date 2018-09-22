/**
 */
import React, { Component } from 'react';
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import {userGet} from '../actions/http/NetworkAction'

import { connect } from 'react-redux';


class AppView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.staffGet((res) => {
            console.log(res);
        });
    }

    render () {
      return <HomePage/>;
        // console.log(this.props.loginStaff);
        // if (this.props.loginStaff) {
        //     return <HomePage/>;
        // } else {
        //     return <LoginPage/>;
        //
        // }
    }
}

function mapStateToProps({loginStaff}) {
    return { loginStaff };
}

export default connect(mapStateToProps, {staffGet: userGet})(AppView);