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
import profileContainer from './containers/profile.js'

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
          <Route path="/menu" component={menu} />
        </Router>
    </div>
    )
  }
})

export default AppRouter;
