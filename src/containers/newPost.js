import React from 'react';
import NewPost from '../components/newPostForm';
import {browserHistory} from 'react-router';
import Nav from '../components/Nav';

const newPost = React.createClass({
  getInitialState() {
    return ({
      username: '',
      password: ''
    })
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
      <div className="postsContainer">
        <NewPost></NewPost>
      </div>
      
    </div>
    )
  }
});

export default newPost;
