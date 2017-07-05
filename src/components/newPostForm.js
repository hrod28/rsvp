import React from 'react';
import { Router, browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import request from 'superagent';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
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
  }
};

var DATABASE_URL = 'https://weddingdb.herokuapp.com';

var CreatePost = React.createClass({
  getInitialState () {
    return({
      title: '',
      description: '',
      zipCode: '',
      budget: '',
      skills: []
    })
  },

  // ONCHANGE HANDLERS -----------------------

  titleHandleChange(event) {
    this.setState({title: event.target.value})
    // console.log(this.state);
  },

  descriptionHandleChange(event) {
    this.setState({description: event.target.value})
    console.log(this.state);
  },

  zipCodeHandleChange(event) {
    this.setState({zipCode: event.target.value})
    console.log(this.state);
  },

  budgetHandleChange(event) {
    this.setState({budget: event.target.value})
    console.log(this.state);
  },

  skillsHandleChange(event) {
    console.log(this.state.skills);
    let skillNum = event.target.value;
    if (this.state.skills.includes(event.target.value)) {
      console.log('state already has this number');
      let newArr = this.state.skills.slice();
      let numIndex = newArr.indexOf(skillNum);
      newArr.splice(numIndex, 1);
      this.setState({
        skills: newArr
      });
      console.log(this.state);
    } else {
      // console.log("before concat", this.state.skills);
      let changing = this.state.skills.concat([skillNum]);
      this.setState({skills: changing});
      // console.log("after concat", this.state.skills);
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.skills);
    // alert('A form was submitted: ' + this.state.value);
    // console.log(this.state.value);

    var postObjToSend = {
      title: this.state.title,
      description:this.state.description,
      location: this.state.zipCode,
      budget: this.state.budget,
      skills: this.state.skills
    }

    request
    .post(DATABASE_URL+`/api/posts/2`)
    .send(postObjToSend)
    .end((err,res)=>{
      if (err || !res.ok) {
        console.log('ERROR: ', err);
      } else {
        console.log(res.body);
        browserHistory.push('/feed');
      }
    })
  },

  render: function () {


    return (
      <div>
      <Card className="uiCardMenu">
          <div className="newPostContainer1"><p>Please Join us for an afternoon in the sun as we celebrate our wedding on horsetooth lake!</p></div>
      </Card>
      <Card className="uiCardMenu2">

          <div><p>The celebration begins at 2pm at the South Bay Pavilion.  We encourage guests to come casually dressed and ready for some fun on the land and water!! (i.e. towels, swim clothes, flotation device) We will have jet skis and stand-up paddleboards available for use throughout the afternoon.  Per park regulations, it is required for all guests 14 yrs old and younger to wear life vests.  We will provide a limited number of life vests, but we do encourage you to bring your own if possible.  </p></div>

      </Card>
      <Card className="uiCardMenu3">

          <div><p>Dogs are WELCOME! </p></div>
          <div><p>(but must stay on leash per park regulations) </p></div>
      </Card>
      <Card className="uiCardMenu4">

          <div><p>Parking at Horsetooth Reservoir is $7.00 per vehicle.  We will provide a parking pass free of charge, just click on the "parking pass" button and follow the intsructions.</p></div>
      </Card>

      <Card className="uiCardMenu1">

          <div><p>To find out specific information about the event and to RSVP, please click on a button below</p></div>
      </Card>

      <Card className="uiCardMenu5">



        <div className="newPostContainerbuttons">
        <RaisedButton
        className="navButton"
        href="/menu"
        label="menu"
        backgroundColor="#90C15B"
        />
        </div>

        <div className="newPostContainerbuttons">

        <RaisedButton
        className="navButton"
        href="/feed"
        label="Schedule"
        backgroundColor="#90C15B"
        />
        </div>

        <div className="newPostContainerbuttons">
        <RaisedButton
        className="navButton"
        href="/myProfile"
        label="RSVP Here"
        backgroundColor="#90C15B"
        />
        </div>

        <div className="newPostContainerbuttons">
        <RaisedButton
        className="navButton"
        href="/parking"
        label="Parking Pass"
        backgroundColor="#90C15B"
        />
        </div>

        <div className="newPostContainerbuttons">
        <RaisedButton
        className="navButton"
        href="/"
        label="Landing Page"
        backgroundColor="#90C15B"
        />
        </div>

        <div className="newPostContainerbuttons">
        <RaisedButton
        className="navButton"
        href="/registry"
        label="Registry"
        backgroundColor="#90C15B"
        />
        </div>




      </Card>
      <footer>
        <p className="foot">
          Official RSVP and Information Website for Matthew Mikio Ellison and Heidi Rodriguez' wedding   2017
        </p>
      </footer>
      </div>
    )
  }
});

export default CreatePost
