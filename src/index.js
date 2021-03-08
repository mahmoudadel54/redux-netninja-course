import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//root reducer
import rootReducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';

//bootstrap & Fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";

//the best place to put the redux (central store) is in index.js

  //create a store and pass all reducers to it (for more than reducer, we should create a folder for them)
  const store = createStore(rootReducer);      //once store is created, reducer will fire auomatically even if there is no dispatch


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
