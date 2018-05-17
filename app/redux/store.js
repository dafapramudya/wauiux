import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducers from '../reducers/rootReducers';

const logger = createLogger({

})

export default store = createStore(
    rootReducers,
    applyMiddleware(
        logger,
        promiseMiddleware()
    )
)