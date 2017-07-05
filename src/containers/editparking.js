
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

const editParkingContainer = React.createClass({

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



  handleSubmit1(e) {

  axios.post('https://weddingdb.herokuapp.com/api/parking', {
    name: this.state.name,
    contact:this.state.contact,
    comments: this.state.comments

  })
    .then((response) => {

      // if (err || !res.ok) {
      //   console.log('ERROR: ', err);
      // } else {
      console.log('this');
        // console.log(response);
    });
    browserHistory.push('/newPost');

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
          <h3>Please fill out this form to receive your free parking pass for the event.</h3>
          <form onSubmit={this.handleSubmit1}>

            <div className="row">
              <div className="col-md-5 col-md-offset-1 col-lg-offset-1">

              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">

              </div>
            </div>

            <div className="row">
              <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
                <TextField className="profileTextArea" type="text"
                  id="firstname" floatingLabelText="Name" onChange={this.setValue.bind(this, 'name')} value={this.state.name}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text"
                  id="lastname" floatingLabelText="Contact Info (email or phone)" onChange={this.setValue.bind(this, 'contact')} value={this.state.contact}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  />
              </div>
            </div>

            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text" floatingLabelText="Comments" value={this.state.comments} onChange={this.setValue.bind(this, 'comments')}
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
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


export default editParkingContainer;




//
// 'use strict';
//
// import React, { Component } from 'react';
// import { Router, browserHistory, location } from 'react-router';
// import axios from 'axios';
// //import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
// import SelectField from 'material-ui/SelectField';
// import TextField from 'material-ui/TextField';
// import Button from 'material-ui/RaisedButton';
// import Card from 'material-ui/Card';
// // import Checkbox from 'material-ui/Checkbox';
// // import CardActions from 'material-ui/Card/CardActions';
// // import CardHeader from 'material-ui/Card/CardHeader';
// // import CardMedia from 'material-ui/Card/CardMedia';
// // import CardTitle from 'material-ui/Card/CardTitle';
// // import CardText from 'material-ui/Card/CardText';
// // import Avatar from 'material-ui/Avatar/Avatar';
// import {orange500, blue500} from 'material-ui/styles/colors';
// import Nav from '../components/Nav.js';
// import Nav1 from '../components/Navlogin.js';
//
// const styles = {
//   errorStyle: {
//     color: "#90C15B",
//   },
//   underlineStyle: {
//     borderColor: "#90C15B",
//   },
//   floatingLabelStyle: {
//     color: "#90C15B",
//   },
//   floatingLabelFocusStyle: {
//     color: "#90C15B",
//   },
//   block: {
//     maxWidth: 250,
//   },
//   checkbox: {
//     marginBottom: 16,
//   },
// };
//
// const editParkingContainer = React.createClass({
//
//   getInitialState(){
//
//     return ({
//       name: '',
//       contact: '',
//       comments: '',
//
//
//     });
//   },
//
//   componentDidMount(){
//     console.log(this.props.disabled);
//   },
//
//   componentWillReceiveProps(nextProps) {
//     this.setState({...nextProps.profileData});
//     this.setState(nextProps.disabled);
//   },
//
//   disableFields(){
//     // var location = browserHistory.getCurrentLocation();
//     // console.log(location, this.state);
//     // if (location === "/myProfile"){
//     //   this.setState({disabled:true});
//     //   console.log(location, this.state);
//     // }
//   },
//
//   handleSubmit1(e) {
//
//   axios.post('https://weddingdb.herokuapp.com/api/parking', {
//     name: this.state.name,
//     contact:this.state.contact,
//     comments: this.state.comments,
//
//
//   })
//     .then((response) => {
//
//       // if (err || !res.ok) {
//       //   console.log('ERROR: ', err);
//       // } else {
//       console.log('this');
//         console.log(response);
//     });
//     // this.props.navigator.push({name: 'VoteValidation'});
//
//   },
//
//
//   setValue: function (field, event) {
//     var object = {};
//     object[field] = event.target.value;
//     this.setState(object);
//   },
//   skillsHandleChange(event) {
//     // console.log(this.state.skills);
//     // let skillNum = event.target.value;
//     // if (this.state.skills.includes(event.target.value)) {
//     //   console.log('state already has this number');
//     //   let newArr = this.state.skills.slice();
//     //   let numIndex = newArr.indexOf(skillNum);
//     //   newArr.splice(numIndex, 1);
//     //   this.setState({
//     //     skills: newArr
//     //   });
//     //   console.log(this.state);
//     // } else {
//     //   // console.log("before concat", this.state.skills);
//     //   let changing = this.state.skills.concat([skillNum]);
//     //   this.setState({skills: changing});
//     //   // console.log("after concat", this.state.skills);
//     // }
//   },
//
//   render: function(){
//
//
//
//     return(
//
//       <div>
//     <Nav />
//
//       <Card className="uiCard">
//         <div className="profileContainer">
//           <h3>Please fill out this form to receive your free parking pass for the event.</h3>
//           <form onSubmit={this.handleSubmit1}>
//
//             <div className="row">
//               <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
//
//               </div>
//               <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
//
//               </div>
//             </div>
//
//             <div className="row">
//               <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
//                 <TextField className="profileTextArea" type="text"
//                   id="firstname" floatingLabelText="Name" onChange={this.setValue.bind(this, 'name')} value={this.state.name}
//                   underlineFocusStyle={styles.underlineStyle}
//                   floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
//               </div>
//               <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
//                 <TextField className="profileTextArea" type="text"
//                   id="lastname" floatingLabelText="Contact Info (email or phone)" onChange={this.setValue.bind(this, 'contact')} value={this.state.contact}
//                   underlineFocusStyle={styles.underlineStyle}
//                   floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  />
//               </div>
//             </div>
//
//             <div className="row">
//               <div className="col-md-offset-1 col-md-5 col-lg-offset-1">
//                 <TextField className="profileTextArea" type="text" floatingLabelText="Comments" value={this.state.comments} onChange={this.setValue.bind(this, 'comments')}
//                 underlineFocusStyle={styles.underlineStyle}
//                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
//               </div>
//
//
//                 </div>
//                 <br></br>
//                 <br></br>
//
//                 <div className="row">
//                   <div className="col-sm-12 profileSubmitButton">
//                     <Button type="submit" label="Submit"
//                     className="buttonBackground"
//                     backgroundColor="#90C15B" />
//                   </div>
//               </div>
//           </form>
//         </div>
//       </Card>
//       </div>
//
//     );
//   }
// });

//
//
// export default editParkingContainer;
