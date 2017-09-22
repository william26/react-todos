import React, {Component} from 'react';

export default class TodoItem extends Component {
  remove() {
    if (typeof this.props.onRemove === 'function') {
      this.props.onRemove();
    }
  }
  render() {
    return (
      <li>
        {this.props.content}
        &nbsp;
        <a href="javascript:void(0)" onClick={() => this.remove()}>Remove todo</a>
      </li>
    );
  }
}
