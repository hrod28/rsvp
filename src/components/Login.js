/* eslint-disable */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: "#90C15B",
  },
  underlineStyle: {
    borderColor: "#90C15B",
  },
  floatingLabelStyle: {
    color: "#90C15B",
  },
  floatingLabelFocusStyle: {
    color: "#90C15B",
  },
};

const LoginForm = React.createClass({
  render(){

    return(

      <div className="row center">
        <form onSubmit={this.props.handleLoginSubmit}>
          {/* <RaisedButton label="Username" /> */}
          {/* <div className="col-l-6"> */}

          {/* </div> */}
          {/* <div className="col-l-6"> */}

          {/* </div> */}

        </form>
      </div>

    );
  }
});

export default LoginForm;
