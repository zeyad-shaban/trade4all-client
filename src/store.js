import { createStore, applyMiddleware, compose } from 'redux';
import thunkMid from 'redux-thunk';

import rootReducer from './reducers';

export default createStore(rootReducer, compose(
    applyMiddleware(thunkMid),
    window.__REDUX_DEVTOOLS_EXTENSION__() || null,
));