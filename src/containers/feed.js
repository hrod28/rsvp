'use strict';

import React from 'react';
import PostsContainer from '../components/PostsContainer';
import Nav from '../components/Nav';
import {browserHistory} from 'react-router';

const feed = React.createClass({
  getInitialState() {
    return null;
  },

  handleLogoutSubmit(event){
    event.preventDefault();
    sessionStorage.removeItem('id');
    browserHistory.push('/');
  },

  render() {
    return (
      <div>
      <Nav
        handleLogoutSubmit={this.handleLogoutSubmit} />
      <PostsContainer></PostsContainer>
      <footer>
        <p className="foot">
          Official RSVP and Information Website for Matthew Mikio Ellison and Heidi Rodriguez' wedding   2017
        </p>
      </footer>
      </div>
    )
  }
});


export default feed;
