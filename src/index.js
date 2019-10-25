import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import './index.scss';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App />
        <Route path="/categories" />
        <Route path="/category" />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

