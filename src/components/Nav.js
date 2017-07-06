/* eslint-disable */
'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


const Nav = React.createClass({
  render: function(){
    var buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white'
    };
    return(
      <nav>
        <div className="navWrapper">
          <img className="logo" src="img/cleoSunflower.jpg"/>
          <img className="logo" src="img/cleoSunflower.jpg"/>
          <img className="logo" src="img/cleoSunflower.jpg"/>
          <img className="logo" src="img/cleoSunflower.jpg"/>

          <RaisedButton
          className="navButton"
             href="/newPost"
             label="Home"
             backgroundColor="#90C15B"
           />
             <img className="logo" src="img/cleoSunflower.jpg"/>
             <img className="logo" src="img/cleoSunflower.jpg"/>
             <img className="logo" src="img/cleoSunflower.jpg"/>
             <img className="logo" src="img/cleoSunflower.jpg"/>
       </div>
     </nav>


   );
  }


});

export default Nav;
