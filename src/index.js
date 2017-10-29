import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
