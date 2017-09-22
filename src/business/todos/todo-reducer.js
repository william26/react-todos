import {createReducer} from 'redux-act';

import {
  addTodo
} from './todo-actions';

const initialState = {
  list: ['My todo', 'Other todo']
};

export default createReducer({
  [addTodo]: (state, payload) => ({
    ...state,
    list: [
      ...state.list,
      payload
    ]
  })
}, initialState);