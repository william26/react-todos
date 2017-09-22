import {createAction} from 'redux-act';

export const addTodo = createAction('todos.addTodo');

export const removeTodo = createAction('todos.removeTodo');