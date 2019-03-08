import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Wash the dishes',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Do the laundry',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Take out the trash',
    id: 1528817077288,
    completed: false
  },
  {
    task: 'Feed the cat',
    id: 1528817077289,
    completed: false
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
      todo: ''
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addHandler = event => {
    event.preventDefault();
    this.setState( prevState => {
      return {todos: [...prevState.todos, {
        task: prevState.todo,
        id: Date.now(),
        completed: true
      }
    ],
    todo: ''
    }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Todo List: MVP</h1>
        </div>
        <TodoList todos={this.state.todos}/>
        <TodoForm todo={this.state.todo} inputHandler={this.inputHandler} addHandler={this.addHandler}/>
      </div>
    );
  }
}

export default App;
