import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

injectTapEventPlugin();
const store = configureStore(applyMiddleware(thunk));

render(
    <Provider store = {store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);


