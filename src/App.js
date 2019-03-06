import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
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
    }
  }
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
