import React, { Component } from 'react';
import Todos from '/home/enas/Documents/to-do-app/src/Components/App to-do/App-to-do.js'
import AddTodo from '/home/enas/Documents/to-do-app/src/Components/Add-to-do/Add-to-do.js';

class App extends Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos:todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">My Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;