import update from 'react/lib/update';
import {
	USERS_LOAD,
	USERS_CREATE,
	USERS_UPDATE,
	USERS_DELETE
} from '../actions/user';

const initialState = {
	list: []
};

const handlers = {
	[USERS_LOAD]: (state, action) => {
		return {...state,
			list: action.users
		};
	},

	[USERS_DELETE]: (state, action) => {
		let index = action.index;
		let list = state.list;
		return {...state,
			list: [
				...list.slice(0, index),
				...list.slice(index + 1)
			]
		};
	},

	[USERS_CREATE]: (state, action) => {
		let user = action.user;
		let list = state.list;
		return {...state,
			list: [...list, user]
		};
	},

	[USERS_UPDATE]: (state, action) => {
		let index = action.index;
		let user = action.user;
		let list = state.list;
		return {...state,
			list: [
				...list.slice(0, index),
				user,
				...list.slice(index + 1)
			]
		};
	}
};

export default function user(state = initialState, action) {
	let handler = handlers[action.type];
	if (!handler) return state;
	return {...state,
		...handler(state, action)
	};
};
