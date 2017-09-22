import React, {Component} from 'react';

import TodoItem from 'components/TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        <TodoItem content="Todo 1" />
        <TodoItem content="Todo 2" />
        <TodoItem content="Todo 3" />
        <TodoItem content="Todo 4" />
      </ul>
    );
  }
}