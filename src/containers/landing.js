/* eslint-disable */
'use strict';
import React from 'react';
import request from 'superagent';
import LoginForm from '../components/Login.js';
import Nav from '../components/Nav.js';
import Nav1 from '../components/Navlogin.js';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Carousel from 'react-bootstrap/lib/Carousel';

var DATABASE_URL = 'https://weddingdb.herokuapp.com';

var landingContainer = React.createClass({

    getInitialState(){
      return ({
        username: '',
        password: ''
      });
    },

    componentDidMount(){
      console.log(this.state);
    },

    handleUsername(event){
      console.log('username change')
      this.setState({username:event.target.value})
    },
    handlePassword(event){
      this.setState({password:event.target.value})
    },

    handleLogoutSubmit(event){
      //alert('hi');
      event.preventDefault();
      sessionStorage.removeItem('id');
      browserHistory.push('/');
    },

    handleLoginSubmit(event){
      event.preventDefault();
      request
      .get(DATABASE_URL + '/api/rsvp/' + this.state.rsvp)
        .end(function(err, res){
          if(err){
            console.log('error getting username', err);
          }
          else{
          console.log(res)
          sessionStorage.setItem('id', res.body.id);
          browserHistory.push('/feed');

          }
      });
    },



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
      {isLogged}
      {login}
        <div className="postsContainer">
          </div>
          <Carousel>
          <Carousel.Item>
          <img width={700} height={300} alt="700x300" src="img/teepee.jpg"/>
          <Carousel.Caption>
          <h1 className="landingCarouselHeader">welcome</h1>

          <h2 className="secondaryLandingCarouselParagraph">Matt and Heidi</h2>
          <h2 className="secondaryLandingCarouselParagraph">2017</h2>
          <h4 className="secondaryLandingCarouselParagraph"><a className="linkstyle" href="/newPost">enter site</a></h4>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={700} height={300} alt="700x300" src="img/googie.jpg"/>
          <Carousel.Caption>
          <h1 className="landingCarouselHeader"></h1>
          <h2 className="secondaryLandingCarouselParagraph"></h2>
          <h3 className="secondaryLandingCarouselParagraph"><a className="linkstyle" href="/newPost">enter site</a></h3>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={700} height={300} alt="700x300" src="img/googiemt.jpg"/>
          <Carousel.Caption>
          <h1 className="landingCarouselHeader"></h1>
          <h2 className="secondaryLandingCarouselParagraph"></h2>
          <h3 className="secondaryLandingCarouselParagraph"><a className="linkstyle" href="/newPost"></a></h3>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={700} height={300} alt="700x300" src="img/radBest.jpg"/>
          <Carousel.Caption>
          <h1 className="landingCarouselHeader"></h1>
          <h2 className="primaryLandingCarouselParagraph">matt and heidi</h2>
          <h2 className="primaryLandingCarouselParagraph">2017</h2>
          <h3 className="secondaryLandingCarouselParagraph"><a className="linkstyle" href="/newPost">enter site</a></h3>
          </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item>
              <img width={700} height={300} alt="700x300" src="img/googiemoab.jpg"/>
              <Carousel.Caption>
                <h1 className="landingCarouselHeader"></h1>
                <h2 className="primaryLandingCarouselParagraph">matt and heidi</h2>
                <h2 className="primaryLandingCarouselParagraph">2017</h2>
                <h3 className="secondaryLandingCarouselParagraph"><a className="linkstyle" href="/newPost">enter site</a></h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={700} height={300} alt="700x300" src="img/googiepuppy.jpg"/>
              <Carousel.Caption>
                <h1 className="landingCarouselHeader1">   </h1>
                <h2 className="secondaryLandingCarouselParagraph1">   </h2>
                <h2 className="secondaryLandingCarouselParagraph1">   </h2>
                <h3 className="secondaryLandingCarouselParagraph2"><a className="linkstyle" href="/newPost"></a></h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        <footer>
          <p className="foot">
            Official RSVP and Information Website for Matthew Mikio Ellison and Heidi Rodriguez' wedding   2017
          </p>
        </footer>
      </div>
  );
  }
});

export default landingContainer;
