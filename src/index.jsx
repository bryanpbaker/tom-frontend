import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import '../style/main.scss';

import App from './components/app.component';
import UserAuth from './components/user-auth.component';
import CreateUser from './components/create-user.component';
import Dashboard from './components/dashboard.component';

import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <Router history={browserHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={Dashboard} />
          </Route>
          <Route path="/login" component={UserAuth} />
          <Route path="/sign-up" component={CreateUser} />
      </Router>
    </Provider>
, document.getElementById('app'));
