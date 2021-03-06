import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:
import landingContainer from './containers/landing.js';
import postsFeed from './containers/feed';
import newPostForm from './containers/newPost'
import editProfileContainer from './containers/editprofile.js';
import Nav from './components/Nav.js';
import menu from './containers/menu';
import Nav1 from './components/Navlogin.js';
import ProfileForm from './components/UserProfileForm.js';
import profileContainer from './containers/profile.js'
import editParkingContainer from './containers/editparking.js'
import Validation from './components/parking.js'
import registry from './containers/registry.js'


//import components:


var AppRouter = React.createClass({

  render: function(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={landingContainer} />
          <Route path="/feed" component={postsFeed} />
          <Route path="/newPost" component={newPostForm} />
          <Route path="/profile" component={profileContainer} />
          <Route path="/myProfile" component={editProfileContainer} />
          <Route path="/parking" component={editParkingContainer} />
          <Route path="/validation" component={Validation} />
          <Route path="/menu" component={menu} />
          <Route path="/registry" component={registry} />
        </Router>
    </div>
    )
  }
})

export default AppRouter;
