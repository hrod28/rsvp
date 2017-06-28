import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import store from './store';
import './index.css';
import Router from './router.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
  //<Provider store={store}>
    <MuiThemeProvider>
      <Router />
    </MuiThemeProvider>
  //</Provider>
  ,
  document.getElementById('root')
);
