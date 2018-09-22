import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import AppView from './pages/AppView'

import reducers from './reducers';
import NetworkSaga from './sagas/NetworkSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(promise), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(NetworkSaga);

ReactDOM.render(
  <Provider store={store}>
        <AppView/>
  </Provider>
  , document.querySelector('.container'));
