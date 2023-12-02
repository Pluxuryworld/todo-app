import {createStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import {compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = composeFunc(applyMiddleware(thunk));

const initialState = {};

const store = createStore(rootReducer(), initialState, composeEnhancers);

export default store;