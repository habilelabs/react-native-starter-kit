import { combineReducers } from 'redux';

import loaderReducer from './modules/loader/reducers';

/**
 * Root reducer, we will combine all reducers.
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
    loader: loaderReducer
});

export default rootReducers;
