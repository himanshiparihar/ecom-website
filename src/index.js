import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/store';

import './index.css';
import App from './App';
import { Router } from 'react-router-dom';

const browserHistory = createBrowserHistory({ forceRefresh:true, 'basename': '/' });
export const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

