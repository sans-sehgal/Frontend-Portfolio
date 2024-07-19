// import { createStore } from "redux";
import rootReducer from "./reducers";
import {legacy_createStore, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;