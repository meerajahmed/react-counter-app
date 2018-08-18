import {createStore, applyMiddleware} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

const store = createStore(reducer, devToolsEnhancer(), applyMiddleware(saga));

saga.run(rootSaga);

export default store;