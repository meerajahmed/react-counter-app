import {createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import reducer from '../reducers';

export const defaultState = 0;

export default createStore(reducer, defaultState, devToolsEnhancer());