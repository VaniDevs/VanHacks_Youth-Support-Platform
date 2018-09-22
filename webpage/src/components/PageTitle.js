/**
 */
import React, { Component } from 'react';


export default class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="home-subpage-title page-header">{this.props.title || ""}</h1>
                </div>
            </div>
        );
    }
}
