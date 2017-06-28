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
      </div>
    )
  }
});


export default feed;
