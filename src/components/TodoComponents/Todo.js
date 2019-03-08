import React, { Component } from 'react';

class Todo extends Component {
  render() {
    console.log(this.props.todo)
    return (
      <div>
        <h2>TodoList</h2>
      </div>
    );
  }
}

export default Todo;
