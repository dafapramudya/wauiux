import {createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from './rootReducer';
import promiseMiddleware from 'redux-promise-middleware';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const store = createStore(  
    reducers,
    applyMiddleware(
        middleware,
        logger,
        promiseMiddleware()
    )
);

export default store;