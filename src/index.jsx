import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';

import '../style/main.scss';

import App from './components/app.component';
import LoginPage from './components/login-page.component';
import CreateUser from './components/create-user.component';

import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBgnPDqwIOFS0kzBn_w9KuTtIR4d8Ul0As',
  authDomain: 'tom-app-bddda.firebaseapp.com',
  databaseURL: 'https://tom-app-bddda.firebaseio.com',
  storageBucket: 'tom-app-bddda.appspot.com',
  messagingSenderId: '213564303632'
};

firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <Router history={browserHistory}>
          <Route path="/" component={App} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={CreateUser} />
      </Router>
    </Provider>
, document.getElementById('app'));
