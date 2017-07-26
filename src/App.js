import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  addTodo(event) {
    event.preventDefault();

    let name = this.refs.name.value
    let completed = this.refs.completed.value

    console.log(name);
    console.log(completed);

    let todo = {
      name, 
      completed
    };

    console.log(todo);

    let todos = this.state.todos;

    console.log(todos)
    
    todos.push(todo);

    console.log(todos)

    this.setState({
      todos: todos
    });


  }


  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: [],
      title: 'React Todo app'

    }
  }


  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="App">
        <h1>{title}</h1>
        <form> 
          <input type="text" ref="name" placeholder="what has to be done?"/>
          <input type="text" ref="completed" placeholder="is it done?"/>
          <button onClick={this.addTodo}>Add Todo </button>
        </form>
        <ul> 
        {todos.map(todo => <li>{todo.name}</li>)}
        </ul>

      </div>
    );
  }
}

export default App;
