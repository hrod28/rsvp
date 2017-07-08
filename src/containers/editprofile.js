
'use strict';

import React, { Component } from 'react';
import { Router, browserHistory, location } from 'react-router';
import axios from 'axios';
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
// import Checkbox from 'material-ui/Checkbox';
// import CardActions from 'material-ui/Card/CardActions';
// import CardHeader from 'material-ui/Card/CardHeader';
// import CardMedia from 'material-ui/Card/CardMedia';
// import CardTitle from 'material-ui/Card/CardTitle';
// import CardText from 'material-ui/Card/CardText';
// import Avatar from 'material-ui/Avatar/Avatar';
import {orange500, blue500} from 'material-ui/styles/colors';
import Nav from '../components/Nav.js';

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
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const editProfileContainer = React.createClass({

  getInitialState(){

    return ({
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      guest_num: '',
      questions: '',
      comments: '',

    });
  },

  componentDidMount(){
    console.log(this.props.disabled);
  },

  componentWillReceiveProps(nextProps) {
    this.setState({...nextProps.profileData});
    this.setState(nextProps.disabled);
  },



  handleSubmit(e) {
    // $(document.body).append(form);
    // document.body.appendChild(form);

  axios.get('https://weddingdb.herokuapp.com/api/rsvp', {


  })
    .then((response) => {

      // if (err || !res.ok) {
      //   console.log('ERROR: ', err);
      // } else {
      console.log('this');
        console.log(response);
    })
    .then((response) => {

  axios.post('https://weddingdb.herokuapp.com/api/rsvp', {
    first_name: this.state.first_name,
    last_name:this.state.last_name,
    phone_number: this.state.phone_number,
    email: this.state.email,
    guest_num: this.state.guest_num,
    questions: this.state.guestions,
    comments: this.state.comments

  })
})
    .then((response) => {

      // if (err || !res.ok) {
      //   console.log('ERROR: ', err);
      // } else {
      console.log('this');
        console.log(response);
    });
    // this.props.navigator.push({name: 'VoteValidation'});
    browserHistory.push('/validation');
  },


  setValue: function (field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },

  render: function(){
    return(
      <div>
        <Nav />

      <Card className="uiCard">
        <div className="profileContainer">
          <h3>Please Enter Your Information Below</h3>
          <form onSubmit={this.handleSubmit}>

            <div className="row">
              <div className="col-md-5 col-md-offset-1 col-lg-offset-1">

              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">

              </div>
            </div>

            <div className="row">
              <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
                <TextField className="profileTextArea" type="text"
                  id="firstname" floatingLabelText="First Name" onChange={this.setValue.bind(this, 'first_name')} value={this.state.first_name}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text"
                  id="lastname" floatingLabelText="Last Name" onChange={this.setValue.bind(this, 'last_name')} value={this.state.last_name}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  />
              </div>
            </div>

            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text" floatingLabelText="Phone Number" value={this.state.phone_number} onChange={this.setValue.bind(this, 'phone_number')}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text" floatingLabelText="Email Address" value={this.state.email} onChange={this.setValue.bind(this, 'email')}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
              </div>
            </div>
              <div className="row">
                <div className="col-md-offset-1 col-md-5 col-lg-offset-1">
                  <TextField className="profileTextArea" type="text" floatingLabelText="Number of Guests (0, 1, 2)" value={this.state.guest_num} onChange={this.setValue.bind(this, 'guest_num')}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                </div>
                <div className="col-md-offset-1 col-sm-offset-2 col-md-5">
                </div>
              </div>
            <h3 className="profileAbout">Additional Questions or Comments?</h3>
            <h4 className="profileAbout1">Leave your questions and comments below.  We will answer any questions by email.  Please leave a contact number and specify if you would prefer another means of communication.</h4>
              <div>
                <label>
                  <div className="row profileFormChecklist">
                  <div className="skillsText"></div>
                  <div className="col-lg-5">

                  </div>
                  </div>
                </label>
              </div>

                <div className="row">

                  <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
                    <TextField className="profileTextArea" type="text" floatingLabelText="Comments/Questions" value={this.state.comments} onChange={this.setValue.bind(this, 'comments')}
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                  </div>

                  <div>
                  <h3>Visit the home menu page to <a className="linkstyle1" href="/newPost">Request a Parking Pass</a></h3>
                  </div>

                </div>
                <br></br>
                <br></br>

                <div className="row">
                  <div className="col-sm-12 profileSubmitButton">
                    <Button type="submit" label="Submit"
                    className="buttonBackground"
                    backgroundColor="#90C15B" />
                  </div>
              </div>
          </form>
        </div>
      </Card>
      </div>

    );
  }
});

export default editProfileContainer;
