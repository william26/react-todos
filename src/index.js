import React, {Component} from 'react';
import reactDom from 'react-dom';

import TodoList from 'components/TodoList';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import todoReducer from 'business/todos/todo-reducer';


const rootReducer = combineReducers({
  todos: todoReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


reactDom.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);