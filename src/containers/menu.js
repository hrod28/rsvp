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

import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';

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

var menu = React.createClass({
  getInitialState () {
    return({
      title: '',
      description: '',
      zipCode: '',
      budget: '',
      skills: []
    })
  },

  // // ONCHANGE HANDLERS -----------------------
  //
  // titleHandleChange(event) {
  //   this.setState({title: event.target.value})
  //   // console.log(this.state);
  // },
  //
  // descriptionHandleChange(event) {
  //   this.setState({description: event.target.value})
  //   console.log(this.state);
  // },
  //
  // zipCodeHandleChange(event) {
  //   this.setState({zipCode: event.target.value})
  //   console.log(this.state);
  // },
  //
  // budgetHandleChange(event) {
  //   this.setState({budget: event.target.value})
  //   console.log(this.state);
  // },
  //
  // skillsHandleChange(event) {
  //   console.log(this.state.skills);
  //   let skillNum = event.target.value;
  //   if (this.state.skills.includes(event.target.value)) {
  //     console.log('state already has this number');
  //     let newArr = this.state.skills.slice();
  //     let numIndex = newArr.indexOf(skillNum);
  //     newArr.splice(numIndex, 1);
  //     this.setState({
  //       skills: newArr
  //     });
  //     console.log(this.state);
  //   } else {
  //     // console.log("before concat", this.state.skills);
  //     let changing = this.state.skills.concat([skillNum]);
  //     this.setState({skills: changing});
  //     // console.log("after concat", this.state.skills);
  //   }
  // },
  //
  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.skills);
  //   // alert('A form was submitted: ' + this.state.value);
  //   // console.log(this.state.value);
  //
  //   var postObjToSend = {
  //     title: this.state.title,
  //     description:this.state.description,
  //     location: this.state.zipCode,
  //     budget: this.state.budget,
  //     skills: this.state.skills
  //   }
  //
  //   request
  //   .post(DATABASE_URL+`/api/posts/2`)
  //   .send(postObjToSend)
  //   .end((err,res)=>{
  //     if (err || !res.ok) {
  //       console.log('ERROR: ', err);
  //     } else {
  //       console.log(res.body);
  //       browserHistory.push('/feed');
  //     }
  //   })
  // },

  render: function(){
      var login = (true) ?
      <LoginForm

      /> : null;



        const isLogged = (sessionStorage.id) ?
          <Nav
            handleLogoutSubmit={this.handleLogoutSubmit} />
            :
          <Nav1
            handleLoginSubmit={this.handleLoginSubmit}/>



    return(
      <div>
        <div>
        {isLogged}
        {login}
        </div>

      <Card className="uiCard1">
        <div className="newPostContainer1"><p>Today's Menu:</p></div>
        <div className="newPostContainer1">

          <p>bbq beef brisket</p>

        </div>
        <div className="newPostContainer1">

          <p>bbq ribs</p>

         </div>
         <div className="newPostContainer1">

           <p>jalepeno cornbread</p>

         </div>
         <div className="newPostContainer1">

         <p>coleslaw</p>

         </div>
         <div className="newPostContainer1">

         <p>potato wedges</p>

         </div>
         <div className="newPostContainer1">

         <p>corn succatash</p>

         </div>
         <div className="newPostContainer1">

         <p>baked beans</p>

         </div>
         <div className="newPostContainer1">

         <p>lemonade</p>

         </div>
         <div className="newPostContainer1">

         <p>iced tea</p>

         </div>
         <div className="newPostContainer1">

         <p>wedding cake:</p>
         <p>cheesecake with various toppings</p>

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

export default menu
