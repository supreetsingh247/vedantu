import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SavedItemsContainer from './components/SavedItems/SavedItemsContainer';
import DrawPageContainer from './components/DrawPage/DrawPageContainer';
import InitializationContainer from './components/Initialization/InitializationContainer';

function requireAuth(nextState, replace) {
  // if (1) {
  //   replace({
  //     pathname: 'about',
  //     query: {
  //       redirect: window.location.pathname,
  //     },
  //   });
  // }
}

export default (
  <Route path="/" component={App}>
      <IndexRoute component={InitializationContainer}/>
      <Route path="/saved-items" component={SavedItemsContainer}/>
      <Route path="/draw-page" component={DrawPageContainer}/>
      <Route path="/initialization" component={InitializationContainer}/>
  </Route>
);