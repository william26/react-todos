import React, {Component} from 'react';
import {connect} from 'react-redux';


import TodoItem from 'components/TodoItem';

export class TodoList extends Component {
  state = {
    todoName: ''
  };
  setLocalTodo(name) {
    this.setState({
      todoName: name
    });
  }
  addTodo() {
    if (this.state.todoName !== '') {
      this.props.dispatch({
        type: 'ADD_TODO',
        payload: this.state.todoName
      });
      this.setState({
        todoName: ''
      });
    }
  }
  renderTodos() {
    return this.props.todolist.map((todo, index) =>
      <TodoItem key={index} content={todo} />
    );
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderTodos()}
        </ul>
        <form action="javascript:void(0);">
          <input
           onChange={e => this.setLocalTodo(e.target.value)}
           type="text"
           placeholder="Enter a todo name"
           value={this.state.todoName}/>
          <button
           onClick={e => this.addTodo()}
           type="submit"
           disabled={this.state.todoName === ''}>
            Add todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => {
  return {
    todolist: state.todos
  };
})(TodoList);