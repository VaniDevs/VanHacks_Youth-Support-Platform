
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
require('./ResourceDetail.css');


class ResourceDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    const { resourceId } = this.props.match.params;
    console.log(resourceId)

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
              ResourceDetail:{this.props.match.params.resourceId}
            </div>
          </div>
        </div>
    )
  }
}

function validate(values) {
  return {};
}

export default connect(null,{ })(ResourceDetailPage);



