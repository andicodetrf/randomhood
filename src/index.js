import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

//reduxthunk midware waits & sees if any actions returns a function instead of objects

//default
//const store = createStore(rootReducer)

const logger = createLogger();

//combinereducer is gonna combine all reducers into root reducer
const rootReducer = combineReducers({ searchRobots, requestRobots })


//for now/this exercise, use only 1 function to create store
// const store = createStore(searchRobots, applyMiddleware(logger))

// //this is ordered. its gonna go through the thunkmiddleware then to logger middleware
// const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger))

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))



//pass down store as prop via Provider where everywhere can access it rather than keep passing down from component to subcomponents. you'll need to use connect to provide the connection between this and all components that are interested in this store. connect in those components helps you avoid things like using store.subcribe and connect simplifies the process
ReactDOM.render(
  // <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
