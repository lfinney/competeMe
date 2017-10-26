import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import rootReducer from './reducers';
// import { createStore, applyMiddleware } from 'redux';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
