import React, {Component} from 'react';
import reactDom from 'react-dom';

import TodoList from 'components/TodoList';

reactDom.render(
  <div>
  <TodoList />
  </div>,
  document.getElementById('root')
);