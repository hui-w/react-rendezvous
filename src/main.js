import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import App from './containers/App';
import HomeView from './components/HomeView';
import MiscView from './containers/MiscView';
import UserView from './containers/UserView';
import TodoList from './containers/TodoList';
import * as reducers from './reducers';
import './styles/main.css';

const reducer = combineReducers({
  ...reducers
});

const store = createStore(
  reducer
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeView} />
        <Route path="/users" component={UserView}>
          <Route path=":index" component={UserView} />
        </Route>
        <Route path="/misc" component={MiscView} />
        <Route path="/todo" component={TodoList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <Provider store={store}>
    <App views={views} onShowStore={() => console.log(store.getState())} />
  </Provider>,
  document.getElementById('root')
);
*/
