import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

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
        completed: false
      }
    ],
    todo: ''
    }
    })
  }

toggleTodo = (todoId) => {
  this.setState( prevState => {
    return {
      todos: prevState.todos.map( todo => {
        if(todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    }
  })
}


clearCompleted = () => {
  this.setState( prevState => {
    return {
      todos: prevState.todos.filter(todo => {
        return !todo.completed;
      })
    }
  } )
}

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Todo List: MVP</h1>
        </div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <TodoForm todo={this.state.todo} inputHandler={this.inputHandler} addHandler={this.addHandler} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
