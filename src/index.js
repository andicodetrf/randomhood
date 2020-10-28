import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Card from './Card';
// import CardList from './CardList.js';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//because your export in robots.js is not default export (means not single altho it is only exp 1 thing) you need to destructure it using {robots, cats, etc}. diff from Card which export default
// import { robots } from './robots';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
