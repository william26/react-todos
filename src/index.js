import React, {Component} from 'react';
import reactDom from 'react-dom';

import TodoList from 'components/TodoList';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState ={
  todos: ['My todo', 'Other todo']
};

const store = createStore((state = initialState, {type, payload}) => {
  switch(type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          payload
        ]
      }
    default:
      return state;
  }
});


reactDom.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);