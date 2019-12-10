import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(promiseMiddleware));

//import {createStore, combineReducers} from 'redux';
//import reducer from './reducer';
//import postReducer from './postReducer';

//const rootReducer = combineReducers({
//  reducer,
//  postReducer
//});

//export default createStore(rootReducer);