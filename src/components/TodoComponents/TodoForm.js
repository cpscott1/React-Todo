import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>
        <input placeholder="new task" value={this.state.todo} name="todo" onChange={this.inputHandler}/>
        <button>Add Todo</button>
        <button>Clear completed</button>
      </form>
    )
  }
}
