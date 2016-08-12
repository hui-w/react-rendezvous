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
  [USERS_LOAD]: (state, action) => ({
    ...state,
    list: action.users
  }),

  [USERS_DELETE]: (state, action) => {
    const index = action.index;
    const list = state.list;
    return {
      ...state,
      list: [
        ...list.slice(0, index),
        ...list.slice(index + 1)
      ]
    };
  },

  [USERS_CREATE]: (state, action) => {
    const item = action.user;
    const list = state.list;
    return {
      ...state,
      list: [...list, item]
    };
  },

  [USERS_UPDATE]: (state, action) => {
    const index = action.index;
    const item = action.user;
    const list = state.list;
    return {
      ...state,
      list: [
        ...list.slice(0, index),
        item,
        ...list.slice(index + 1)
      ]
    };
  }
};

export default function user(state = initialState, action) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return {
    ...state,
    ...handler(state, action)
  };
}
