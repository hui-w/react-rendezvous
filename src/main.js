import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux';
import App from './containers/App';
import MiscView from './containers/MiscView';
import UserView from './containers/UserView';
import * as reducers from './reducers';
import './styles/main.css';

let views = [
	<MiscView />,
	<UserView />
];

const reducer = combineReducers({
	...reducers
})
const store = createStore(
	reducer
);

ReactDOM.render(
	<Provider store={store}>
		<App views={views} onShowStore={()=>console.log(store.getState())} />
	</Provider>,
	document.getElementById('root')
)