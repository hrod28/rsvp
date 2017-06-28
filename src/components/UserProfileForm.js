import React from 'react';
import { Router, browserHistory, location } from 'react-router'
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

const ProfileForm = React.createClass({

  getInitialState(){
    console.log(this.props, "props at initial state");
    return ({
      skills:[],
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
    console.log('handleSubmit');
    e.preventDefault();

    var formData = {...this.state};

    this.props.onProfileSubmit(formData);
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
                  id="firstname" floatingLabelText="First Name" onChange={this.setValue.bind(this, 'firstName')} value={this.state.firstName}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
              <div className="col-sm-offset-2 col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="text"
                  id="lastname" floatingLabelText="Last Name" onChange={this.setValue.bind(this, 'lastName')} value={this.state.lastName}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}  />
              </div>
            </div>

            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-lg-offset-1">
                <TextField className="profileTextArea" type="number" floatingLabelText="Phone Number" value={this.state.phoneNumber} onChange={this.setValue.bind(this, 'phoneNumber')}
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
                  <TextField className="profileTextArea" type="number" floatingLabelText="Number of Guests (0, 1, 2)" value={this.state.zipCode} onChange={this.setValue.bind(this, 'zipCode')}
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
                    <TextField className="profileTextArea" type="text" floatingLabelText="Questions" value={this.state.profileUrl} onChange={this.setValue.bind(this, 'profileUrl')}
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                  </div>
                  <div className="col-md-5 col-md-offset-1 col-lg-offset-1">
                    <TextField className="profileTextArea" type="text" floatingLabelText="Comments" value={this.state.website} onChange={this.setValue.bind(this, 'website')}
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

    );
  }
});

export default ProfileForm;
