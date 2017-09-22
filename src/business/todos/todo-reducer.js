import {createReducer} from 'redux-act';

import {
  addTodo,
  removeTodo
} from './todo-actions';

const initialState = {
  list: {
    rlkjerg: 'My todo',
    sdfdf: 'Other todo'
  }
};

export default createReducer({
  [addTodo]: (state, actionName) => ({
    ...state,
    list: {
      ...state.list,
      [Math.round(Math.random() * 10000000)]: actionName
    }
  }),
  [removeTodo]: (state, key) => {
    const list = {
      ...state.list
    };
    delete list[key];
    return {
      ...state,
      list
    }
  }
}, initialState);