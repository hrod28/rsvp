




import React, { Component } from 'react';
import { Router, browserHistory, location } from 'react-router';
import axios from 'axios';
import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
// import CardActions from 'material-ui/Card/CardActions';
// import CardHeader from 'material-ui/Card/CardHeader';
// import CardMedia from 'material-ui/Card/CardMedia';
// import CardTitle from 'material-ui/Card/CardTitle';
// import CardText from 'material-ui/Card/CardText';
// import Avatar from 'material-ui/Avatar/Avatar';
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
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const registry = React.createClass({

  getInitialState(){

    return ({
      name: '',
      contact: '',
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

  disableFields(){
    var location = browserHistory.getCurrentLocation();
    console.log(location, this.state);
    if (location === "/myProfile"){
      this.setState({disabled:true});
      console.log(location, this.state);
    }
  },

  handleSubmit(e) {

  axios.post('http://localhost:3001/api/parking', {
    name: this.state.name,
    contact:this.state.contact,
    comments: this.state.comments

  })
    .then((response) => {

      // if (err || !res.ok) {
      //   console.log('ERROR: ', err);
      // } else {
      console.log('this');
        console.log(response);
    });
    // this.props.navigator.push({name: 'VoteValidation'});

  },


  setValue: function (field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
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

  render: function(){



    return(

      <div>
        <Nav />

      <Card className="uiCard">
        <div className="profileContainer">
          <h3>When embarking on a new journey in life, it is always nice to look back and remember where you've been.  I can say without a doubt that I would not be where I am today if it were not for the kindess of others --friends, family, and strangers alike.    </h3>
          <h3>We want to continue the trend to pay it forward.  We don't really need a blender, but we do need more kindness, compassion, and love in our world.  So instead of registering at any retail store, we wanted to challenge you to "Pay it Forward" in honor of our wedding celebration.</h3>



                </div>
        <div className="profileContainer">
          <h3>What do we mean by "Pay it Forward"?  <br />It's pretty simple:  Do something kind for someone else.</h3>





                </div>
                <br></br>
                <br></br>




      </Card>
      <Card className="uiCard">
        <div className="profileContainer">
          <h3>Donate time or money to a local non-profit.  Here are a few local organizations that we are passionate about:</h3>

          <h3><br/>  <li><a href="http://thefamilycenterfc.org/?page_id=4">La Familia/ The Family Center</a>, an early childhood education center with a goal of strengthening and stabilizing working families</li>   <br/><li><a href="https://www.facebook.com/ColoRADogs/">ColoRADogs,</a> a local non-profit committed to protecting bully breeds and abolishing breed specific legislation</li>    <br/><li><a href="http://summitstonehealth.org/larimer-county-mental-health/how-you-can-help/donate-now/">SummitStone Health Partners,</a> a private, not-for-profit, integrated care provider of behavioral (mental health and addiction) services</li><br /><li><a href="http://bikefortcollins.org/vision-and-mission">Bike Fort Collins</a>, creating an advocacy platform and bike culture that is inclusive of all bike riders, independent of ability or background
</li> </h3>
        </div>
        <br></br>
        <br></br>
      </Card>
      <Card className="uiCard">
        <div className="profileContainer">
        <h2>Compassion doesn't have to be Complicated...</h2>
        <h3><li>Spend time with someone who is all alone.</li></h3>
          <h3><li>Volunteer to help clean up litter at your local park or waterway.</li></h3>
          <h3><li>Make some art to brighten someone's day.</li></h3>
          <h3><li>Help your elderly neighbor with their lawn and yard work.</li></h3>
          <h3><li>Donate awesome school supplies to children who need it.</li></h3>
          <h3><li>Cook dinner for someone who is sick.</li></h3>
          <h3><li>Leave an encouraging note for a stranger.</li></h3>
        </div>
        <br></br>
        <br></br>
      </Card>
      <Card className="uiCard">
        <div className="profileContainer">
          <h3>Thank You in advance for your participation in this experiment.  Let's see how much positivity we can send out into the world!</h3>
        </div>
        <br></br>
        <br></br>
      </Card>

      <footer>
        <p className="foot">
          Official RSVP and Information Website for Matthew Mikio Ellison and Heidi Rodriguez' wedding   2017
        </p>
      </footer>
      </div>

    );
  }
});

export default registry;
